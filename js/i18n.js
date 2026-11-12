// 画面の文言とツアー名・公演名の翻訳。曲名は翻訳しない。
// names のキーは data/lives.json の原文の名前。ここにない名前は原文のまま表示される。
const I18N = {
    "ui": {
        "ja": {
            "title": "学マスライブ回収率チェッカー",
            "language": "言語",
            "intro1": "このページでは学マスのライブの参加率や曲の回収状況、未回収曲の絞り込みができます",
            "intro2": "公式とは全く関係ありません",
            "intro3": "一部イベントや楽曲については入れたり入れてなかったりしています",
            "intro4": "バージョンは言い出したらキリがないのでまとめてます",
            "intro5": "ご意見、不具合、文句、お気持ちなどは製作者まで",
            "creator": "製作者:",
            "songStatus": "楽曲回収状況",
            "totalSongs": "全楽曲",
            "collected": "回収済み",
            "uncollected": "未回収",
            "rate": "回収率",
            "liveStatus": "ライブ参加状況",
            "totalLives": "全ライブ",
            "attended": "参加",
            "notAttended": "未参加",
            "share": "𝕏  回収率をXに投稿する",
            "liveList": "ライブ一覧",
            "uncollectedSongs": "未回収楽曲",
            "loading": "読み込み中",
            "songCount": "収録曲：{n}曲",
            "attendedCheck": "参加済み",
            "allCollected": "全楽曲回収済みです",
            "loadError": "ライブ情報を読み込めませんでした",
            "shareText": "ライブでの楽曲の回収率は{rate}でした"
        },
        "en": {
            "title": "Gakumas Live Collection Checker",
            "language": "Language",
            "intro1": "Check your Gakumas concert attendance and song collection progress, and list the songs you haven't collected yet",
            "intro2": "Not affiliated with the official franchise in any way",
            "intro3": "Some events and songs are included and some are not",
            "intro4": "Song versions are merged, since splitting them would never end",
            "intro5": "Send feedback, bug reports, complaints, or feelings to the creator",
            "creator": "Creator: ",
            "songStatus": "Song Collection",
            "totalSongs": "All songs",
            "collected": "Collected",
            "uncollected": "Uncollected",
            "rate": "Collection rate",
            "liveStatus": "Concert Attendance",
            "totalLives": "All concerts",
            "attended": "Attended",
            "notAttended": "Not attended",
            "share": "𝕏  Share my rate on X",
            "liveList": "Concerts",
            "uncollectedSongs": "Uncollected Songs",
            "loading": "Loading…",
            "songCount": "Songs: {n}",
            "attendedCheck": "Attended",
            "allCollected": "You've collected every song!",
            "loadError": "Couldn't load concert data",
            "shareText": "My Gakumas concert song collection rate: {rate}"
        },
        "ko": {
            "title": "학원마스 라이브 회수율 체커",
            "language": "언어",
            "intro1": "이 페이지에서는 학원마스 라이브 참가율과 곡 회수 현황을 확인하고, 미회수 곡만 모아 볼 수 있습니다",
            "intro2": "공식과는 전혀 관계없습니다",
            "intro3": "일부 이벤트나 곡은 넣은 것도 있고 넣지 않은 것도 있습니다",
            "intro4": "버전은 따지기 시작하면 끝이 없어서 하나로 묶었습니다",
            "intro5": "의견, 버그, 불만, 소감 등은 제작자에게 보내 주세요",
            "creator": "제작자:",
            "songStatus": "곡 회수 현황",
            "totalSongs": "전체 곡",
            "collected": "회수함",
            "uncollected": "미회수",
            "rate": "회수율",
            "liveStatus": "라이브 참가 현황",
            "totalLives": "전체 라이브",
            "attended": "참가",
            "notAttended": "미참가",
            "share": "𝕏  회수율을 X에 공유하기",
            "liveList": "라이브 목록",
            "uncollectedSongs": "미회수 곡",
            "loading": "불러오는 중",
            "songCount": "수록곡: {n}곡",
            "attendedCheck": "참가함",
            "allCollected": "모든 곡을 회수했습니다",
            "loadError": "라이브 정보를 불러오지 못했습니다",
            "shareText": "라이브 곡 회수율은 {rate}였습니다"
        },
        "zh": {
            "title": "学马仕 Live 曲目收集率检查器",
            "language": "语言",
            "intro1": "本页面可以查看学马仕 Live 的参加率和曲目收集情况，并筛选出尚未收集的曲目",
            "intro2": "与官方完全无关",
            "intro3": "部分活动和曲目有的收录了，有的没有收录",
            "intro4": "版本差异一细究就没完没了，所以合并处理",
            "intro5": "意见、bug、吐槽、感想等请联系作者",
            "creator": "作者：",
            "songStatus": "曲目收集情况",
            "totalSongs": "全部曲目",
            "collected": "已收集",
            "uncollected": "未收集",
            "rate": "收集率",
            "liveStatus": "Live 参加情况",
            "totalLives": "全部 Live",
            "attended": "已参加",
            "notAttended": "未参加",
            "share": "𝕏  将收集率分享到 X",
            "liveList": "Live 列表",
            "uncollectedSongs": "未收集曲目",
            "loading": "加载中",
            "songCount": "收录曲目：{n}首",
            "attendedCheck": "已参加",
            "allCollected": "已收集全部曲目",
            "loadError": "无法加载 Live 信息",
            "shareText": "我的 Live 曲目收集率为{rate}"
        }
    },
    "names": {
        "初声公演 名古屋公演": {
            "en": "初声 Show: Nagoya",
            "ko": "初声 공연 나고야 공연",
            "zh": "初声公演 名古屋公演"
        },
        "初声公演 梅田公演 昼": {
            "en": "初声 Show: Umeda (Matinee)",
            "ko": "初声 공연 우메다 공연 낮",
            "zh": "初声公演 梅田公演 日场"
        },
        "初声公演 梅田公演 夜": {
            "en": "初声 Show: Umeda (Evening)",
            "ko": "初声 공연 우메다 공연 밤",
            "zh": "初声公演 梅田公演 夜场"
        },
        "初声公演 渋谷公演 昼": {
            "en": "初声 Show: Shibuya (Matinee)",
            "ko": "初声 공연 시부야 공연 낮",
            "zh": "初声公演 涩谷公演 日场"
        },
        "初声公演 渋谷公演 夜": {
            "en": "初声 Show: Shibuya (Evening)",
            "ko": "初声 공연 시부야 공연 밤",
            "zh": "初声公演 涩谷公演 夜场"
        },
        "初心公演 名古屋公演 昼": {
            "en": "初心 Show: Nagoya (Matinee)",
            "ko": "初心 공연 나고야 공연 낮",
            "zh": "初心公演 名古屋公演 日场"
        },
        "初心公演 名古屋公演 夜": {
            "en": "初心 Show: Nagoya (Evening)",
            "ko": "初心 공연 나고야 공연 밤",
            "zh": "初心公演 名古屋公演 夜场"
        },
        "初心公演 広島公演 昼": {
            "en": "初心 Show: Hiroshima (Matinee)",
            "ko": "初心 공연 히로시마 공연 낮",
            "zh": "初心公演 广岛公演 日场"
        },
        "初心公演 広島公演 夜": {
            "en": "初心 Show: Hiroshima (Evening)",
            "ko": "初心 공연 히로시마 공연 밤",
            "zh": "初心公演 广岛公演 夜场"
        },
        "初心公演 梅田公演 昼": {
            "en": "初心 Show: Umeda (Matinee)",
            "ko": "初心 공연 우메다 공연 낮",
            "zh": "初心公演 梅田公演 日场"
        },
        "初心公演 梅田公演 夜": {
            "en": "初心 Show: Umeda (Evening)",
            "ko": "初心 공연 우메다 공연 밤",
            "zh": "初心公演 梅田公演 夜场"
        },
        "初恋公演 梅田公演 昼": {
            "en": "初恋 Show: Umeda (Matinee)",
            "ko": "初恋 공연 우메다 공연 낮",
            "zh": "初恋公演 梅田公演 日场"
        },
        "初恋公演 梅田公演 夜": {
            "en": "初恋 Show: Umeda (Evening)",
            "ko": "初恋 공연 우메다 공연 밤",
            "zh": "初恋公演 梅田公演 夜场"
        },
        "初恋公演 広島公演 昼": {
            "en": "初恋 Show: Hiroshima (Matinee)",
            "ko": "初恋 공연 히로시마 공연 낮",
            "zh": "初恋公演 广岛公演 日场"
        },
        "初恋公演 広島公演 夜": {
            "en": "初恋 Show: Hiroshima (Evening)",
            "ko": "初恋 공연 히로시마 공연 밤",
            "zh": "初恋公演 广岛公演 夜场"
        },
        "初恋公演 渋谷公演 昼": {
            "en": "初恋 Show: Shibuya (Matinee)",
            "ko": "初恋 공연 시부야 공연 낮",
            "zh": "初恋公演 涩谷公演 日场"
        },
        "初恋公演 渋谷公演 夜": {
            "en": "初恋 Show: Shibuya (Evening)",
            "ko": "初恋 공연 시부야 공연 밤",
            "zh": "初恋公演 涩谷公演 夜场"
        },
        "初陣公演 名古屋公演 昼": {
            "en": "初陣 Show: Nagoya (Matinee)",
            "ko": "初陣 공연 나고야 공연 낮",
            "zh": "初阵公演 名古屋公演 日场"
        },
        "初陣公演 名古屋公演 夜": {
            "en": "初陣 Show: Nagoya (Evening)",
            "ko": "初陣 공연 나고야 공연 밤",
            "zh": "初阵公演 名古屋公演 夜场"
        },
        "初陣公演 梅田公演 昼": {
            "en": "初陣 Show: Umeda (Matinee)",
            "ko": "初陣 공연 우메다 공연 낮",
            "zh": "初阵公演 梅田公演 日场"
        },
        "初陣公演 梅田公演 夜": {
            "en": "初陣 Show: Umeda (Evening)",
            "ko": "初陣 공연 우메다 공연 밤",
            "zh": "初阵公演 梅田公演 夜场"
        },
        "初陣公演 渋谷公演 昼": {
            "en": "初陣 Show: Shibuya (Matinee)",
            "ko": "初陣 공연 시부야 공연 낮",
            "zh": "初阵公演 涩谷公演 日场"
        },
        "初陣公演 渋谷公演 夜": {
            "en": "初陣 Show: Shibuya (Evening)",
            "ko": "初陣 공연 시부야 공연 밤",
            "zh": "初阵公演 涩谷公演 夜场"
        },
        "初陣公演 東京追加公演 昼": {
            "en": "初陣 Show: Tokyo Extra (Matinee)",
            "ko": "初陣 공연 도쿄 추가 공연 낮",
            "zh": "初阵公演 东京追加公演 日场"
        },
        "初陣公演 東京追加公演 夜": {
            "en": "初陣 Show: Tokyo Extra (Evening)",
            "ko": "初陣 공연 도쿄 추가 공연 밤",
            "zh": "初阵公演 东京追加公演 夜场"
        },
        "エキスポミニライブ DAY1": {
            "en": "EXPO Mini Live DAY1",
            "ko": "엑스포 미니 라이브 DAY1",
            "zh": "EXPO 迷你 Live DAY1"
        },
        "エキスポミニライブ DAY2": {
            "en": "EXPO Mini Live DAY2",
            "ko": "엑스포 미니 라이브 DAY2",
            "zh": "EXPO 迷你 Live DAY2"
        },
        "リスアニ！ライブ 2025": {
            "en": "LisAni! LIVE 2025",
            "ko": "리스아니! 라이브 2025",
            "zh": "LisAni! LIVE 2025"
        },
        "昼公演": {
            "en": "Matinee",
            "ko": "낮 공연",
            "zh": "日场公演"
        },
        "夜公演": {
            "en": "Evening",
            "ko": "밤 공연",
            "zh": "夜场公演"
        },
        "初星学園放送部 公開録音 2025 ~放送部の優雅で軽やかで大騒ぎな1日~": {
            "en": "Hatsuboshi Gakuen Broadcasting Club Public Recording 2025 ~The Club's Elegant, Light, and Rowdy Day~",
            "ko": "하츠보시 학원 방송부 공개 녹음 2025 ~방송부의 우아하고 경쾌하고 떠들썩한 하루~",
            "zh": "初星学园广播部 公开录音 2025 ~广播部优雅轻快又热闹的一天~"
        },
        "第1部:放送部の優雅で大騒ぎな1日": {
            "en": "Part 1: The Club's Elegant, Rowdy Day",
            "ko": "제1부: 방송부의 우아하고 떠들썩한 하루",
            "zh": "第1部：广播部优雅又热闹的一天"
        },
        "第2部:放送部の軽やかで大騒ぎな1日": {
            "en": "Part 2: The Club's Light, Rowdy Day",
            "ko": "제2부: 방송부의 경쾌하고 떠들썩한 하루",
            "zh": "第2部：广播部轻快又热闹的一天"
        },
        "クラス対抗初星大運動会": {
            "en": "Inter-Class Hatsuboshi Sports Festival",
            "ko": "반 대항 하츠보시 대운동회",
            "zh": "班级对抗初星大运动会"
        },
        "初星音楽祭": {
            "en": "Hatsuboshi Music Festival",
            "ko": "하츠보시 음악제",
            "zh": "初星音乐祭"
        },
        "The 2nd Period H.I.F選抜試験": {
            "en": "The 2nd Period H.I.F Selection Exam",
            "ko": "The 2nd Period H.I.F 선발 시험",
            "zh": "The 2nd Period H.I.F 选拔考试"
        },
        "第一公演 -YAKUDOU-": {
            "en": "Show 1 -YAKUDOU-",
            "ko": "제1공연 -YAKUDOU-",
            "zh": "第一公演 -YAKUDOU-"
        },
        "第二公演 -ZESSYOU-": {
            "en": "Show 2 -ZESSYOU-",
            "ko": "제2공연 -ZESSYOU-",
            "zh": "第二公演 -ZESSYOU-"
        },
        "第三公演 -KYOUMEI-": {
            "en": "Show 3 -KYOUMEI-",
            "ko": "제3공연 -KYOUMEI-",
            "zh": "第三公演 -KYOUMEI-"
        },
        "福井公演 DAY1": {
            "en": "Fukui DAY1",
            "ko": "후쿠이 공연 DAY1",
            "zh": "福井公演 DAY1"
        },
        "福井公演 DAY2": {
            "en": "Fukui DAY2",
            "ko": "후쿠이 공연 DAY2",
            "zh": "福井公演 DAY2"
        },
        "福岡公演 DAY1": {
            "en": "Fukuoka DAY1",
            "ko": "후쿠오카 공연 DAY1",
            "zh": "福冈公演 DAY1"
        },
        "福岡公演 DAY2": {
            "en": "Fukuoka DAY2",
            "ko": "후쿠오카 공연 DAY2",
            "zh": "福冈公演 DAY2"
        },
        "岩手公演 DAY1": {
            "en": "Iwate DAY1",
            "ko": "이와테 공연 DAY1",
            "zh": "岩手公演 DAY1"
        },
        "岩手公演 DAY2": {
            "en": "Iwate DAY2",
            "ko": "이와테 공연 DAY2",
            "zh": "岩手公演 DAY2"
        },
        "ファイナル公演 DAY1": {
            "en": "Final DAY1",
            "ko": "파이널 공연 DAY1",
            "zh": "最终公演 DAY1"
        },
        "ファイナル公演 DAY2": {
            "en": "Final DAY2",
            "ko": "파이널 공연 DAY2",
            "zh": "最终公演 DAY2"
        }
    }
};
