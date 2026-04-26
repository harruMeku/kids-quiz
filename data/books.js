// ===== おすすめの本データ =====
// Each child has 60 books. Only 20 are shown at a time.
// Books dismissed via "興味なし" are replaced from the pool.

const BOOK_DATA = {
  hikari: [
    // --- Original 20 ---
    {
      title: "エルマーのぼうけん",
      author: "ルース・スタイルス・ガネット",
      description: "みかんじまに つかまった りゅうの あかちゃんを たすけにいく おはなし。エルマーの もちものが すごい！",
      reason: "ピッピみたいに ゆうきのある こどもが だいかつやく。よみだしたら とまらないよ！",
      genre: "ぼうけん",
      emoji: "🐉",
      difficulty: 2
    },
    {
      title: "おしいれのぼうけん",
      author: "ふるた たるひ・たばた せいいち",
      description: "おしいれに いれられた ふたりが、くらいせかいで ぼうけんする おはなし。ちょっと こわいけど ドキドキ！",
      reason: "えが いっぱいで よみやすくて、こわいけど さいごは ほっとするよ。",
      genre: "ぼうけん",
      emoji: "🚪",
      difficulty: 1
    },
    {
      title: "かいけつゾロリの ドラゴンたいじ",
      author: "はら ゆたか",
      description: "きつねの ゾロリが イシシとノシシと いっしょに おもしろ だいぼうけん！",
      reason: "おもしろくて ゲラゲラ わらえるよ。シリーズが いっぱい あるから ずっと たのしめる！",
      genre: "ギャグ・ぼうけん",
      emoji: "🦊",
      difficulty: 1,
      unext: true,
      bookwalker: true
    },
    {
      title: "おばけずかん",
      author: "さいとう しのぶ",
      description: "いろんな おばけが でてくるよ。こわい？ いいえ、さいごは ぜんぶ「だいじょうぶ」！",
      reason: "みじかい おはなしが いっぱいで、1つずつ よめるよ。おばけが かわいい！",
      genre: "おばけ",
      emoji: "👻",
      difficulty: 1
    },
    {
      title: "ふしぎ駄菓子屋 銭天堂",
      author: "ひろしま れいこ",
      description: "ふしぎな おかしやさんで かった おかしを たべると、ふしぎなことが おこるよ！",
      reason: "テレビアニメにも なった にんきシリーズ。おかしの しゅるいが おもしろい！",
      genre: "ファンタジー",
      emoji: "🍬",
      difficulty: 2,
      unext: true
    },
    {
      title: "すみっコぐらし そらいろのまいにち",
      author: "よこみぞ ゆり",
      description: "すみっコたちが どうして すみっこが すきなのか、それぞれの おはなし。",
      reason: "すみっコぐらしが すきなら ぜったい よみたい！ じんわり やさしい おはなし。",
      genre: "おはなし",
      emoji: "🧸",
      difficulty: 1,
      unext: true
    },
    {
      title: "わかったさんの おかしシリーズ（クッキー）",
      author: "てらむら てるお",
      description: "わかったさんが おかしを つくりながら ふしぎなせかいに まきこまれる！",
      reason: "おかしの つくりかたも わかるし、おはなしも たのしい。1さつが みじかいよ。",
      genre: "ファンタジー",
      emoji: "🍪",
      difficulty: 1
    },
    {
      title: "こまったさんの レストラン（スパゲティ）",
      author: "てらむら てるお",
      description: "こまったさんが おりょうりを つくると、ふしぎなことが おこるよ！",
      reason: "わかったさんの シリーズと にてるよ。おりょうりが すきなこに ぴったり！",
      genre: "ファンタジー",
      emoji: "🍝",
      difficulty: 1
    },
    {
      title: "マジック・ツリーハウス",
      author: "メアリー・ポープ・オズボーン",
      description: "ふしぎな ツリーハウスから、いろんな じだいや ばしょに タイムスリップ！",
      reason: "ぼうけんが いっぱいで、れきしや ちりも ちょっと まなべるよ。シリーズが たくさん！",
      genre: "ぼうけん",
      emoji: "🏠",
      difficulty: 2
    },
    {
      title: "ルルとララの カップケーキ",
      author: "あんびる やすこ",
      description: "もりの ちいさな おかしやさんの ルルとララが、おいしい おかしを つくるよ！",
      reason: "かわいい イラストと おかしの レシピが ついてるよ。じぶんでも つくれる！",
      genre: "おかし・ファンタジー",
      emoji: "🧁",
      difficulty: 1
    },
    {
      title: "10分で読める おはなし 1年生",
      author: "おかしゅうぞう（へんしゅう）",
      description: "10ぷんで よめる みじかい おはなしが いっぱい はいってるよ。",
      reason: "みじかい おはなしだから、ねるまえに 1つずつ よめるよ。",
      genre: "みじかいおはなし",
      emoji: "⏰",
      difficulty: 1
    },
    {
      title: "ノラネコぐんだん と かいぞくせん",
      author: "くどう のりこ",
      description: "ノラネコぐんだんが かいぞくせんに のりこむ ぼうけんストーリー！",
      reason: "えほんで にんきの ノラネコぐんだんの ながい おはなし。えが いっぱい！",
      genre: "ぼうけん",
      emoji: "🐱",
      difficulty: 1
    },
    {
      title: "はれときどきぶた",
      author: "やなせ たかし",
      description: "のりひくんが にっきに ウソを かいたら、ほんとうに なっちゃった！",
      reason: "おもしろくて ありえない ことが どんどん おこるよ。ゲラゲラ わらえる！",
      genre: "ギャグ",
      emoji: "🐷",
      difficulty: 1
    },
    {
      title: "かがくのおはなし 1年生",
      author: "がくけん",
      description: "どうぶつや しぜんの ふしぎが いっぱい。しらなかった！が みつかるよ。",
      reason: "「なんで？」が すきなこに ぴったり。みじかい おはなしで よみやすい。",
      genre: "かがく",
      emoji: "🔬",
      difficulty: 1
    },
    {
      title: "ぞくぞく村の おばけシリーズ",
      author: "まつたに みよこ",
      description: "ぞくぞく村に すんでいる おばけたちの ゆかいな まいにち！",
      reason: "おばけずかんが すきなら つぎは これ！ もうちょっと ながい おはなしに チャレンジ。",
      genre: "おばけ",
      emoji: "🏚️",
      difficulty: 2
    },
    {
      title: "ほねほねザウルス",
      author: "カバヤしょくひん（げんさく）・ぐるーぷ・コロンブス",
      description: "ほねほねザウルスたちが ぼうけんの たびに でかける おはなし！",
      reason: "きょうりゅうが すきなこに。えが たくさんで よみやすいよ。",
      genre: "ぼうけん",
      emoji: "🦕",
      difficulty: 1
    },
    {
      title: "おしりたんてい",
      author: "トロル",
      description: "おしりのかたちの かおを した めいたんていが じけんを かいけつ！",
      reason: "なぞときが たのしい！ えさがしも あって よむだけじゃない おもしろさ。",
      genre: "なぞとき",
      emoji: "🔍",
      difficulty: 1,
      unext: true
    },
    {
      title: "ながくつ下のピッピ（つづき）せかいいちつよい女の子",
      author: "リンドグレーン",
      description: "ピッピの つづきの おはなし。もっと すごい ぼうけんが まってるよ！",
      reason: "ピッピが だいすきなら、つづきも よんでみよう！",
      genre: "ぼうけん",
      emoji: "🧡",
      difficulty: 2
    },
    {
      title: "りんごかもしれない",
      author: "ヨシタケ シンスケ",
      description: "テーブルの うえの りんご。でも、ほんとうに りんご？ もしかしたら…",
      reason: "よみきかせでも にんき！ じぶんで よんでも たのしい。かんがえるって おもしろい！",
      genre: "ユーモア",
      emoji: "🍎",
      difficulty: 1
    },
    {
      title: "ドラえもんの がくしゅうシリーズ（さんすう）",
      author: "ふじこ・えふ・ふじお",
      description: "ドラえもんと のびたが さんすうの ふしぎを ぼうけん！",
      reason: "まんがだから よみやすい。さんすうが もっと すきになるかも！",
      genre: "がくしゅうまんが",
      emoji: "📘",
      difficulty: 1,
      unext: true
    },
    // --- Additional 40 books for ひかり ---
    {
      title: "かいけつゾロリの きょうふのゆうえんち",
      author: "はら ゆたか",
      description: "ゾロリが ゆうえんちで おおさわぎ！ わらいが とまらない ぼうけん。",
      reason: "ゾロリが すきなら もっと よもう！ まいかい ちがう ぼうけんが たのしい。",
      genre: "ギャグ・ぼうけん",
      emoji: "🎢",
      difficulty: 1,
      unext: true,
      bookwalker: true
    },
    {
      title: "かいけつゾロリの まほうつかいのでし",
      author: "はら ゆたか",
      description: "ゾロリが まほうつかいの でしに なっちゃった！ まほうで おおさわぎ。",
      reason: "まほうの おはなしが すきなこに ぴったり。ゾロリの まほうは いつも めちゃくちゃ！",
      genre: "ギャグ・ぼうけん",
      emoji: "🪄",
      difficulty: 1,
      unext: true,
      bookwalker: true
    },
    {
      title: "ほねほねザウルス ティラノ・ベビーの ぼうけん",
      author: "ぐるーぷ・コロンブス",
      description: "ちいさな ティラノが おおきな ぼうけんに でかける おはなし！",
      reason: "きょうりゅうの あかちゃんが かわいくて つよい。えが いっぱい！",
      genre: "ぼうけん",
      emoji: "🦖",
      difficulty: 1
    },
    {
      title: "おばけずかん がっこうの おばけ",
      author: "さいとう しのぶ",
      description: "がっこうに でる おばけが いっぱい。トイレの はなこさんも でるよ！",
      reason: "がっこうの おばけなら みぢかで ドキドキ。でも さいごは だいじょうぶ！",
      genre: "おばけ",
      emoji: "🏫",
      difficulty: 1
    },
    {
      title: "おばけずかん レストランの おばけ",
      author: "さいとう しのぶ",
      description: "レストランに でてくる おばけたち。おいしい？ こわい？",
      reason: "たべものと おばけの くみあわせが おもしろい。みじかい おはなしで よみやすい！",
      genre: "おばけ",
      emoji: "🍽️",
      difficulty: 1
    },
    {
      title: "10歳までに読みたい世界名作 オズのまほうつかい",
      author: "バウム（さく）・横山洋子（かんしゅう）",
      description: "たつまきで とばされた ドロシーが、まほうの くにで なかまと ぼうけん！",
      reason: "ゆうきと ゆうじょうの おはなし。えが いっぱいで よみやすいよ。",
      genre: "ファンタジー",
      emoji: "🌪️",
      difficulty: 2
    },
    {
      title: "10歳までに読みたい世界名作 あしながおじさん",
      author: "ウェブスター（さく）・横山洋子（かんしゅう）",
      description: "おてがみを かく おんなのこの、たのしくて あたたかい おはなし。",
      reason: "おてがみが すきなこに ぴったり。こころが あったかくなるよ。",
      genre: "おはなし",
      emoji: "💌",
      difficulty: 2
    },
    {
      title: "10歳までに読みたい世界名作 赤毛のアン",
      author: "モンゴメリ（さく）・横山洋子（かんしゅう）",
      description: "おしゃべりで げんきな アンが、グリーン・ゲイブルズで いっぱい さわぎをおこす！",
      reason: "げんきな おんなのこが だいかつやく。アンの そうぞうりょくが すごい！",
      genre: "おはなし",
      emoji: "🏡",
      difficulty: 2
    },
    {
      title: "ぞくぞく村の ミイラのラムさん",
      author: "まつたに みよこ",
      description: "ミイラの ラムさんの ゆかいな まいにち。おばけの むらは たのしいよ！",
      reason: "ぞくぞく村シリーズの なかでも にんき。ちょっと ながいけど がんばれる！",
      genre: "おばけ",
      emoji: "🧟",
      difficulty: 2
    },
    {
      title: "ぞくぞく村の おおかみおとこ",
      author: "まつたに みよこ",
      description: "おおかみおとこが ぞくぞく村で おおさわぎ！",
      reason: "おばけが すきなら ぞくぞく村を ぜんぶ よもう！",
      genre: "おばけ",
      emoji: "🐺",
      difficulty: 2
    },
    {
      title: "なぜ？どうして？ かがくの おはなし 1年生",
      author: "がくけん",
      description: "「おほしさまは なぜ ひかるの？」いろんな なぜ？に こたえてくれるよ。",
      reason: "「なんで？なんで？」が とまらない こに。しぜんの ふしぎが いっぱい！",
      genre: "かがく",
      emoji: "✨",
      difficulty: 1
    },
    {
      title: "しぜんの おはなし 1年生",
      author: "がくけん",
      description: "どうぶつや むしの びっくりする おはなしが いっぱい。",
      reason: "いきものが すきなこに。みじかくて よみやすい おはなしが たくさん。",
      genre: "かがく",
      emoji: "🐛",
      difficulty: 1
    },
    {
      title: "ヨシタケシンスケの つまんない つまんない",
      author: "ヨシタケ シンスケ",
      description: "「つまんない」って なんだろう？ かんがえると おもしろくなってくる！",
      reason: "りんごかもしれない が すきなら これも ぜったい すき！",
      genre: "ユーモア",
      emoji: "😑",
      difficulty: 1
    },
    {
      title: "ヨシタケシンスケの もう ぬげない",
      author: "ヨシタケ シンスケ",
      description: "ふくが ぬげなくなった おとこのこ。ずっと このままだったら どうしよう？",
      reason: "ゲラゲラ わらえて、さいごは ちょっと かんがえさせられる えほん。",
      genre: "ユーモア",
      emoji: "👕",
      difficulty: 1
    },
    {
      title: "わかったさんの おかしシリーズ（ドーナツ）",
      author: "てらむら てるお",
      description: "わかったさんが ドーナツを つくると、また ふしぎなことが！",
      reason: "クッキーが よめたら ドーナツも よもう！ レシピも ついてるよ。",
      genre: "ファンタジー",
      emoji: "🍩",
      difficulty: 1
    },
    {
      title: "わかったさんの おかしシリーズ（アイスクリーム）",
      author: "てらむら てるお",
      description: "わかったさんの アイスクリームの おはなし。なつに よみたい！",
      reason: "おかしづくりと ぼうけんの りょうほうが たのしめるよ。",
      genre: "ファンタジー",
      emoji: "🍦",
      difficulty: 1
    },
    {
      title: "ルルとララの アイスクリーム",
      author: "あんびる やすこ",
      description: "ルルとララが おいしい アイスクリームを つくるよ！",
      reason: "カップケーキが すきなら アイスクリームも よもう！ レシピつき。",
      genre: "おかし・ファンタジー",
      emoji: "🍨",
      difficulty: 1
    },
    {
      title: "ルルとララの フレンチトースト",
      author: "あんびる やすこ",
      description: "あさごはんに ぴったりの フレンチトーストを つくろう！",
      reason: "じぶんで つくれる レシピが うれしい。かわいい えも たのしい。",
      genre: "おかし・ファンタジー",
      emoji: "🍞",
      difficulty: 1
    },
    {
      title: "おしりたんてい ププッ レインボーダイヤの なぞ",
      author: "トロル",
      description: "にじいろの ダイヤが ぬすまれた！ おしりたんていが なぞを とく！",
      reason: "おしりたんていが すきなら、えさがしも なぞときも いっぱい たのしめる！",
      genre: "なぞとき",
      emoji: "💎",
      difficulty: 1,
      unext: true
    },
    {
      title: "おしりたんてい ププッ おしりたんていが ふたりいる！？",
      author: "トロル",
      description: "おしりたんていが ふたり？ にせものは だれだ！",
      reason: "おしりたんていの シリーズは どれも おもしろい。なぞが いっぱい！",
      genre: "なぞとき",
      emoji: "🕵️",
      difficulty: 1,
      unext: true
    },
    {
      title: "こぐまの ケーキやさん",
      author: "いとう みく",
      description: "ちいさな こぐまが ケーキやさんを はじめる やさしい おはなし。",
      reason: "どうぶつが すきなこ、おかしが すきなこに ぴったり。こころが あったかくなるよ。",
      genre: "おはなし",
      emoji: "🐻",
      difficulty: 1
    },
    {
      title: "すみっコぐらし ここが おちつくんです",
      author: "よこみぞ ゆり",
      description: "すみっコたちが おちつける ばしょを さがす おはなし。",
      reason: "すみっコぐらしが すきなら もう いっさつ よもう！",
      genre: "おはなし",
      emoji: "🎀",
      difficulty: 1,
      unext: true
    },
    {
      title: "1ねん1くみの 1にち",
      author: "川島敏生",
      description: "1ねん1くみの いちにちを しゃしんで しょうかい。がっこうって こんな ところ！",
      reason: "がっこうの せいかつが よくわかる。1ねんせいに ぴったり！",
      genre: "がくしゅう",
      emoji: "🏫",
      difficulty: 1
    },
    {
      title: "マジック・ツリーハウス きょうりゅうの たにの だいぼうけん",
      author: "メアリー・ポープ・オズボーン",
      description: "ツリーハウスで きょうりゅうの じだいに タイムスリップ！",
      reason: "きょうりゅうが すきなら これ！ ハラハラ ドキドキの ぼうけん。",
      genre: "ぼうけん",
      emoji: "🦕",
      difficulty: 2
    },
    {
      title: "かいけつゾロリの にんじゃ おおさくせん",
      author: "はら ゆたか",
      description: "ゾロリが にんじゃに なって おおさくせん！",
      reason: "にんじゃが すきなこに。ゾロリの にんじゃは めちゃくちゃ おもしろい！",
      genre: "ギャグ・ぼうけん",
      emoji: "🥷",
      difficulty: 1,
      unext: true,
      bookwalker: true
    },
    {
      title: "ちいさな プリンセス ソフィア",
      author: "キャサリン・ハプカ",
      description: "ふつうの おんなのこが プリンセスに なっちゃった！",
      reason: "プリンセスが すきなこに。ゆうきと やさしさの おはなし。",
      genre: "ファンタジー",
      emoji: "👑",
      difficulty: 1
    },
    {
      title: "10分で読める こわいはなし 1年生",
      author: "がくけん（へんしゅう）",
      description: "ちょっと こわい でも おもしろい みじかい おはなしが いっぱい。",
      reason: "おばけが すきなこ、ちょっと こわい おはなしが すきなこに。みじかくて よみやすい！",
      genre: "おばけ",
      emoji: "😱",
      difficulty: 1
    },
    {
      title: "ドラえもんの がくしゅうシリーズ（こくご）",
      author: "ふじこ・えふ・ふじお",
      description: "ドラえもんと いっしょに ことばの ちからを つけよう！",
      reason: "まんがだから たのしく こくごが まなべる。ことばが ふえるよ！",
      genre: "がくしゅうまんが",
      emoji: "📗",
      difficulty: 1,
      unext: true
    },
    {
      title: "ノラネコぐんだん パンこうじょう",
      author: "くどう のりこ",
      description: "ノラネコぐんだんが パンこうじょうに しのびこむ！",
      reason: "ノラネコぐんだんは いつも わるいことして、さいごに おこられる。でも かわいい！",
      genre: "ユーモア",
      emoji: "🍞",
      difficulty: 1
    },
    {
      title: "11ぴきのねこ",
      author: "ばば のぼる",
      description: "11ぴきの ねこたちが おおきな さかなを つかまえに いく ぼうけん！",
      reason: "ねこが いっぱいで たのしい！ みんなで ちからを あわせる おはなし。",
      genre: "ぼうけん",
      emoji: "🐱",
      difficulty: 1
    },
    {
      title: "ぐりとぐら",
      author: "なかがわ りえこ・おおむら ゆりこ",
      description: "ぐりとぐらが もりで おおきな たまごを みつけて、おおきな カステラを つくるよ！",
      reason: "みんな だいすきな えほん。カステラが とっても おいしそう！",
      genre: "おはなし",
      emoji: "🥚",
      difficulty: 1,
      unext: true
    },
    {
      title: "100かいだてのいえ",
      author: "いわい としお",
      description: "100かいだての いえを のぼっていくよ。どんな いきものが すんでいるかな？",
      reason: "ページを めくるのが たのしい！ いきものが いっぱいで おもしろい。",
      genre: "ぼうけん",
      emoji: "🏢",
      difficulty: 1
    },
    {
      title: "パンどろぼう",
      author: "柴田ケイコ",
      description: "パンを ぬすむ パンどろぼうの おはなし。でも さいごは…？",
      reason: "えが かわいくて おもしろい！ パンどろぼうの ひみつが びっくり。",
      genre: "ユーモア",
      emoji: "🥖",
      difficulty: 1
    },
    {
      title: "はじめての こくごじてん",
      author: "がくけん",
      description: "ことばの いみを しらべる れんしゅうが できるよ。",
      reason: "じてんの つかいかたを おぼえよう。ことばが たくさん おぼえられる！",
      genre: "がくしゅう",
      emoji: "📖",
      difficulty: 1
    },
    {
      title: "エルマーとりゅう",
      author: "ルース・スタイルス・ガネット",
      description: "エルマーの ぼうけんの つづき。りゅうと いっしょに そらを とぶよ！",
      reason: "エルマーの ぼうけんが すきなら つぎは これ！ もっと すごい ぼうけんが まってる。",
      genre: "ぼうけん",
      emoji: "🐲",
      difficulty: 2
    },
    {
      title: "いやいやえん",
      author: "なかがわ りえこ",
      description: "ようちえんの こどもたちの おもしろい おはなしが 5つ はいってるよ。",
      reason: "むかしから にんきの おはなし。ようちえんの おはなしが おもしろい！",
      genre: "おはなし",
      emoji: "🎒",
      difficulty: 1
    },
    {
      title: "からすのパンやさん",
      author: "かこ さとし",
      description: "からすの パンやさんが いろんな かたちの パンを つくるよ！",
      reason: "パンの えが いっぱいで たのしい。どのパンが たべたい？",
      genre: "おはなし",
      emoji: "🍞",
      difficulty: 1
    },
    {
      title: "だるまちゃんと てんぐちゃん",
      author: "かこ さとし",
      description: "だるまちゃんが てんぐちゃんの もちものを ほしがって、いろいろ さがす おはなし。",
      reason: "むかしから だいにんきの えほん。だるまちゃんが かわいい！",
      genre: "おはなし",
      emoji: "🔴",
      difficulty: 1
    },
    {
      title: "スイミー",
      author: "レオ・レオニ",
      description: "ちいさな くろい さかなの スイミーが、なかまと ちからを あわせて おおきな さかなに たちむかう！",
      reason: "きょうかしょにも でてくる めいさく。ちいさくても ゆうきが あれば つよくなれる！",
      genre: "ぼうけん",
      emoji: "🐟",
      difficulty: 1,
      unext: true
    },
    {
      title: "どうぶつの おはなし 1年生",
      author: "がくけん（へんしゅう）",
      description: "いぬや ねこ、どうぶつえんの どうぶつの おはなしが いっぱい。",
      reason: "どうぶつが すきなこに ぴったり。みじかい おはなしで よみやすいよ。",
      genre: "おはなし",
      emoji: "🐕",
      difficulty: 1
    }
  ],

  tomohiro: [
    // --- Original 20 ---
    {
      title: "デルトラ・クエスト",
      author: "エミリー・ロッダ",
      description: "7つの宝石を集めて、闇の王からデルトラを救え！RPGみたいな冒険ファンタジー。",
      reason: "ゲーム好きなら絶対ハマる。宝石を1つずつ集めていく展開がRPGのクエストみたい。",
      genre: "ファンタジー",
      emoji: "💎",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "ハリー・ポッターと賢者の石",
      author: "J.K.ローリング",
      description: "11歳の誕生日に届いた手紙で、自分が魔法使いだと知ったハリー。魔法学校での冒険が始まる！",
      reason: "映画を知ってても、本はもっとすごい。魔法の呪文やアイテムが100倍くわしく出てくる。",
      genre: "ファンタジー",
      emoji: "⚡",
      difficulty: 3,
      unext: true
    },
    {
      title: "マインクラフト はじまりの島",
      author: "マックス・ブルックス",
      description: "目が覚めたらマイクラの世界に！何もない島でサバイバル開始。ルールは「パニックするな」。",
      reason: "マイクラやったことあるなら超わかる！ゲームの知識がそのまま本を読む力になる。",
      genre: "ゲーム・冒険",
      emoji: "⛏️",
      difficulty: 2
    },
    {
      title: "キャプテン翼 ライジングサン（小説版）",
      author: "高橋陽一（原作）",
      description: "翼くんがワールドカップで世界に挑む！サッカー少年のあこがれの物語。",
      reason: "サッカー好きなら王道中の王道。翼の必殺シュートが文章で読むとまた違う迫力！",
      genre: "スポーツ",
      emoji: "⚽",
      difficulty: 2,
      unext: true
    },
    {
      title: "サッカーボーイズ 再会のグラウンド",
      author: "はらだ みずき",
      description: "サッカー少年たちの友情と成長の物語。試合シーンの臨場感がすごい！",
      reason: "同じくらいの年の子が主人公。自分とかさなるところが絶対ある。",
      genre: "スポーツ",
      emoji: "🥅",
      difficulty: 2
    },
    {
      title: "ダレン・シャン",
      author: "ダレン・シャン",
      description: "バンパイアの世界に引き込まれた少年ダレン。友情と勇気の壮大な物語。",
      reason: "ちょっとこわいけどめちゃくちゃ面白い。一度読み始めたら止められない！",
      genre: "ホラー・ファンタジー",
      emoji: "🧛",
      difficulty: 3,
      bookwalker: true
    },
    {
      title: "はやみねかおる ぼくと未来屋の夏",
      author: "はやみねかおる",
      description: "夏休み、不思議な店「未来屋」で少年が出会ったのは…？推理と冒険の物語。",
      reason: "ミステリーの入門に最高。謎を解くのが好きならドハマリ間違いなし。",
      genre: "ミステリー",
      emoji: "🔎",
      difficulty: 2
    },
    {
      title: "ズッコケ三人組シリーズ",
      author: "那須正幹",
      description: "ハカセ、モーちゃん、ハチベエの3人がいつも事件に巻き込まれる！",
      reason: "昔からの超人気シリーズ。友達との冒険がリアルで笑える。",
      genre: "冒険・ギャグ",
      emoji: "👦",
      difficulty: 2
    },
    {
      title: "ぼくらの七日間戦争",
      author: "宗田理",
      description: "子どもたちが廃工場に立てこもって、大人たちに反乱を起こす！",
      reason: "「大人に負けない！」っていう子どもの気持ちがめちゃくちゃかっこいい。",
      genre: "冒険",
      emoji: "🏭",
      difficulty: 2
    },
    {
      title: "学研まんが 人物伝 アインシュタイン",
      author: "学研プラス",
      description: "「なぜ？」を考え続けた天才物理学者アインシュタインの人生をまんがで。",
      reason: "アインシュタインが好きならまずはこれ。まんがだから難しい理論もわかりやすい。",
      genre: "伝記・まんが",
      emoji: "🧠",
      difficulty: 1
    },
    {
      title: "はやぶさ 不死身の探査機と宇宙研の物語",
      author: "吉田武",
      description: "満身創痍になりながらも地球に帰ってきた探査機「はやぶさ」の感動ストーリー。",
      reason: "科学が好きなら泣ける。「絶対あきらめない」精神がかっこよすぎる。",
      genre: "科学・ノンフィクション",
      emoji: "🚀",
      difficulty: 2
    },
    {
      title: "ルドルフとイッパイアッテナ",
      author: "斉藤洋",
      description: "迷子の黒猫ルドルフが、ボス猫イッパイアッテナに出会って成長する物語。",
      reason: "猫の目線で描かれた冒険と友情。映画にもなったけど、本の方が10倍いい。",
      genre: "冒険",
      emoji: "🐈‍⬛",
      difficulty: 2,
      unext: true
    },
    {
      title: "ゲームプログラマーになる前に覚えておきたい技術",
      author: "平山尚（やさしい解説版）",
      description: "ゲームがどうやって動いてるか、プログラミングの基本から教えてくれる本。",
      reason: "プログラミング好きならゲームを「作る側」の世界が見えるようになる。",
      genre: "プログラミング",
      emoji: "💻",
      difficulty: 3
    },
    {
      title: "5分後に意外な結末",
      author: "学研プラス（編集）",
      description: "5分で読める短編集。最後にびっくりする「どんでん返し」が待ってる！",
      reason: "短い話がいっぱいだから、どこからでも読める。「え、そうなるの！？」の連続。",
      genre: "ミステリー・短編",
      emoji: "😲",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "ドラゴンクエスト ダイの大冒険（小説版）",
      author: "三条陸・稲田浩司",
      description: "勇者ダイが仲間と一緒に魔王を倒す冒険。友情・努力・勝利の王道ストーリー！",
      reason: "ゲーム好きならダイ大は鉄板。ポップの成長がアツすぎる。",
      genre: "ファンタジー",
      emoji: "🗡️",
      difficulty: 2,
      unext: true
    },
    {
      title: "数の悪魔",
      author: "エンツェンスベルガー",
      description: "夢の中で数の悪魔が現れて、算数の不思議な世界を教えてくれる。",
      reason: "「算数ってこんなに面白いの！？」ってなる本。学校の算数とは全然違うぞ。",
      genre: "算数・科学",
      emoji: "🔢",
      difficulty: 2
    },
    {
      title: "ナルニア国物語 ライオンと魔女",
      author: "C.S.ルイス",
      description: "洋服ダンスの奥に広がる雪の国ナルニア。4人のきょうだいの壮大な冒険。",
      reason: "ハリー・ポッターが好きなら次はこれ。ファンタジーの超名作！",
      genre: "ファンタジー",
      emoji: "🦁",
      difficulty: 3,
      unext: true
    },
    {
      title: "こちら「ランドセル探偵局」",
      author: "杉山亮",
      description: "小学校で起きる事件を子ども探偵が解決！身近なミステリーが楽しい。",
      reason: "自分の学校でも起きそうな事件ばかり。「あれ、犯人わかったかも！」ってなる。",
      genre: "ミステリー",
      emoji: "🎒",
      difficulty: 1
    },
    {
      title: "スティーブ・ジョブズ（学習まんが）",
      author: "学研プラス",
      description: "iPhone、Macを作ったスティーブ・ジョブズの波乱万丈な人生。",
      reason: "プログラミングやテクノロジーに興味があるなら、ジョブズの考え方に感動する。",
      genre: "伝記・まんが",
      emoji: "📱",
      difficulty: 1
    },
    {
      title: "獣の奏者 エリン",
      author: "上橋菜穂子",
      description: "獣と心を通わせる少女エリンの壮大な物語。命と自由について考えさせられる。",
      reason: "ファンタジーが好きなら上橋菜穂子は読んでほしい。日本が世界に誇る作家。",
      genre: "ファンタジー",
      emoji: "🐺",
      difficulty: 3,
      bookwalker: true
    },
    // --- Additional 40 books for 友博 ---
    {
      title: "パーシー・ジャクソンとオリンポスの神々 盗まれた雷撃",
      author: "リック・リオーダン",
      description: "自分がギリシャ神話の神の子だと知った少年パーシーの大冒険。",
      reason: "ハリー・ポッターに続くファンタジーの大名作。ギリシャ神話がめちゃくちゃ身近になる。",
      genre: "ファンタジー",
      emoji: "⚡",
      difficulty: 3
    },
    {
      title: "科学漫画サバイバルシリーズ 深海のサバイバル",
      author: "洪在徹・文情厚",
      description: "深海で遭難！生き残るための知識を学びながら脱出を目指す。",
      reason: "まんがで読める科学知識。ハラハラしながら理科の知識が身につく。",
      genre: "科学・まんが",
      emoji: "🌊",
      difficulty: 1
    },
    {
      title: "科学漫画サバイバルシリーズ 宇宙のサバイバル",
      author: "洪在徹・文情厚",
      description: "宇宙船が故障して大ピンチ！宇宙の知識で生き延びろ。",
      reason: "宇宙が好きなら最高。科学的な知識がストーリーに溶け込んでて自然に覚える。",
      genre: "科学・まんが",
      emoji: "🛸",
      difficulty: 1
    },
    {
      title: "科学漫画サバイバルシリーズ 人体のサバイバル",
      author: "洪在徹・文情厚",
      description: "小さくなって人体の中を冒険！体の仕組みがまんがでわかる。",
      reason: "自分の体がこんなにすごいなんて！って驚く。理科のテストにも役立つかも。",
      genre: "科学・まんが",
      emoji: "🫀",
      difficulty: 1
    },
    {
      title: "名探偵コナン 時計じかけの摩天楼（小説版）",
      author: "青山剛昌（原作）・金井美香",
      description: "コナンが爆弾魔の仕掛けた謎を解いて街を救う。映画1作目のノベライズ。",
      reason: "コナンの映画を見たことがあるなら、小説で読むとまた違う面白さがある。",
      genre: "ミステリー",
      emoji: "🕵️",
      difficulty: 2,
      unext: true
    },
    {
      title: "ミルキー杉山の あなたも名探偵シリーズ",
      author: "杉山亮",
      description: "読者が自分で謎を解くミステリー。「わかった！」って叫びたくなる。",
      reason: "自分で考えて推理する楽しさが最高。答えを見る前に考えてみよう。",
      genre: "ミステリー",
      emoji: "🔍",
      difficulty: 1
    },
    {
      title: "はやみねかおる 都会のトム&ソーヤ",
      author: "はやみねかおる",
      description: "ゲーム好きの天才少年と秀才少年が東京でサバイバルゲームに巻き込まれる。",
      reason: "ゲームとミステリーの最強コンビ。テンポが良くて読み始めたら止まらない。",
      genre: "冒険・ミステリー",
      emoji: "🎮",
      difficulty: 2
    },
    {
      title: "バッテリー",
      author: "あさのあつこ",
      description: "天才ピッチャー巧と、唯一彼の球を受けられるキャッチャー豪の物語。",
      reason: "スポーツものの最高峰。主人公の性格がクセ強いけど、それがまたいい。",
      genre: "スポーツ",
      emoji: "⚾",
      difficulty: 2,
      unext: true
    },
    {
      title: "黒魔女さんが通る!!",
      author: "石崎洋司",
      description: "ふつうの小学生がある日、黒魔女の弟子にされちゃった！ドタバタ魔法コメディ。",
      reason: "笑えて、ちょっと怖くて、でも友情も熱い。シリーズがいっぱいあるよ。",
      genre: "ファンタジー・ギャグ",
      emoji: "🧙‍♀️",
      difficulty: 2,
      unext: true,
      bookwalker: true
    },
    {
      title: "ぼくらのシリーズ ぼくらの大冒険",
      author: "宗田理",
      description: "七日間戦争のメンバーが今度は大冒険に出発！",
      reason: "七日間戦争が面白かったら、シリーズ全部読みたくなる。",
      genre: "冒険",
      emoji: "🗺️",
      difficulty: 2
    },
    {
      title: "指輪物語 旅の仲間（新版）",
      author: "J.R.R.トールキン",
      description: "ホビットのフロドが、世界を滅ぼす力を持つ指輪を捨てる旅に出る。ファンタジーの原点。",
      reason: "ハリー・ポッターやナルニアの元になった作品。4年生で読めたらすごい！",
      genre: "ファンタジー",
      emoji: "💍",
      difficulty: 3
    },
    {
      title: "エラゴン 遺志を継ぐ者",
      author: "クリストファー・パオリーニ",
      description: "ドラゴンの卵を見つけた少年がドラゴンライダーとして成長する壮大なファンタジー。",
      reason: "作者がなんと15歳で書いた小説。ドラゴンとの絆がめちゃくちゃかっこいい。",
      genre: "ファンタジー",
      emoji: "🐉",
      difficulty: 3
    },
    {
      title: "怪盗クイーンはサーカスがお好き",
      author: "はやみねかおる",
      description: "世界一の怪盗クイーンが華麗に宝物を盗む。でもただの泥棒じゃない…。",
      reason: "ルパン三世みたいなかっこいい怪盗が主人公。はやみねかおるの代表作。",
      genre: "冒険・ミステリー",
      emoji: "🎪",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "学研まんが 人物伝 織田信長",
      author: "学研プラス",
      description: "日本を変えようとした戦国武将・織田信長の人生をまんがで。",
      reason: "歴史が好きなら武将の人生は最高に面白い。まんがだからサクサク読める。",
      genre: "伝記・まんが",
      emoji: "⚔️",
      difficulty: 1
    },
    {
      title: "学研まんが 人物伝 イチロー",
      author: "学研プラス",
      description: "メジャーリーガー・イチローの努力と信念の物語。",
      reason: "スポーツ好きなら、イチローの考え方は学べることだらけ。",
      genre: "伝記・まんが",
      emoji: "⚾",
      difficulty: 1
    },
    {
      title: "ふしぎ駄菓子屋 銭天堂",
      author: "廣嶋玲子",
      description: "不思議なお菓子を売る駄菓子屋。食べると願いが叶うけど…使い方を間違えると大変！",
      reason: "テレビアニメでおなじみ。短編だからどこからでも読める。",
      genre: "ファンタジー",
      emoji: "🍬",
      difficulty: 2,
      unext: true
    },
    {
      title: "宮沢賢治 銀河鉄道の夜",
      author: "宮沢賢治",
      description: "ジョバンニとカムパネルラが銀河鉄道に乗って宇宙を旅する。",
      reason: "日本文学の名作。不思議で美しい世界観。感想文にもおすすめ。",
      genre: "ファンタジー",
      emoji: "🚂",
      difficulty: 2,
      unext: true
    },
    {
      title: "三国志（子ども向け）",
      author: "渡辺仙州",
      description: "劉備、関羽、張飛の3人が乱世を生き抜く壮大な歴史物語。",
      reason: "ゲームの三国志が好きなら原作を読もう。武将たちのかっこよさがすごい。",
      genre: "歴史・冒険",
      emoji: "🐴",
      difficulty: 2
    },
    {
      title: "かいぞくポケット",
      author: "寺村輝夫",
      description: "ちいさな海賊のポケットが仲間と一緒に海を冒険！",
      reason: "テンポがいいので読みやすい。笑いとワクワクがつまってる。",
      genre: "冒険・ギャグ",
      emoji: "🏴‍☠️",
      difficulty: 1
    },
    {
      title: "マジック・ツリーハウス ポンペイ最後の日",
      author: "メアリー・ポープ・オズボーン",
      description: "火山が噴火する直前のポンペイにタイムスリップ！脱出できるか？",
      reason: "歴史と冒険の両方が楽しめる。ハラハラ度MAXのエピソード。",
      genre: "冒険",
      emoji: "🌋",
      difficulty: 2
    },
    {
      title: "チョコレート工場の秘密",
      author: "ロアルド・ダール",
      description: "チャーリーが当てた黄金のチケットで入った工場は、驚きの連続！",
      reason: "映画も有名だけど、本はもっとぶっ飛んでて面白い。ダールの世界観が最高。",
      genre: "ファンタジー",
      emoji: "🍫",
      difficulty: 2
    },
    {
      title: "二分間の冒険",
      author: "岡田淳",
      description: "たった2分間だけ別世界で冒険できる。でもその2分が運命を変える…。",
      reason: "日本のファンタジーの名作。2分の中にとんでもないドラマがつまってる。",
      genre: "ファンタジー",
      emoji: "⏱️",
      difficulty: 2
    },
    {
      title: "おもしろい！進化のふしぎ ざんねんないきもの事典",
      author: "今泉忠明（監修）",
      description: "動物たちの「なんでそうなった？」がいっぱい。進化のふしぎが面白い。",
      reason: "笑いながら科学が学べる。友達に話したくなるネタがいっぱい。",
      genre: "科学・ユーモア",
      emoji: "🦥",
      difficulty: 1
    },
    {
      title: "ドラえもん科学ワールド 宇宙の不思議",
      author: "藤子・F・不二雄（原作）・日本科学未来館（監修）",
      description: "ドラえもんのまんがと一緒に宇宙の科学を学べる。",
      reason: "まんがだから楽しく読めて、科学の知識もしっかり身につく。",
      genre: "科学・まんが",
      emoji: "🌍",
      difficulty: 1,
      unext: true
    },
    {
      title: "5分後に思わず涙。",
      author: "学研プラス（編集）",
      description: "5分で読める感動の短編集。思わずグッとくる話ばかり。",
      reason: "5分後に意外な結末が好きなら、こっちのシリーズも面白い。",
      genre: "ミステリー・短編",
      emoji: "😢",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "ぼくはイエローでホワイトで、ちょっとブルー",
      author: "ブレイディみかこ",
      description: "イギリスの中学校に通う息子と母親の、多文化な日常を描いたノンフィクション。",
      reason: "世界の広さがわかる。自分と違う人のことを考えるきっかけになる。",
      genre: "ノンフィクション",
      emoji: "🌈",
      difficulty: 2
    },
    {
      title: "ホビットの冒険",
      author: "J.R.R.トールキン",
      description: "小さなホビット族のビルボが、ドワーフたちと竜の宝を取り戻す冒険に出る。",
      reason: "指輪物語の前にこれを読むのがおすすめ。ファンタジー冒険の原点。",
      genre: "ファンタジー",
      emoji: "🏔️",
      difficulty: 3
    },
    {
      title: "走れメロス",
      author: "太宰治",
      description: "友を救うために走り続けるメロス。友情と信頼の名作。",
      reason: "短いけど熱い。読書感想文の定番だけど、ちゃんと読むと感動する。",
      genre: "文学",
      emoji: "🏃",
      difficulty: 2
    },
    {
      title: "忍者サノスケじいさん わくわく旅日記",
      author: "なすだ みつこ",
      description: "忍者のサノスケじいさんが日本各地を旅しながら事件を解決。",
      reason: "忍者が好きなら。各地の名所も学べて一石二鳥。",
      genre: "冒険",
      emoji: "🥷",
      difficulty: 1
    },
    {
      title: "100万回生きたねこ",
      author: "佐野洋子",
      description: "100万回死んで100万回生きたねこ。でも本当に大切なものに出会った時…。",
      reason: "絵本だけど深い。何度読んでも新しい発見がある名作中の名作。",
      genre: "おはなし",
      emoji: "🐈",
      difficulty: 1
    },
    {
      title: "星新一 きまぐれロボット",
      author: "星新一",
      description: "ショートショートの神様。1話が数ページで、どんでん返しの連続。",
      reason: "短い話が好きなら星新一は最高。SFの入門に完璧。",
      genre: "SF・短編",
      emoji: "🤖",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "かいけつゾロリ ロボット大さくせん",
      author: "原ゆたか",
      description: "ゾロリがロボットを作って大作戦！笑いと冒険のてんこ盛り。",
      reason: "低学年の時に好きだったなら、久しぶりに読み返しても楽しい。",
      genre: "冒険・ギャグ",
      emoji: "🦊",
      difficulty: 1,
      unext: true,
      bookwalker: true
    },
    {
      title: "モンスターハンター物語 RIDE ON",
      author: "カプコン（原作）",
      description: "モンスターと絆を結ぶライダーの冒険物語。ゲームの世界観が小説で楽しめる。",
      reason: "モンハン好きなら絶対楽しい。モンスターとの友情がアツい。",
      genre: "ゲーム・冒険",
      emoji: "🐲",
      difficulty: 2,
      unext: true
    },
    {
      title: "サッカーボーイズ 最後のトーナメント",
      author: "はらだ みずき",
      description: "6年生最後の大会に挑むサッカー少年たちの青春物語。",
      reason: "サッカーボーイズシリーズの続き。仲間との絆が熱い。",
      genre: "スポーツ",
      emoji: "🏆",
      difficulty: 2
    },
    {
      title: "科学漫画サバイバルシリーズ 昆虫世界のサバイバル",
      author: "洪在徹・文情厚",
      description: "小さくなって昆虫の世界に！虫たちの驚きの生態がわかる。",
      reason: "虫が好きでも苦手でも面白い。まんがだからサクサク読める。",
      genre: "科学・まんが",
      emoji: "🐜",
      difficulty: 1
    },
    {
      title: "学研まんが NEW日本の歴史 戦国時代",
      author: "学研プラス",
      description: "織田信長・豊臣秀吉・徳川家康の三英傑が活躍する戦国時代をまんがで。",
      reason: "歴史まんがの定番。武将たちの戦いがかっこいい。",
      genre: "歴史・まんが",
      emoji: "⚔️",
      difficulty: 1
    },
    {
      title: "ハリー・ポッターと秘密の部屋",
      author: "J.K.ローリング",
      description: "ホグワーツ2年目。秘密の部屋が開かれ、生徒が次々と石にされる事件が…。",
      reason: "賢者の石を読んだら次はこれ。ドビーが最高にかわいくてウザい。",
      genre: "ファンタジー",
      emoji: "🐍",
      difficulty: 3,
      unext: true
    },
    {
      title: "わすれものの森",
      author: "岡田淳",
      description: "学校の裏にある不思議な森。忘れ物がそこに集まるという噂は本当だった…。",
      reason: "日本のファンタジーの名手・岡田淳の代表作。二分間の冒険が好きなら。",
      genre: "ファンタジー",
      emoji: "🌳",
      difficulty: 2
    },
    {
      title: "グレッグのダメ日記",
      author: "ジェフ・キニー",
      description: "中学生グレッグの毎日をイラスト日記で。失敗ばかりだけど笑える！",
      reason: "アメリカで大人気の児童書。イラストが多くて読みやすい。",
      genre: "ギャグ",
      emoji: "📓",
      difficulty: 1
    },
    {
      title: "都会のトム&ソーヤ ぼくらの砦",
      author: "はやみねかおる",
      description: "内人と創也の最強コンビが、秘密の砦を舞台に新たな謎に挑む。",
      reason: "都会のトム&ソーヤシリーズの続き。読めば読むほどハマる。",
      genre: "冒険・ミステリー",
      emoji: "🏰",
      difficulty: 2
    },
    // --- 中学受験頻出 30冊 ---
    {
      title: "きよしこ",
      author: "重松清",
      description: "吃音を抱えながら転校を繰り返した少年・きよしの成長を描いた連作短編集。",
      reason: "開成・麻布など難関校で頻出。心情の変化を丁寧に読む練習に最適。中学受験国語の定番。",
      genre: "友情・成長",
      emoji: "🎄",
      difficulty: 2
    },
    {
      title: "くちぶえ番長",
      author: "重松清",
      description: "転校してきたおてんば少女・ツヨシと同名の主人公が織りなす小学校の友情物語。",
      reason: "早稲田・女子学院など多数の学校で出題実績あり。「友情とは何か」を考えさせる良問の宝庫。",
      genre: "友情・成長",
      emoji: "🎵",
      difficulty: 2
    },
    {
      title: "バッテリー",
      author: "あさのあつこ",
      description: "天才ピッチャー巧と、唯一彼の球を受けられるキャッチャー豪の物語。（既存と重複のため中受観点で再掲）",
      reason: "渋渋・栄光・慶應など難関校で頻出。主人公の強烈な個性と葛藤が心情読解の良素材。",
      genre: "スポーツ",
      emoji: "⚾",
      difficulty: 2
    },
    {
      title: "カラフル",
      author: "森絵都",
      description: "死んだはずの魂が見知らぬ中学生の体に宿り、もう一度やり直す機会を与えられる。",
      reason: "渋渋・桜蔭・女子学院など多数で出題。「生きること」の意味を問う深いテーマが設問に向く。",
      genre: "ファンタジー・成長",
      emoji: "🌈",
      difficulty: 2
    },
    {
      title: "しずかな日々",
      author: "椰月美智子",
      description: "父の蒸発で母と二人暮らしになった少年が、おじいちゃんの家で穏やかな夏を過ごす物語。",
      reason: "渋渋・女子学院・栄光など出題実績多数。静かな文体の中に深い感情が流れ、心情読解の名教材。",
      genre: "家族",
      emoji: "🌿",
      difficulty: 2
    },
    {
      title: "夏の庭",
      author: "湯本香樹実",
      description: "「人の死を見てみたい」と独居老人を観察し始めた3人の少年と老人の交流。",
      reason: "開成・麻布・慶應など最難関校で繰り返し出題される超定番。「生と死」をテーマにした名作。",
      genre: "友情・成長",
      emoji: "🌻",
      difficulty: 2
    },
    {
      title: "あと少し、もう少し",
      author: "瀬尾まいこ",
      description: "バラバラな動機を持つ6人の駅伝部員が、県大会を目指して走る物語。",
      reason: "渋渋2019年出題。6人の視点が次々と変わる構成が心情読解の練習に最適。",
      genre: "スポーツ・友情",
      emoji: "🏃",
      difficulty: 2
    },
    {
      title: "かがみの孤城",
      author: "辻村深月",
      description: "学校に行けなくなった7人の中学生が鏡の向こうの城に集められる。衝撃のラストが待つ。",
      reason: "本屋大賞受賞作。渋渋・早稲田など出題実績あり。不登校・いじめをテーマにした読解の良問素材。",
      genre: "ファンタジー・成長",
      emoji: "🏯",
      difficulty: 3
    },
    {
      title: "セカイの空がみえるまち",
      author: "工藤純子",
      description: "両親が離婚し祖父母の家に預けられた少女が、新しい友達や大人たちとの関わりで変わっていく。",
      reason: "中学受験国語頻出作家・工藤純子の代表作。家族・居場所をテーマにした心情読解の良教材。",
      genre: "家族・成長",
      emoji: "🌤️",
      difficulty: 2
    },
    {
      title: "朔と新",
      author: "いとうみく",
      description: "双子の兄弟・朔と新。陸上で活躍する新が事故で視力を失い、二人の関係が変わっていく。",
      reason: "渋渋・女子学院など出題実績あり。障害・兄弟・スポーツを絡めた心情読解の名素材。",
      genre: "家族・スポーツ",
      emoji: "🌑",
      difficulty: 2
    },
    {
      title: "ライオンのおやつ",
      author: "小川糸",
      description: "余命わずかの若い女性が瀬戸内のホスピスで過ごす最後の日々。毎週日曜のおやつが心を温める。",
      reason: "本屋大賞ノミネート作。難関校の国語で「生と死」「感謝」をテーマにした出題素材として注目。",
      genre: "家族・感動",
      emoji: "🦁",
      difficulty: 3
    },
    {
      title: "空についてのお話をしましょう",
      author: "佐藤いつ子",
      description: "中学3年生のユイが、クラスで孤立しながらも自分の居場所を見つけていく青春物語。",
      reason: "中学受験国語頻出作家・佐藤いつ子の代表作。女子校を中心に出題実績あり。",
      genre: "友情・成長",
      emoji: "☁️",
      difficulty: 2
    },
    {
      title: "ぼくとニケ",
      author: "片川優子",
      description: "猫が苦手な小学5年生の少年が、クラスメイトに押しつけられた子猫の世話をすることに。",
      reason: "渋渋2022年出題。命の大切さと責任感をテーマにした心情読解の定番素材。",
      genre: "友情・成長",
      emoji: "🐱",
      difficulty: 2
    },
    {
      title: "ツバメ号とアマゾン号",
      author: "アーサー・ランサム",
      description: "湖での夏休み、子どもたちだけで帆船を操り冒険する。イギリス児童文学の名作。",
      reason: "開成など出題実績あり。長文読解の練習に向いた作品で語彙力も育つ。",
      genre: "冒険",
      emoji: "⛵",
      difficulty: 3
    },
    {
      title: "かあさんの木",
      author: "大山淳子",
      description: "母親を亡くした姉弟と父親の再生の物語。庭の大きな木が家族を見守る。",
      reason: "中学受験国語で家族・喪失・再生をテーマにした出題が増加中。感情移入しやすく読解練習に最適。",
      genre: "家族",
      emoji: "🌳",
      difficulty: 2
    },
    {
      title: "給食アンサンブル",
      author: "如月かずさ",
      description: "給食の時間に起きる小さな事件を通じて、子どもたちの関係が変わっていく連作短編集。",
      reason: "渋渋・女子学院など出題実績あり。視点が次々と変わる連作形式が読解力を育てる。",
      genre: "友情・成長",
      emoji: "🍱",
      difficulty: 2
    },
    {
      title: "フィッシュストーリー",
      author: "伊坂幸太郎",
      description: "誰にも届かなかった曲が、数十年後に世界を救う。4つの時代をつなぐ短編集。",
      reason: "中学受験頻出作家・伊坂幸太郎の入門作。因果と繋がりをテーマにした読解に向く。",
      genre: "ミステリー・感動",
      emoji: "🎸",
      difficulty: 3
    },
    {
      title: "空色勾玉",
      author: "荻原規子",
      description: "古代日本を舞台にした和風ファンタジー。神と人間の境界を生きる少女の物語。",
      reason: "女子学院・桜蔭など女子難関校で出題実績あり。古典的な語彙と情景描写の読解練習に最適。",
      genre: "ファンタジー・歴史",
      emoji: "🌸",
      difficulty: 3
    },
    {
      title: "かわいそうなぞう",
      author: "つちや ゆきお",
      description: "戦争中、東京の動物園で起きたゾウたちの悲しい実話をもとにした物語。",
      reason: "戦争・命・悲しみをテーマにした出題の定番素材。中学受験の記述問題にもよく使われる。",
      genre: "感動・歴史",
      emoji: "🐘",
      difficulty: 1
    },
    {
      title: "盤上の向日葵",
      author: "柚月裕子",
      description: "将棋の世界に生きる男の謎と執念を追うミステリー。",
      reason: "将棋ブームで注目の作家。中学受験でも芸術・勝負をテーマにした出題素材として登場。",
      genre: "ミステリー",
      emoji: "♟️",
      difficulty: 3
    },
    {
      title: "ひとつ火の粉の雪の中",
      author: "川上弘美",
      description: "日常のすぐそばにある不思議と優しさを描いた短編集。",
      reason: "渋渋・麻布など出題実績あり。独特の文体が読解力と語彙力を高める。",
      genre: "ファンタジー・日常",
      emoji: "❄️",
      difficulty: 3
    },
    {
      title: "十二歳",
      author: "木村裕一",
      description: "小学6年生の1年間をリアルに描いた成長物語。友達・進路・家族との葛藤。",
      reason: "中学受験を控えた小6の子どもたちと重なるテーマで共感力が上がる。心情読解の良教材。",
      genre: "友情・成長",
      emoji: "🎒",
      difficulty: 2
    },
    {
      title: "なぜ僕の世界をだれも覚えていないのか",
      author: "支倉凍砂",
      description: "ある日、世界が変わってしまった。主人公だけが元の世界を覚えている。",
      reason: "中学受験国語頻出テーマ「自分とは何か」「世界の認識」を扱う。読後に深く考えさせる作品。",
      genre: "ファンタジー・冒険",
      emoji: "🌍",
      difficulty: 3
    },
    {
      title: "西の魔女が死んだ",
      author: "梨木香歩",
      description: "学校になじめない少女まいが、祖母のもとで過ごした一夏。「魔女修行」で本当の強さを知る。",
      reason: "渋渋・女子学院・桜蔭など難関女子校で出題実績多数。自立・成長・祖母との絆が定番テーマ。",
      genre: "成長・家族",
      emoji: "🧙‍♀️",
      difficulty: 2
    },
    {
      title: "赤毛のアン",
      author: "ルーシー・モード・モンゴメリ",
      description: "孤児院から来たおしゃべりな少女アンが、グリーン・ゲイブルズで育っていく名作。",
      reason: "女子難関校の定番出題素材。豊かな語彙と情景描写の読解練習に長年使われてきた名作。",
      genre: "成長・友情",
      emoji: "🌿",
      difficulty: 2
    },
    {
      title: "ぼくは勉強ができない",
      author: "山田詠美",
      description: "勉強はできないが女性にはモテる高校生・秀美が、大人の世界と向き合う物語。",
      reason: "渋渋・麻布など出題実績あり。「勉強の意味」「生きる力とは」を問う設問に頻出。",
      genre: "成長・青春",
      emoji: "📚",
      difficulty: 3
    },
    {
      title: "注文の多い料理店",
      author: "宮沢賢治",
      description: "山の中の不思議なレストランに迷い込んだ二人の紳士。「注文の多い」理由に驚愕。",
      reason: "開成・麻布・早稲田など最難関校で繰り返し出題される超定番。宮沢賢治の文体読解の入門作。",
      genre: "ファンタジー・風刺",
      emoji: "🍽️",
      difficulty: 2
    },
    {
      title: "モモ",
      author: "ミヒャエル・エンデ",
      description: "「時間」を盗む灰色の男たちと戦う少女モモの物語。時間の大切さを問いかける名作。",
      reason: "渋渋・栄光・慶應など出題実績あり。「時間と豊かさ」をテーマにした設問が多い世界的名作。",
      genre: "ファンタジー",
      emoji: "⏰",
      difficulty: 2
    },
    {
      title: "アルジャーノンに花束を",
      author: "ダニエル・キイス",
      description: "知的障がいのある青年チャーリーが手術で天才になるが、やがて元に戻っていく。",
      reason: "開成・慶應など難関校で出題実績あり。「知性・人間の尊厳」を問う設問の宝庫。",
      genre: "感動・SF",
      emoji: "🌸",
      difficulty: 3
    },
    {
      title: "ふたつのしりとり",
      author: "くすのきしげのり",
      description: "仲良しの二人が言葉遊びを通じて心を通わせる温かい物語。",
      reason: "小学校低学年向けだが、言葉・コミュニケーションをテーマにした中受入門素材として活用。",
      genre: "友情",
      emoji: "💬",
      difficulty: 1
    },
    {
      title: "屋根部屋のチェリー",
      author: "いとうみく",
      description: "父親の再婚相手とうまくなじめない少女が、屋根裏に住むナゾの存在と出会う。",
      reason: "中学受験頻出作家・いとうみくの作品。家族の再構築・居場所探しをテーマにした読解に向く。",
      genre: "家族・成長",
      emoji: "🏠",
      difficulty: 2
    }
  ],

  kanako: [
    // --- Original 20 ---
    {
      title: "君の膵臓をたべたい",
      author: "住野よる",
      description: "余命わずかの少女と根暗な男子の物語。タイトルの意味がわかった時、涙が止まらない。",
      reason: "かぐや様の恋愛要素が好きなら、こっちのリアルな恋愛にもグッとくるはず。映画より本が断然いい。",
      genre: "青春・恋愛",
      emoji: "💛",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "また、同じ夢を見ていた",
      author: "住野よる",
      description: "賢いけど友達のいない小学生の奈ノ花が、不思議な3人の女性に出会う。「幸せとは何か」を探す物語。",
      reason: "自己肯定感について考えさせてくれる。押しつけがましくなく、物語として純粋に面白い。",
      genre: "青春",
      emoji: "🌙",
      difficulty: 2
    },
    {
      title: "かがみの孤城",
      author: "辻村深月",
      description: "学校に行けなくなった中学生たちが、鏡の向こうの城に集められる。最後の仕掛けに鳥肌。",
      reason: "中1の今だからこそ刺さる。2023年本屋大賞。同世代の悩みがリアルに描かれてる。",
      genre: "ファンタジー・青春",
      emoji: "🏰",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "氷室冴子 なんて素敵にジャパネスク",
      author: "氷室冴子",
      description: "平安時代のお姫様が恋に冒険に大活躍！古典の世界がこんなに面白いなんて。",
      reason: "国語が得意なら古典にも興味が出るかも。少女漫画みたいなノリで平安時代を楽しめる。",
      genre: "歴史・恋愛",
      emoji: "🎎",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "はてしない物語",
      author: "ミヒャエル・エンデ",
      description: "本を読んでいたバスチアンが、物語の世界に引き込まれる。読書そのものが冒険になる究極のファンタジー。",
      reason: "「本を読むこと」が物語の中心。読書好きなら最高の体験。パパのイチオシ。",
      genre: "ファンタジー",
      emoji: "📖",
      difficulty: 3,
      bookwalker: true
    },
    {
      title: "モモ",
      author: "ミヒャエル・エンデ",
      description: "時間どろぼうに盗まれた時間を取り戻す少女モモの物語。忙しい現代人へのメッセージ。",
      reason: "「時間」について深く考えさせられる名作。テスト勉強に追われる中学生にこそ読んでほしい。",
      genre: "ファンタジー",
      emoji: "⏳",
      difficulty: 3,
      bookwalker: true
    },
    {
      title: "よるのばけもの",
      author: "住野よる",
      description: "夜になるとバケモノになる中学生と、クラスでいじめられている女の子。夜だけの秘密の関係。",
      reason: "いじめや自分の居場所について考えさせられる。住野よるの中でも特に中学生向け。",
      genre: "青春",
      emoji: "🌃",
      difficulty: 2
    },
    {
      title: "蜜蜂と遠雷",
      author: "恩田陸",
      description: "ピアノコンクールに挑む4人の天才たち。音楽が文字から聞こえてくるような奇跡の小説。",
      reason: "直木賞と本屋大賞W受賞。音楽に興味がなくても、情熱を持って何かに打ち込む姿に感動する。",
      genre: "青春・音楽",
      emoji: "🎹",
      difficulty: 3
    },
    {
      title: "ソードアート・オンライン",
      author: "川原礫",
      description: "VRゲームに閉じ込められた1万人のプレイヤー。死んだら本当に死ぬ。脱出できるのか？",
      reason: "ライトノベルの入門に最適。かぐや様からの「次のステップ」として読みやすい。",
      genre: "ライトノベル",
      emoji: "⚔️",
      difficulty: 2,
      unext: true,
      bookwalker: true
    },
    {
      title: "薬屋のひとりごと",
      author: "日向夏",
      description: "後宮で働く薬師の少女・猫猫が、毒や薬の知識で事件を解決していく。",
      reason: "漫画版も大人気だけど、小説版は猫猫の頭の中がもっと詳しくわかって面白い。",
      genre: "ライトノベル・ミステリー",
      emoji: "🧪",
      difficulty: 2,
      unext: true,
      bookwalker: true
    },
    {
      title: "嫌われる勇気（中高生版）",
      author: "岸見一郎・古賀史健",
      description: "「他人にどう思われるか」を気にしすぎていない？アドラー心理学が教える本当の自由。",
      reason: "自己肯定感に興味があるなら、この本の考え方は一生の武器になる。対話形式で読みやすい。",
      genre: "心理学・自己啓発",
      emoji: "🦋",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "「自分」を生きるための思春期のトリセツ",
      author: "黒川伊保子",
      description: "思春期の脳と心の仕組みがわかる本。「なんでイライラするの？」の答えがここに。",
      reason: "自分の気持ちの正体がわかると楽になる。科学的な視点が国語力のある子にぴったり。",
      genre: "心理学",
      emoji: "🧠",
      difficulty: 2
    },
    {
      title: "図書館戦争",
      author: "有川浩",
      description: "本を守るために図書隊が戦う！本への愛と恋愛がつまったアクション小説。",
      reason: "「本が好き」な人へのラブレターみたいな小説。恋愛要素もばっちり。",
      genre: "SF・恋愛",
      emoji: "📚",
      difficulty: 2,
      unext: true,
      bookwalker: true
    },
    {
      title: "告白",
      author: "湊かなえ",
      description: "「娘は事故で死んだのではありません。このクラスの生徒に殺されたのです。」衝撃の冒頭から始まるミステリー。",
      reason: "国語が得意なら、この構成力に感動するはず。一人称が変わっていく手法が天才的。",
      genre: "ミステリー",
      emoji: "🔪",
      difficulty: 3,
      bookwalker: true
    },
    {
      title: "西の魔女が死んだ",
      author: "梨木香歩",
      description: "不登校の少女まいが、「西の魔女」ことおばあちゃんと過ごした夏の物語。",
      reason: "自分を大切にするってどういうことか教えてくれる。何度読んでも泣ける名作。",
      genre: "青春",
      emoji: "🌿",
      difficulty: 2
    },
    {
      title: "夜は短し歩けよ乙女",
      author: "森見登美彦",
      description: "京都を舞台に、先輩が後輩の乙女を追いかける一夜の物語。文章がクセになる。",
      reason: "かぐや様の頭脳戦的な恋愛が好きなら、この不器用な恋愛にもニヤニヤするはず。",
      genre: "恋愛・ユーモア",
      emoji: "🌛",
      difficulty: 3,
      unext: true
    },
    {
      title: "推し、燃ゆ",
      author: "宇佐見りん",
      description: "推しのアイドルが炎上した。「推すこと」に人生をかける女子高生の物語。",
      reason: "芥川賞受賞作。「推し」がいる人なら共感しかない。短くて一気に読める。",
      genre: "現代文学",
      emoji: "🔥",
      difficulty: 3,
      bookwalker: true
    },
    {
      title: "ぼくは明日、昨日のきみとデートする",
      author: "七月隆文",
      description: "出会った日に泣いた彼女。その理由がわかった時、あなたも泣く。時間SFラブストーリー。",
      reason: "恋愛ものが好きなら泣ける保証つき。SF要素もあるからかぐや様の頭脳戦好きにも合う。",
      genre: "恋愛・SF",
      emoji: "💕",
      difficulty: 2
    },
    {
      title: "14歳からの哲学",
      author: "池田晶子",
      description: "「自分とは何か」「死とは何か」「友情とは何か」—14歳から考え始めたい問い。",
      reason: "国語力のある子なら、こういう「答えのない問い」を考えるのが楽しいはず。",
      genre: "哲学・思考",
      emoji: "💭",
      difficulty: 3
    },
    {
      title: "コンビニ人間",
      author: "村田沙耶香",
      description: "コンビニバイトを18年続ける女性。「普通」って何？を問いかける芥川賞受賞作。",
      reason: "短くて読みやすいのに深い。「普通でいなきゃ」のプレッシャーを感じたことがある人に。",
      genre: "現代文学",
      emoji: "🏪",
      difficulty: 2,
      bookwalker: true
    },
    // --- Additional 40 books for 加奈子 ---
    {
      title: "この素晴らしい世界に祝福を!",
      author: "暁なつめ",
      description: "異世界に転生した引きこもりの少年と、残念な仲間たちのドタバタ冒険。",
      reason: "笑えるライトノベルの代表格。ギャグとファンタジーのバランスが絶妙。",
      genre: "ライトノベル",
      emoji: "🌟",
      difficulty: 2,
      unext: true,
      bookwalker: true
    },
    {
      title: "Re:ゼロから始める異世界生活",
      author: "長月達平",
      description: "異世界で「死に戻り」の力を手に入れた少年スバル。何度死んでも諦めない。",
      reason: "主人公が弱いのに諦めない姿が胸を打つ。ラノベだけど感動する場面が多い。",
      genre: "ライトノベル",
      emoji: "🔄",
      difficulty: 2,
      unext: true,
      bookwalker: true
    },
    {
      title: "本好きの下剋上 司書になるためには手段を選んでいられません",
      author: "香月美夜",
      description: "本が大好きな女の子が本のない世界に転生。なら自分で本を作る！",
      reason: "本好きなら最高に共感できる。主人公の「本への愛」がすさまじい。",
      genre: "ライトノベル・ファンタジー",
      emoji: "📚",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "桐島、部活やめるってよ",
      author: "朝井リョウ",
      description: "バレー部のエース桐島が部活をやめた。その噂が学校中に波紋を広げる群像劇。",
      reason: "高校が舞台だけど中学生にも刺さる。「自分の居場所って何？」を考えさせられる。",
      genre: "青春",
      emoji: "🏐",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "何者",
      author: "朝井リョウ",
      description: "就活をする大学生5人。SNSの裏の顔と本音が暴かれていく。直木賞受賞作。",
      reason: "SNS時代の人間関係を鋭く描く。国語力のある子なら構成の巧みさに感動するはず。",
      genre: "現代文学",
      emoji: "📱",
      difficulty: 3,
      bookwalker: true
    },
    {
      title: "カラフル",
      author: "森絵都",
      description: "死んだはずの「ぼく」が抽選に当たって、誰かの体に「ホームステイ」する。",
      reason: "命と自分の価値について考えさせられる。読み終わった後、世界がちょっと明るく見える。",
      genre: "青春",
      emoji: "🎨",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "DIVE!!",
      author: "森絵都",
      description: "飛び込みに青春をかける少年たち。オリンピックを目指す熱い物語。",
      reason: "スポーツに興味がなくても引き込まれる。10代の「本気」が眩しい。",
      genre: "スポーツ・青春",
      emoji: "🏊",
      difficulty: 2
    },
    {
      title: "くちびるに歌を",
      author: "中田永一",
      description: "長崎の島の中学校合唱部。音楽を通じて変わっていく生徒たちの物語。",
      reason: "合唱コンクールの季節に読みたい。涙腺崩壊注意。",
      genre: "青春・音楽",
      emoji: "🎵",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "きみの友だち",
      author: "重松清",
      description: "「友だち」って何？事故で足が不自由になった恵美と、体が弱い由香の物語。",
      reason: "友達関係に悩んだことがある人に。重松清の優しい文章が心に染みる。",
      genre: "青春",
      emoji: "🤝",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "流星の絆",
      author: "東野圭吾",
      description: "両親を殺された三兄妹が、犯人を探しながら詐欺を働く。復讐と愛の物語。",
      reason: "ミステリーが好きなら東野圭吾は外せない。伏線回収の気持ちよさが最高。",
      genre: "ミステリー",
      emoji: "🌠",
      difficulty: 3,
      bookwalker: true
    },
    {
      title: "容疑者Xの献身",
      author: "東野圭吾",
      description: "天才数学者が隣人の殺人を完璧に隠そうとする。物理学者・湯川が挑む。",
      reason: "直木賞受賞のミステリー。「完璧な犯罪」のトリックに震える。",
      genre: "ミステリー",
      emoji: "🔢",
      difficulty: 3,
      bookwalker: true
    },
    {
      title: "7つの習慣 ティーンズ",
      author: "ショーン・コヴィー",
      description: "10代のための成功の習慣。自分を変えたいなら、ここから始めよう。",
      reason: "自己啓発の名著のティーンズ版。具体的で実践しやすい。",
      genre: "自己啓発",
      emoji: "🎯",
      difficulty: 2
    },
    {
      title: "夜のピクニック",
      author: "恩田陸",
      description: "高校の「歩行祭」—ただ歩くだけの行事の中で、想いが交差する。本屋大賞受賞作。",
      reason: "特別なことが起きないのに面白い。青春のキラキラとほろ苦さが詰まってる。",
      genre: "青春",
      emoji: "🌙",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "阪急電車",
      author: "有川浩",
      description: "阪急今津線を舞台に、乗客たちの人生が少しずつ交差していく短編連作。",
      reason: "図書館戦争が好きなら有川浩の他の作品も。短い話の連作だから読みやすい。",
      genre: "恋愛・短編",
      emoji: "🚃",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "バッテリー",
      author: "あさのあつこ",
      description: "天才ピッチャーと彼の球を受けるキャッチャー。才能と友情をめぐる物語。",
      reason: "野球に興味がなくても面白い。主人公の才能ゆえの孤独が胸に刺さる。",
      genre: "スポーツ・青春",
      emoji: "⚾",
      difficulty: 2,
      unext: true
    },
    {
      title: "氷菓",
      author: "米澤穂信",
      description: "省エネ主義の高校生・折木奉太郎が、古典部で日常の謎を解く。",
      reason: "アニメも大人気。かぐや様の頭脳戦が好きなら、この「日常ミステリー」にもハマるはず。",
      genre: "ミステリー・青春",
      emoji: "🧊",
      difficulty: 2,
      unext: true,
      bookwalker: true
    },
    {
      title: "名探偵コナン 黒鉄の魚影（小説版）",
      author: "青山剛昌（原作）・水稀しま",
      description: "コナン映画のノベライズ。灰原哀が主役の感動ストーリー。",
      reason: "映画を見たなら小説でもう一度。灰原の心理描写が深くて泣ける。",
      genre: "ミステリー",
      emoji: "🐟",
      difficulty: 2,
      unext: true
    },
    {
      title: "十角館の殺人",
      author: "綾辻行人",
      description: "孤島の館に集まった大学生たちが次々と殺される。衝撃のラスト1行。",
      reason: "日本ミステリーの最高傑作の一つ。あのラスト1行を読んだ時の衝撃は一生忘れない。",
      genre: "ミステリー",
      emoji: "🏚️",
      difficulty: 3,
      bookwalker: true
    },
    {
      title: "博士の愛した数式",
      author: "小川洋子",
      description: "80分しか記憶が持たない天才数学者と家政婦、その息子の心温まる物語。",
      reason: "数学が苦手でも楽しめる。「数学って美しい」と思える。本屋大賞受賞。",
      genre: "文学",
      emoji: "📐",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "世界から猫が消えたなら",
      author: "川村元気",
      description: "余命わずかの主人公の前に悪魔が現れる。「世界から何かを消せば、1日寿命が延びる」と。",
      reason: "泣ける。当たり前にあるものの大切さに気づかされる。",
      genre: "ファンタジー",
      emoji: "🐱",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "青くて痛くて脆い",
      author: "住野よる",
      description: "理想を掲げて作ったサークルが変質していく。裏切りと成長の物語。",
      reason: "住野よるの作品の中でもダークめ。人間関係の複雑さがリアル。",
      genre: "青春",
      emoji: "💙",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "マスカレード・ホテル",
      author: "東野圭吾",
      description: "高級ホテルに潜入した刑事が、連続殺人の犯人を探す。",
      reason: "東野圭吾入門に最適。ホテルが舞台でおしゃれ。映画化もされた。",
      genre: "ミステリー",
      emoji: "🏨",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "転生したらスライムだった件",
      author: "伏瀬",
      description: "最弱のスライムに転生した主人公が、仲間を集めて国を作る。",
      reason: "異世界転生ラノベの代表作。アニメが好きなら小説も読んでみよう。",
      genre: "ライトノベル",
      emoji: "🟢",
      difficulty: 2,
      unext: true,
      bookwalker: true
    },
    {
      title: "魔女の宅急便",
      author: "角野栄子",
      description: "13歳の魔女キキが独り立ちして、見知らぬ町で宅急便を始める。",
      reason: "ジブリ映画の原作。映画とは違う展開もあって、原作は原作で面白い。",
      genre: "ファンタジー",
      emoji: "🧹",
      difficulty: 2,
      unext: true
    },
    {
      title: "ちょっと今から仕事やめてくる",
      author: "北川恵海",
      description: "ブラック企業で心が壊れかけた主人公を救った謎の男。その正体は…。",
      reason: "働くことの意味を考えさせられる。テンポがいいので一気読み。",
      genre: "現代文学",
      emoji: "💼",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "ツナグ",
      author: "辻村深月",
      description: "死者と生者を一度だけ会わせてくれる「使者」の物語。",
      reason: "かがみの孤城が好きなら辻村深月の他の作品も。泣ける短編連作。",
      genre: "ファンタジー",
      emoji: "🔗",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "三日間の幸福",
      author: "三秋縋",
      description: "自分の寿命を売った青年。残り3日の人生で、本当に大切なものに気づく。",
      reason: "ネット小説発の名作。短くて一気に読めるのに、余韻がすごい。",
      genre: "恋愛・SF",
      emoji: "⌛",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "億男",
      author: "川村元気",
      description: "宝くじで3億円当たった男が、お金と幸せの関係を考える。",
      reason: "お金について考えるきっかけになる。軽く読めるけど深い。",
      genre: "現代文学",
      emoji: "💰",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "精霊の守り人",
      author: "上橋菜穂子",
      description: "女用心棒バルサが皇子チャグムを守って旅をする壮大なファンタジー。",
      reason: "日本ファンタジーの最高峰。強い女性キャラが好きならバルサに惚れる。",
      genre: "ファンタジー",
      emoji: "🗡️",
      difficulty: 3,
      unext: true,
      bookwalker: true
    },
    {
      title: "5分後に恋の結末",
      author: "橘つばさ（編集）",
      description: "5分で読める恋愛短編集。甘い話、切ない話、びっくりする話がいっぱい。",
      reason: "恋愛ものが好きなら、短編だから気軽に読める。朝読書にもおすすめ。",
      genre: "恋愛・短編",
      emoji: "💗",
      difficulty: 1,
      bookwalker: true
    },
    {
      title: "星の王子さま",
      author: "サン=テグジュペリ",
      description: "砂漠に不時着した飛行士が出会った、小さな星から来た王子さま。",
      reason: "大切なものは目に見えない。何歳で読んでも新しい発見がある永遠の名作。",
      genre: "ファンタジー・哲学",
      emoji: "⭐",
      difficulty: 2
    },
    {
      title: "有頂天家族",
      author: "森見登美彦",
      description: "京都を舞台に、たぬきの一家が天狗や人間と繰り広げるドタバタ劇。",
      reason: "夜は短しが好きなら森見登美彦をもっと。独特の文体がクセになる。",
      genre: "ファンタジー・ユーモア",
      emoji: "🦝",
      difficulty: 3,
      unext: true,
      bookwalker: true
    },
    {
      title: "Another",
      author: "綾辻行人",
      description: "転校先のクラスには「いないもの」とされている少女がいた。学園ホラーミステリー。",
      reason: "ホラーとミステリーの融合。アニメも有名だけど小説がもっと怖い。",
      genre: "ホラー・ミステリー",
      emoji: "👁️",
      difficulty: 3,
      unext: true,
      bookwalker: true
    },
    {
      title: "旅猫リポート",
      author: "有川浩",
      description: "猫のナナと飼い主サトルの最後の旅。新しい飼い主を探す旅路で明かされる過去。",
      reason: "猫好きなら号泣必至。動物の気持ちが描かれていて心が温かくなる。",
      genre: "おはなし",
      emoji: "🐈",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "永遠の0",
      author: "百田尚樹",
      description: "太平洋戦争で特攻隊員だった祖父の本当の姿を孫が辿る。",
      reason: "戦争について考えるきっかけになる。涙なしには読めない。",
      genre: "歴史・文学",
      emoji: "✈️",
      difficulty: 3,
      bookwalker: true
    },
    {
      title: "しゃばけ",
      author: "畠中恵",
      description: "江戸時代の病弱な若旦那と妖怪たちが事件を解決する時代ミステリー。",
      reason: "妖怪×ミステリー×江戸時代。薬屋のひとりごとが好きなら絶対ハマる。",
      genre: "ファンタジー・ミステリー",
      emoji: "👘",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "天気の子",
      author: "新海誠",
      description: "天気を晴れにできる少女と、東京で生きる少年の物語。映画のノベライズ。",
      reason: "映画を見たなら小説も。帆高の心理描写が映画より深く描かれている。",
      genre: "恋愛・ファンタジー",
      emoji: "☀️",
      difficulty: 2,
      unext: true,
      bookwalker: true
    },
    {
      title: "すずめの戸締まり",
      author: "新海誠",
      description: "廃墟の扉を閉じて回る少女の旅。日本各地を巡るロードムービー的物語。",
      reason: "映画の裏側がわかる。すずめの気持ちがより深く理解できる。",
      genre: "ファンタジー・冒険",
      emoji: "🚪",
      difficulty: 2,
      unext: true,
      bookwalker: true
    },
    {
      title: "余命10年",
      author: "小坂流加",
      description: "余命10年と宣告された20歳の女性が、残された時間で恋をする。",
      reason: "著者自身が難病だった実話ベース。泣きたい時に読む一冊。",
      genre: "恋愛",
      emoji: "🌸",
      difficulty: 2,
      bookwalker: true
    },
    {
      title: "夏の庭 The Friends",
      author: "湯本香樹実",
      description: "「もうすぐ死ぬ」と噂のおじいさんを観察し始めた3人の少年。でも次第に…。",
      reason: "生と死について考えさせられる。短いのに一生心に残る名作。",
      genre: "青春",
      emoji: "🌻",
      difficulty: 2
    }
  ]
};
