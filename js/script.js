const STORAGE_KEY = "liveCollectionParticipated";
const LANG_KEY = "liveCollectionLang";
const LANGS = ["ja", "en", "ko", "zh"];
const DEFAULT_LANG = LANGS[0];

let lang = detectLang();

// 保存した選択 → ブラウザの言語の順に選び、対応していなければ英語
function detectLang() {
    const saved = localStorage.getItem(LANG_KEY);
    if (LANGS.includes(saved)) return saved;
    for (const tag of navigator.languages || [navigator.language]) {
        const base = String(tag).toLowerCase().split("-")[0];
        if (LANGS.includes(base)) return base;
    }
    return DEFAULT_LANG;
}

function t(key, vars = {}) {
    return I18N.ui[lang][key].replace(/\{(\w+)\}/g, (_, name) => vars[name]);
}

function getName(o) {
    // The object may have "name.i18n" property, which contains translation maps for different languages.
    // If it does, try to get the name in the current language. If current language is not available, fall back to the default language.
    // In some case, the property may be a single string. Then use it as is. (POTENTIAL BUG: we cannot sure it is a valid, safe string.)
    // If the object doesn't have "name.i18n" property, fall back to "name" property.
    // If neither is available, return undefined.
    return o["name.i18n"]?.[lang] ?? o["name.i18n"]?.[DEFAULT_LANG] ?? o["name.i18n"] ?? o["name"] ?? undefined;
}

function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = t("title");
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    const select = document.getElementById("lang-select");
    select.value = lang;
    select.setAttribute("aria-label", t("language"));
}

let tours = [];

let attendedActs = new Set();

document.addEventListener("DOMContentLoaded",async() => {
    applyLanguage();

    document.getElementById("lang-select").addEventListener("change", event => {
        lang = event.target.value;
        localStorage.setItem(LANG_KEY, lang);
        applyLanguage();
        if (tours.length > 0) {
            renderLives();
            updateResults();
        }
    });

    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        try {
            attendedActs = new Set(JSON.parse(saved));
        } catch (error) {
            console.error("保存データの読み込みに失敗しました", error);
        }
    }

    try{
        const response = await fetch("./data/gakuen.json");

        if(!response.ok){
            throw new Error("ライブ情報の取得に失敗しました");
        }
        tours = await response.json();

        const validActIds = new Set(
            tours.flatMap(tour =>
                tour.acts.map(act => act.id)
            )
        );

        attendedActs = new Set(
            [...attendedActs].filter(id => validActIds.has(id))
        );

        renderLives();
        updateResults();
    } catch(error){
        console.error(error);
        document.getElementById("act-list").textContent=t("loadError")
    } 
});

function renderLives() {

    const container = document.getElementById("act-list");

    container.innerHTML = "";

    tours.forEach(tour => {

        // ツアー全体のセクション
        const section = document.createElement("section");
        section.className = "tour-section";

        // ツアータイトル
        const title = document.createElement("h3");
        title.className = "tour-title";
        title.textContent = getName(tour);

        // 公演カード一覧
        const cardList = document.createElement("div");
        cardList.className = "act-list";

        tour.acts.forEach(act => {

            const card = document.createElement("div");
            card.className = "act-card";

            const liveTitle = document.createElement("h4");
            liveTitle.textContent = getName(act);

            const date = document.createElement("p");
            date.className = "act-date";
            date.textContent = act.date;

            const count = document.createElement("p");
            count.className = "act-song-count";
            count.textContent = t("songCount", { n: act.songs.length });

            const label = document.createElement("label");
            label.className = "act-checkbox";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = attendedActs.has(act.id);

            const labelText = document.createElement("span");
            labelText.textContent = t("attendedCheck");

            checkbox.addEventListener("change", () => {

                if (checkbox.checked) {
                    attendedActs.add(act.id);
                } else {
                    attendedActs.delete(act.id);
                }

                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify([...attendedActs])
                );

                updateResults();
            });

            label.append(checkbox, labelText);

            card.append(liveTitle, date, count, label);

            cardList.appendChild(card);
        });

        section.append(title, cardList);

        container.appendChild(section);
    });
}

function updateResults() {

    // 全ライブの楽曲
    const allSongs = new Set();

    // 参加したライブの楽曲
    const collectedSongs = new Set();

    tours.forEach(tour => {

        tour.acts.forEach(act => {

            act.songs.forEach(song => {

                allSongs.add(song);

                if (attendedActs.has(act.id)) {
                    collectedSongs.add(song);
                }

            });

        });

    });

    // 未回収曲を抽出
    const uncollectedSongs = [...allSongs].filter(
        song => !collectedSongs.has(song)
    );

    // 数値
    const total = allSongs.size;
    const collected = collectedSongs.size;
    const uncollected = uncollectedSongs.size;

    // 回収率
    const rate = total === 0
        ? 0
        : Math.round((collected / total) * 100);

    
    renderUncollectedSongs(uncollectedSongs);

    // ライブ参加状況の集計
    const totalActsCount = tours.reduce(
        (total, tour) => total + tour.acts.length,
        0
    );

    const attendedActsCount = attendedActs.size;
    const unattendedActsCount = totalActsCount - attendedActsCount;

    document.getElementById("total-act-count").textContent = totalActsCount;
    document.getElementById("attended-act-count").textContent = attendedActsCount;
    document.getElementById("unattended-act-count").textContent = unattendedActsCount;

    // HTMLに反映
    const totalCount = allSongs.size;
    const collectedCount = collectedSongs.size;
    const uncollectedCount = totalCount - collectedCount;

    const progress = totalCount === 0
        ? 0
        : Math.round((collectedCount / totalCount) * 100);

    // 数値をHTMLに反映
    document.getElementById("total").textContent = totalCount;
    document.getElementById("collected").textContent = collectedCount;
    document.getElementById("uncollected").textContent = uncollectedCount;
    document.getElementById("progress-text").textContent = `${progress}%`;
}

function renderUncollectedSongs(songs) {

    const container = document.getElementById("uncollected-list");

    container.innerHTML = "";

    if (songs.length === 0) {

        const message = document.createElement("p");
        message.textContent = t("allCollected");
        container.appendChild(message);

        return;
    }

    songs.forEach(song => {

        const item = document.createElement("div");
        item.className = "song-item";
        item.textContent = song;

        container.appendChild(item);
    });
}
document.getElementById("share-x-button").addEventListener("click", () => {
    // 現在の回収率を取得
    const progress = document.getElementById("progress-text").textContent;

    // 現在のページURLを取得
    const pageUrl =　"https://ketchagon.github.io/gakumaslivechecker/?v=2";

    // 投稿内容
    const postText =
        `${t("shareText", { rate: progress })}\n` +
        `#学マスライブ回収率チェッカー\n` +
        `${pageUrl}`;

    // Xの投稿画面を開く
    const postUrl =
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(postText)}`;

    window.open(postUrl, "_blank");
});
