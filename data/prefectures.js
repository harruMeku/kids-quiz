// 都道府県データ（全47都道府県）
const PREFECTURE_DATA = [
  // 北海道地方
  { name: "北海道", capital: "札幌市", region: "北海道地方", neighbors: ["青森県"], features: ["日本で一番大きい都道府県", "雪まつりが有名", "ラベンダー畑が美しい"] },

  // 東北地方
  { name: "青森県", capital: "青森市", region: "東北地方", neighbors: ["北海道", "岩手県", "秋田県"], features: ["りんごの生産量が日本一", "ねぶた祭りが有名"] },
  { name: "岩手県", capital: "盛岡市", region: "東北地方", neighbors: ["青森県", "秋田県", "宮城県"], features: ["わんこそばが有名", "日本で二番目に大きい県"] },
  { name: "宮城県", capital: "仙台市", region: "東北地方", neighbors: ["岩手県", "秋田県", "山形県", "福島県"], features: ["牛タンが有名", "七夕まつりが有名"] },
  { name: "秋田県", capital: "秋田市", region: "東北地方", neighbors: ["青森県", "岩手県", "宮城県", "山形県"], features: ["なまはげが有名", "きりたんぽが名物"] },
  { name: "山形県", capital: "山形市", region: "東北地方", neighbors: ["秋田県", "宮城県", "福島県", "新潟県"], features: ["さくらんぼの生産量が日本一", "蔵王の樹氷が有名"] },
  { name: "福島県", capital: "福島市", region: "東北地方", neighbors: ["宮城県", "山形県", "茨城県", "栃木県", "群馬県", "新潟県"], features: ["ももの生産量が多い", "猪苗代湖がある"] },

  // 関東地方
  { name: "茨城県", capital: "水戸市", region: "関東地方", neighbors: ["福島県", "栃木県", "埼玉県", "千葉県"], features: ["納豆が有名", "偕楽園の梅が有名"] },
  { name: "栃木県", capital: "宇都宮市", region: "関東地方", neighbors: ["福島県", "茨城県", "群馬県", "埼玉県"], features: ["ぎょうざが有名", "日光東照宮がある"] },
  { name: "群馬県", capital: "前橋市", region: "関東地方", neighbors: ["福島県", "栃木県", "埼玉県", "長野県", "新潟県"], features: ["こんにゃくの生産量が日本一", "草津温泉が有名"] },
  { name: "埼玉県", capital: "さいたま市", region: "関東地方", neighbors: ["茨城県", "栃木県", "群馬県", "千葉県", "東京都", "山梨県", "長野県"], features: ["ひな人形の生産が有名", "川越の蔵造りの町並み"] },
  { name: "千葉県", capital: "千葉市", region: "関東地方", neighbors: ["茨城県", "埼玉県", "東京都"], features: ["落花生の生産量が日本一", "東京ディズニーリゾートがある"] },
  { name: "東京都", capital: "新宿区（都庁所在地）", region: "関東地方", neighbors: ["埼玉県", "千葉県", "神奈川県", "山梨県"], features: ["日本の首都", "東京タワーやスカイツリーがある"] },
  { name: "神奈川県", capital: "横浜市", region: "関東地方", neighbors: ["東京都", "山梨県", "静岡県"], features: ["横浜中華街が有名", "鎌倉の大仏がある"] },

  // 中部地方
  { name: "新潟県", capital: "新潟市", region: "中部地方", neighbors: ["山形県", "福島県", "群馬県", "長野県", "富山県"], features: ["お米の生産量が多い（コシヒカリ）", "佐渡島がある"] },
  { name: "富山県", capital: "富山市", region: "中部地方", neighbors: ["新潟県", "長野県", "岐阜県", "石川県"], features: ["ホタルイカが有名", "立山黒部アルペンルートがある"] },
  { name: "石川県", capital: "金沢市", region: "中部地方", neighbors: ["富山県", "岐阜県", "福井県"], features: ["兼六園が有名", "輪島塗が伝統工芸"] },
  { name: "福井県", capital: "福井市", region: "中部地方", neighbors: ["石川県", "岐阜県", "滋賀県", "京都府"], features: ["恐竜の化石がたくさん見つかる", "越前がにが有名"] },
  { name: "山梨県", capital: "甲府市", region: "中部地方", neighbors: ["埼玉県", "東京都", "神奈川県", "長野県", "静岡県"], features: ["ぶどうの生産量が日本一", "富士山の北側にある"] },
  { name: "長野県", capital: "長野市", region: "中部地方", neighbors: ["新潟県", "群馬県", "埼玉県", "山梨県", "静岡県", "愛知県", "岐阜県", "富山県"], features: ["りんごの生産量が多い", "善光寺が有名"] },
  { name: "岐阜県", capital: "岐阜市", region: "中部地方", neighbors: ["富山県", "石川県", "福井県", "長野県", "愛知県", "三重県", "滋賀県"], features: ["白川郷の合掌造りが有名", "鵜飼いが伝統"] },
  { name: "静岡県", capital: "静岡市", region: "中部地方", neighbors: ["神奈川県", "山梨県", "長野県", "愛知県"], features: ["お茶の生産量が日本一", "富士山の南側にある"] },
  { name: "愛知県", capital: "名古屋市", region: "中部地方", neighbors: ["静岡県", "長野県", "岐阜県", "三重県"], features: ["自動車工業がさかん", "名古屋城が有名"] },

  // 近畿地方
  { name: "三重県", capital: "津市", region: "近畿地方", neighbors: ["愛知県", "岐阜県", "滋賀県", "京都府", "奈良県", "和歌山県"], features: ["伊勢神宮がある", "松阪牛が有名"] },
  { name: "滋賀県", capital: "大津市", region: "近畿地方", neighbors: ["福井県", "岐阜県", "三重県", "京都府"], features: ["琵琶湖は日本一大きい湖", "近江牛が有名"] },
  { name: "京都府", capital: "京都市", region: "近畿地方", neighbors: ["福井県", "滋賀県", "三重県", "奈良県", "大阪府", "兵庫県"], features: ["昔の都（平安京）", "金閣寺や銀閣寺が有名"] },
  { name: "大阪府", capital: "大阪市", region: "近畿地方", neighbors: ["京都府", "奈良県", "兵庫県", "和歌山県"], features: ["たこやきやお好み焼きが有名", "大阪城がある"] },
  { name: "兵庫県", capital: "神戸市", region: "近畿地方", neighbors: ["京都府", "大阪府", "鳥取県", "岡山県"], features: ["姫路城が世界遺産", "神戸ビーフが有名"] },
  { name: "奈良県", capital: "奈良市", region: "近畿地方", neighbors: ["京都府", "大阪府", "三重県", "和歌山県"], features: ["奈良の大仏がある", "鹿が有名"] },
  { name: "和歌山県", capital: "和歌山市", region: "近畿地方", neighbors: ["大阪府", "奈良県", "三重県"], features: ["みかんの生産量が日本一", "高野山が有名"] },

  // 中国地方
  { name: "鳥取県", capital: "鳥取市", region: "中国地方", neighbors: ["兵庫県", "島根県", "岡山県", "広島県"], features: ["鳥取砂丘が有名", "人口が日本で一番少ない県"] },
  { name: "島根県", capital: "松江市", region: "中国地方", neighbors: ["鳥取県", "広島県", "山口県"], features: ["出雲大社がある", "宍道湖のしじみが有名"] },
  { name: "岡山県", capital: "岡山市", region: "中国地方", neighbors: ["兵庫県", "鳥取県", "広島県", "香川県"], features: ["桃太郎伝説の地", "マスカットが有名"] },
  { name: "広島県", capital: "広島市", region: "中国地方", neighbors: ["鳥取県", "島根県", "岡山県", "山口県", "愛媛県"], features: ["原爆ドームが世界遺産", "もみじまんじゅうが有名"] },
  { name: "山口県", capital: "山口市", region: "中国地方", neighbors: ["島根県", "広島県", "福岡県", "大分県"], features: ["ふぐが有名", "秋芳洞がある"] },

  // 四国地方
  { name: "徳島県", capital: "徳島市", region: "四国地方", neighbors: ["香川県", "愛媛県", "高知県"], features: ["阿波おどりが有名", "すだちが名産"] },
  { name: "香川県", capital: "高松市", region: "四国地方", neighbors: ["徳島県", "愛媛県", "岡山県"], features: ["讃岐うどんが有名", "日本で一番小さい県"] },
  { name: "愛媛県", capital: "松山市", region: "四国地方", neighbors: ["香川県", "徳島県", "高知県", "広島県"], features: ["みかんの生産量が多い", "道後温泉が有名"] },
  { name: "高知県", capital: "高知市", region: "四国地方", neighbors: ["徳島県", "愛媛県"], features: ["かつおのたたきが有名", "坂本龍馬の出身地"] },

  // 九州地方
  { name: "福岡県", capital: "福岡市", region: "九州地方", neighbors: ["山口県", "佐賀県", "大分県", "熊本県"], features: ["博多ラーメンが有名", "太宰府天満宮がある"] },
  { name: "佐賀県", capital: "佐賀市", region: "九州地方", neighbors: ["福岡県", "長崎県"], features: ["有田焼が有名", "吉野ヶ里遺跡がある"] },
  { name: "長崎県", capital: "長崎市", region: "九州地方", neighbors: ["佐賀県"], features: ["カステラが有名", "平和公園がある"] },
  { name: "熊本県", capital: "熊本市", region: "九州地方", neighbors: ["福岡県", "大分県", "宮崎県", "鹿児島県"], features: ["熊本城が有名", "くまモンのふるさと"] },
  { name: "大分県", capital: "大分市", region: "九州地方", neighbors: ["福岡県", "熊本県", "宮崎県", "山口県"], features: ["温泉の数が日本一", "別府温泉が有名"] },
  { name: "宮崎県", capital: "宮崎市", region: "九州地方", neighbors: ["大分県", "熊本県", "鹿児島県"], features: ["マンゴーが有名", "高千穂峡がある"] },
  { name: "鹿児島県", capital: "鹿児島市", region: "九州地方", neighbors: ["熊本県", "宮崎県"], features: ["桜島がある", "さつまいもが有名"] },
  { name: "沖縄県", capital: "那覇市", region: "九州地方", neighbors: [], features: ["日本で一番南にある県", "美しい海やサンゴ礁が有名"] },
];

// 小学校で習う地図記号データ
// SVGで正確な地図記号を描画する
const MAP_SYMBOL_DATA = [
  { name: "神社", symbol: "⛩", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><line x1="10" y1="20" x2="50" y2="20" stroke="#333" stroke-width="3"/><line x1="15" y1="10" x2="45" y2="10" stroke="#333" stroke-width="3"/><line x1="30" y1="10" x2="30" y2="50" stroke="#333" stroke-width="3"/><line x1="20" y1="20" x2="20" y2="50" stroke="#333" stroke-width="3"/><line x1="40" y1="20" x2="40" y2="50" stroke="#333" stroke-width="3"/></svg>', description: "鳥居（とりい）の形をした記号" },
  { name: "寺院", symbol: "卍", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><text x="30" y="42" text-anchor="middle" font-size="36" fill="#333">卍</text></svg>', description: "まんじ の形をした記号" },
  { name: "学校", symbol: "文", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><text x="30" y="42" text-anchor="middle" font-size="36" fill="#333">文</text></svg>', description: "「文」の字の記号" },
  { name: "郵便局", symbol: "〒", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><text x="30" y="42" text-anchor="middle" font-size="36" fill="#333">〒</text></svg>', description: "「〒」マークの記号" },
  { name: "交番", symbol: "◎", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><line x1="10" y1="30" x2="50" y2="30" stroke="#333" stroke-width="3"/><line x1="30" y1="10" x2="30" y2="50" stroke="#333" stroke-width="3"/><circle cx="30" cy="30" r="10" fill="none" stroke="#333" stroke-width="2"/></svg>', description: "丸の中にバツ印がある記号" },
  { name: "消防署", symbol: "Y", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><line x1="30" y1="50" x2="30" y2="25" stroke="#333" stroke-width="3"/><line x1="30" y1="25" x2="15" y2="10" stroke="#333" stroke-width="3"/><line x1="30" y1="25" x2="45" y2="10" stroke="#333" stroke-width="3"/></svg>', description: "さすまたの形をした記号" },
  { name: "病院", symbol: "＋", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><line x1="15" y1="30" x2="45" y2="30" stroke="#333" stroke-width="4"/><line x1="30" y1="15" x2="30" y2="45" stroke="#333" stroke-width="4"/></svg>', description: "十字（プラス）の形をした記号" },
  { name: "図書館", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><path d="M15 45 L30 15 L45 45" fill="none" stroke="#333" stroke-width="3"/><line x1="15" y1="45" x2="45" y2="45" stroke="#333" stroke-width="3"/></svg>', symbol: "本のマーク", description: "開いた本の形をした記号" },
  { name: "工場", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><circle cx="30" cy="30" r="15" fill="none" stroke="#333" stroke-width="3"/><line x1="30" y1="15" x2="30" y2="45" stroke="#333" stroke-width="2"/><line x1="15" y1="30" x2="45" y2="30" stroke="#333" stroke-width="2"/><line x1="19" y1="19" x2="41" y2="41" stroke="#333" stroke-width="2"/><line x1="41" y1="19" x2="19" y2="41" stroke="#333" stroke-width="2"/></svg>', symbol: "歯車マーク", description: "歯車の形をした記号" },
  { name: "市役所・区役所", symbol: "◎", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><circle cx="30" cy="30" r="18" fill="none" stroke="#333" stroke-width="3"/><circle cx="30" cy="30" r="6" fill="#333"/></svg>', description: "二重丸の記号" },
  { name: "田", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><line x1="10" y1="30" x2="50" y2="30" stroke="#333" stroke-width="3"/><line x1="30" y1="10" x2="30" y2="50" stroke="#333" stroke-width="3"/></svg>', symbol: "十字", description: "二本の線が交差した記号（田んぼ・水田）" },
  { name: "畑", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><line x1="10" y1="30" x2="50" y2="30" stroke="#333" stroke-width="3"/><line x1="20" y1="30" x2="20" y2="12" stroke="#333" stroke-width="2"/><line x1="30" y1="30" x2="30" y2="12" stroke="#333" stroke-width="2"/><line x1="40" y1="30" x2="40" y2="12" stroke="#333" stroke-width="2"/></svg>', symbol: "V V V", description: "横線の上にタテ棒が並んだ記号" },
  { name: "果樹園", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><circle cx="20" cy="30" r="8" fill="none" stroke="#333" stroke-width="2.5"/><circle cx="40" cy="30" r="8" fill="none" stroke="#333" stroke-width="2.5"/><circle cx="30" cy="15" r="8" fill="none" stroke="#333" stroke-width="2.5"/></svg>', symbol: "○○○", description: "丸が3つ並んだ記号（くだもの畑）" },
  { name: "茶畑", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><circle cx="30" cy="15" r="4" fill="#333"/><circle cx="20" cy="35" r="4" fill="#333"/><circle cx="40" cy="35" r="4" fill="#333"/></svg>', symbol: "∵", description: "点が3つの記号（お茶の畑）" },
  { name: "広葉樹林", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><circle cx="30" cy="20" r="14" fill="none" stroke="#333" stroke-width="2.5"/><line x1="30" y1="34" x2="30" y2="50" stroke="#333" stroke-width="3"/></svg>', symbol: "丸い木", description: "丸い木の形の記号（葉っぱが広い木の林）" },
  { name: "針葉樹林", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><polygon points="30,8 18,38 42,38" fill="none" stroke="#333" stroke-width="2.5"/><line x1="30" y1="38" x2="30" y2="52" stroke="#333" stroke-width="3"/></svg>', symbol: "三角の木", description: "三角の木の形の記号（葉っぱがとがった木の林）" },
  { name: "温泉", symbol: "♨", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><text x="30" y="45" text-anchor="middle" font-size="40" fill="#333">♨</text></svg>', description: "湯けむりの記号" },
  { name: "三角点", symbol: "△", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><polygon points="30,10 10,50 50,50" fill="none" stroke="#333" stroke-width="3"/></svg>', description: "三角形の記号（山の高さを測る目じるし）" },
  { name: "城跡", symbolSvg: '<svg viewBox="0 0 60 60" width="60" height="60"><rect x="12" y="30" width="36" height="20" fill="none" stroke="#333" stroke-width="2.5"/><rect x="12" y="20" width="9" height="10" fill="none" stroke="#333" stroke-width="2"/><rect x="25.5" y="20" width="9" height="10" fill="none" stroke="#333" stroke-width="2"/><rect x="39" y="20" width="9" height="10" fill="none" stroke="#333" stroke-width="2"/></svg>', symbol: "城マーク", description: "お城の形をした記号" },
];
