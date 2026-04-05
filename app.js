// ===== すどう家 まなびクイズ =====

// --- プロフィール別メニュー定義 ---
const PROFILES = {
  sudo: {
    name: "お父さん",
    grade: "OLTA業務知識",
    categories: [
      { id: "olta_org", emoji: "&#128101;", title: "経営陣・組織", desc: "メンバーのフルネーム・役職", type: "olta", oltaCategory: "organization" },
      { id: "olta_kpi", emoji: "&#128202;", title: "KPI・数値", desc: "GTV・手数料率・成約率など", type: "olta", oltaCategory: "kpi" },
      { id: "olta_channel", emoji: "&#127970;", title: "チャネル・提携", desc: "銀行・直販・信金", type: "olta", oltaCategory: "channel" },
      { id: "olta_service", emoji: "&#128196;", title: "サービス仕組み", desc: "ファクタリング・審査・契約", type: "olta", oltaCategory: "service" },
      { id: "olta_strategy", emoji: "&#127919;", title: "戦略・チーム", desc: "優先順位・成長設計・目標", type: "olta", oltaCategory: "strategy" },
      { id: "olta_all", emoji: "&#127942;", title: "全カテゴリMix", desc: "ランダムで総合力を鍛える", type: "olta", oltaCategory: "all" },
    ]
  },
  kanako: {
    name: "加奈子",
    grade: "中学1年生",
    categories: [
      { id: "kanji_all", emoji: "&#128209;", title: "漢字（全学年）", desc: "小学校の漢字 1,026字", type: "kanji", grades: [1,2,3,4,5,6] },
      { id: "kanji_56", emoji: "&#128221;", title: "漢字（5・6年）", desc: "高学年の漢字", type: "kanji", grades: [5,6] },
      { id: "kanji_34", emoji: "&#9999;", title: "漢字（3・4年）", desc: "中学年の漢字", type: "kanji", grades: [3,4] },
      { id: "prefecture", emoji: "&#128510;", title: "都道府県", desc: "47都道府県", type: "prefecture" },
    ]
  },
  tomohiro: {
    name: "友博",
    grade: "小学4年生",
    categories: [
      { id: "math_mixed", emoji: "&#129518;", title: "四則演算ミックス", desc: "＋−×÷ ぜんぶ", type: "math", mathType: "mixedAll" },
      { id: "math_mult", emoji: "&#10006;", title: "かけ算", desc: "2ケタ×1ケタ", type: "math", mathType: "multiplication" },
      { id: "math_div", emoji: "&#10135;", title: "わり算", desc: "わりきれる問題", type: "math", mathType: "division" },
      { id: "kanji_123", emoji: "&#128209;", title: "漢字（1〜3年）", desc: "小3までの漢字 440字", type: "kanji", grades: [1,2,3] },
      { id: "map_symbol", emoji: "&#128506;", title: "地図記号", desc: "地図記号をおぼえよう", type: "mapSymbol" },
    ]
  },
  hikari: {
    name: "ひかり",
    grade: "小学1年生",
    categories: [
      { id: "math_add20", emoji: "&#10133;", title: "たしざん", desc: "20までのたしざん", type: "math", mathType: "addition20" },
      { id: "math_sub20", emoji: "&#10134;", title: "ひきざん", desc: "20までのひきざん", type: "math", mathType: "subtraction20" },
      { id: "math_mix20", emoji: "&#127922;", title: "まぜまぜ", desc: "たしざん と ひきざん", type: "math", mathType: "mixed20" },
      { id: "reading", emoji: "&#128214;", title: "よみとり", desc: "おはなしを よんで こたえよう", type: "reading" },
      { id: "number_reading", emoji: "&#128290;", title: "よんけたの かず", desc: "おおきな かずを よんでみよう", type: "numberReading" },
    ]
  }
};

const QUESTIONS_PER_ROUND = 10;

// --- 状態管理 ---
let currentProfile = null;
let currentCategory = null;
let questions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongAnswers = [];
let answerProcessed = false;

// --- スペースドリピティション ---
function getSRData(profile, categoryId) {
  const key = `sr_${profile}_${categoryId}`;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : {};
}

function saveSRData(profile, categoryId, data) {
  const key = `sr_${profile}_${categoryId}`;
  localStorage.setItem(key, JSON.stringify(data));
}

function updateSR(profile, categoryId, itemId, correct) {
  const data = getSRData(profile, categoryId);
  if (!data[itemId]) {
    data[itemId] = { correct: 0, wrong: 0, lastSeen: 0, weight: 1 };
  }
  if (correct) {
    data[itemId].correct++;
    data[itemId].weight = Math.max(0.2, data[itemId].weight * 0.7);
  } else {
    data[itemId].wrong++;
    data[itemId].weight = Math.min(5, data[itemId].weight * 2);
  }
  data[itemId].lastSeen = Date.now();
  saveSRData(profile, categoryId, data);
}

function weightedSelect(items, profile, categoryId, count) {
  const srData = getSRData(profile, categoryId);
  const weighted = items.map((item, i) => {
    const id = item.kanji || item.name || String(i);
    const sr = srData[id] || { weight: 1 };
    return { item, weight: sr.weight, id };
  });

  // シャッフルしてから重み付き選択
  const selected = [];
  const pool = [...weighted];

  for (let i = 0; i < Math.min(count, pool.length); i++) {
    const totalWeight = pool.reduce((sum, w) => sum + w.weight, 0);
    let r = Math.random() * totalWeight;
    let chosen = pool.length - 1;
    for (let j = 0; j < pool.length; j++) {
      r -= pool[j].weight;
      if (r <= 0) { chosen = j; break; }
    }
    selected.push(pool[chosen]);
    pool.splice(chosen, 1);
  }

  return selected;
}

// --- セッション統計 ---
function getSessionStats(profile) {
  const key = `stats_${profile}`;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : { totalCorrect: 0, totalQuestions: 0, sessions: 0, streak: 0, lastDate: null };
}

function saveSessionStats(profile, correct, total) {
  const stats = getSessionStats(profile);
  stats.totalCorrect += correct;
  stats.totalQuestions += total;
  stats.sessions++;

  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  if (stats.lastDate === yesterday || stats.lastDate === today) {
    if (stats.lastDate !== today) stats.streak++;
  } else if (stats.lastDate !== today) {
    stats.streak = 1;
  }
  stats.lastDate = today;

  localStorage.setItem(`stats_${profile}`, JSON.stringify(stats));
}

// --- 画面制御 ---
function showScreen(name) {
  ['profile-screen', 'menu-screen', 'quiz-screen', 'result-screen'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById(`${name}-screen`).style.display = 'flex';

  // 画面切替時に入力状態をリセット
  const input = document.getElementById('quiz-input');
  if (input) {
    input.disabled = false;
    input.value = '';
  }
  // 選択肢ボタンのdisabledもリセット
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.disabled = false;
  });
}

// --- プロフィール選択 ---
function selectProfile(profile) {
  currentProfile = profile;
  showMenu();
}

function showMenu() {
  pushAppState('menu');
  const profile = PROFILES[currentProfile];
  document.getElementById('menu-title').innerHTML = `${profile.name}のメニュー`;

  const stats = getSessionStats(currentProfile);
  const accuracy = stats.totalQuestions > 0
    ? Math.round(stats.totalCorrect / stats.totalQuestions * 100) : 0;
  document.getElementById('menu-stats').textContent =
    stats.sessions > 0
      ? `これまで ${stats.sessions}回 チャレンジ / 正答率 ${accuracy}% / ${stats.streak}日れんぞく`
      : 'はじめてのチャレンジ！';

  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  profile.categories.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.onclick = () => startQuiz(cat);

    const srData = getSRData(currentProfile, cat.id);
    const totalItems = countCategoryItems(cat);
    const masteredCount = Object.values(srData).filter(s => s.correct >= 3 && s.weight < 0.5).length;
    const progressText = totalItems > 0 ? `${masteredCount} / ${totalItems} マスター` : '';

    div.innerHTML = `
      <div class="menu-emoji">${cat.emoji}</div>
      <div class="menu-title">${cat.title}</div>
      <div class="menu-desc">${cat.desc}</div>
      ${progressText ? `<div class="menu-progress">${progressText}</div>` : ''}
    `;
    grid.appendChild(div);
  });

  showScreen('menu');
}

function countCategoryItems(cat) {
  if (cat.type === 'kanji') {
    if (typeof KANJI_DATA === 'undefined') return 0;
    return cat.grades.reduce((sum, g) => sum + (KANJI_DATA[g] || []).length, 0);
  }
  if (cat.type === 'prefecture') return typeof PREFECTURE_DATA !== 'undefined' ? PREFECTURE_DATA.length : 0;
  if (cat.type === 'mapSymbol') return typeof MAP_SYMBOL_DATA !== 'undefined' ? MAP_SYMBOL_DATA.length : 0;
  if (cat.type === 'reading') return typeof READING_DATA !== 'undefined' ? READING_DATA.length : 0;
  if (cat.type === 'olta') {
    if (typeof OLTA_QUIZ === 'undefined') return 0;
    if (cat.oltaCategory === 'all') {
      return Object.values(OLTA_QUIZ).reduce((sum, arr) => sum + arr.length, 0);
    }
    return (OLTA_QUIZ[cat.oltaCategory] || []).length;
  }
  if (cat.type === 'numberReading') return 0; // infinite
  return 0; // math is infinite
}

// --- クイズ開始 ---
function startQuiz(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  correctCount = 0;
  wrongAnswers = [];
  questions = generateQuestions(category);

  pushAppState('quiz');
  document.getElementById('quiz-category').textContent = category.title;
  showScreen('quiz');
  showQuestion();
}

function generateQuestions(category) {
  switch (category.type) {
    case 'kanji': return generateKanjiQuestions(category);
    case 'math': return generateMathQuestions(category);
    case 'prefecture': return generatePrefectureQuestions(category);
    case 'mapSymbol': return generateMapSymbolQuestions(category);
    case 'reading': return generateReadingQuestions(category);
    case 'olta': return generateOltaQuestions(category);
    case 'numberReading': return generateNumberReadingQuestions(category);
    default: return [];
  }
}

function generateKanjiQuestions(category) {
  let pool = [];
  category.grades.forEach(g => {
    if (KANJI_DATA[g]) {
      pool = pool.concat(KANJI_DATA[g].map(k => ({...k, grade: g})));
    }
  });

  const selected = weightedSelect(pool, currentProfile, category.id, QUESTIONS_PER_ROUND);
  return selected.map(s => ({
    type: 'input',
    id: s.id,
    label: `${s.item.grade}年生の漢字`,
    question: `「${s.item.word}」の よみかたは？`,
    hint: `ヒント: ${s.item.kanji}`,
    answer: s.item.wordReading,
    display: ''
  }));
}

function generateMathQuestions(category) {
  const gen = MATH_GENERATORS[category.mathType];
  const qs = [];
  for (let i = 0; i < QUESTIONS_PER_ROUND; i++) {
    const q = gen.generate();
    qs.push({
      type: 'input',
      id: `math_${i}`,
      label: gen.name,
      question: q.question,
      answer: q.answer,
      display: q.display || '',
      hint: ''
    });
  }
  return qs;
}

function generatePrefectureQuestions(category) {
  return generatePrefectureVariety(category);
}

function generateMapSymbolQuestions(category) {
  if (typeof MAP_SYMBOL_DATA === 'undefined') return [];
  const selected = weightedSelect(MAP_SYMBOL_DATA, currentProfile, category.id, QUESTIONS_PER_ROUND);
  return selected.map(s => ({
    type: 'choice',
    id: s.id,
    label: '地図記号クイズ',
    question: 'この地図記号は なに？',
    questionHtml: s.item.symbolSvg
      ? `<div>この地図記号は なに？</div><div style="margin:15px 0;">${s.item.symbolSvg}</div>`
      : `<div>この地図記号は なに？</div><div style="font-size:2em;margin:10px 0;">${s.item.symbol}</div>`,
    answer: s.item.name,
    hint: '',
    explanation: s.item.description,
    display: '',
    choices: generateChoices(s.item.name, MAP_SYMBOL_DATA.map(m => m.name), 4)
  }));
}

function generateReadingQuestions(category) {
  if (typeof READING_DATA === 'undefined') return [];
  const selected = weightedSelect(READING_DATA, currentProfile, category.id, Math.min(QUESTIONS_PER_ROUND, READING_DATA.length));
  return selected.map(s => ({
    type: 'choice',
    id: `reading_${s.id}`,
    label: 'よみとりクイズ',
    question: s.item.text + '\n\n' + s.item.question,
    answer: s.item.answer,
    choices: s.item.choices,
    display: ''
  }));
}

function generateChoices(correct, allOptions, count) {
  const choices = [correct];
  const others = allOptions.filter(o => o !== correct);
  while (choices.length < count && others.length > 0) {
    const i = Math.floor(Math.random() * others.length);
    choices.push(others.splice(i, 1)[0]);
  }
  // シャッフル
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  return choices;
}

// --- 問題表示 ---
function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestionIndex];

  document.getElementById('quiz-label').textContent = q.label || '';
  const questionEl = document.getElementById('quiz-question');
  if (q.questionHtml) {
    questionEl.innerHTML = q.questionHtml;
  } else {
    questionEl.textContent = q.question;
  }
  questionEl.className = `quiz-question ${q.display === 'large' ? 'large' : ''}`;
  document.getElementById('quiz-hint').textContent = q.hint || '';
  document.getElementById('quiz-score').textContent =
    `${currentQuestionIndex + 1} / ${questions.length}  正解: ${correctCount}`;
  document.getElementById('quiz-progress').style.width =
    `${(currentQuestionIndex / questions.length) * 100}%`;

  // フィードバック非表示
  answerProcessed = false;
  document.getElementById('quiz-feedback').style.display = 'none';
  document.getElementById('quiz-next').style.display = 'none';

  // 入力 or 選択肢
  const inputArea = document.getElementById('quiz-input-area');
  const choicesArea = document.getElementById('quiz-choices');

  if (q.type === 'numberReading') {
    // Self-assessment number reading quiz
    inputArea.style.display = 'none';
    choicesArea.style.display = 'grid';
    choicesArea.className = 'quiz-choices';
    choicesArea.innerHTML = '';
    const showBtn = document.createElement('button');
    showBtn.className = 'choice-btn';
    showBtn.style.gridColumn = '1 / -1';
    showBtn.style.fontSize = '1.2em';
    showBtn.textContent = 'こたえを みる';
    showBtn.onclick = () => {
      showBtn.style.display = 'none';
      choicesArea.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:15px;margin-bottom:10px;">
          <div class="number-reading">${q.answer}</div>
        </div>
        <button class="choice-btn selected-correct self-assess-btn correct" onclick="processAnswer(true, questions[currentQuestionIndex], '(self)')">よめた！</button>
        <button class="choice-btn selected-wrong self-assess-btn retry" onclick="processAnswer(false, questions[currentQuestionIndex], '(self)')">もういちど</button>
      `;
    };
    choicesArea.appendChild(showBtn);
  } else if (q.type === 'multiChoice') {
    // Multiple select question
    inputArea.style.display = 'none';
    choicesArea.style.display = 'grid';
    choicesArea.className = 'quiz-choices multi-select';
    choicesArea.innerHTML = '';
    const selectedChoices = new Set();
    q.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice;
      btn.onclick = () => {
        if (selectedChoices.has(choice)) {
          selectedChoices.delete(choice);
          btn.classList.remove('selected');
        } else {
          selectedChoices.add(choice);
          btn.classList.add('selected');
        }
      };
      choicesArea.appendChild(btn);
    });
    // Submit button for multi-select
    const submitBtn = document.createElement('button');
    submitBtn.className = 'multi-submit-btn';
    submitBtn.textContent = 'けってい';
    submitBtn.onclick = () => {
      const correctSet = new Set(q.answer);
      const isCorrect = selectedChoices.size === correctSet.size &&
        [...selectedChoices].every(c => correctSet.has(c));
      // Show correct/wrong on buttons
      document.querySelectorAll('.quiz-choices .choice-btn').forEach(btn => {
        btn.disabled = true;
        if (correctSet.has(btn.textContent)) {
          btn.classList.add('show-correct');
        }
        if (selectedChoices.has(btn.textContent) && !correctSet.has(btn.textContent)) {
          btn.classList.add('selected-wrong');
        }
      });
      submitBtn.disabled = true;
      // For multi-choice, the "answer" displayed in feedback should be a string
      const displayQ = { ...q, answer: q.answer.join('、') };
      processAnswer(isCorrect, displayQ, [...selectedChoices].join('、'));
    };
    choicesArea.appendChild(submitBtn);
  } else if (q.type === 'olta_free') {
    // 自由記述: 正解を見て自己採点
    inputArea.style.display = 'none';
    choicesArea.style.display = 'grid';
    choicesArea.className = 'quiz-choices';
    choicesArea.innerHTML = '';
    const showBtn = document.createElement('button');
    showBtn.className = 'choice-btn';
    showBtn.style.gridColumn = '1 / -1';
    showBtn.textContent = '答えを見る';
    showBtn.onclick = () => {
      showBtn.style.display = 'none';
      choicesArea.innerHTML = `
        <div style="grid-column:1/-1;text-align:left;padding:10px;background:#f5f5f5;border-radius:8px;margin-bottom:10px;">
          <strong>正解:</strong> ${q.answer}
          ${q.explanation ? `<p style="margin-top:8px;font-size:0.9em;color:#555;">${q.explanation}</p>` : ''}
          ${q.link ? `<p style="margin-top:5px;"><a href="${q.link}" target="_blank" style="color:#2196f3;font-size:0.85em;">詳しく学ぶ →</a></p>` : ''}
        </div>
        <button class="choice-btn selected-correct" onclick="processAnswer(true, questions[currentQuestionIndex], '(self)')">正解だった</button>
        <button class="choice-btn selected-wrong" onclick="processAnswer(false, questions[currentQuestionIndex], '(self)')">不正解だった</button>
      `;
    };
    choicesArea.appendChild(showBtn);
  } else if (q.type === 'choice') {
    inputArea.style.display = 'none';
    choicesArea.style.display = 'grid';
    choicesArea.className = 'quiz-choices';
    choicesArea.innerHTML = '';
    q.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice;
      btn.onclick = () => submitChoiceAnswer(choice, btn);
      choicesArea.appendChild(btn);
    });
  } else {
    inputArea.style.display = 'flex';
    choicesArea.style.display = 'none';
    const input = document.getElementById('quiz-input');
    input.disabled = false;
    input.value = '';
    input.focus();
  }
}

// --- 回答処理 ---
function submitAnswer() {
  const input = document.getElementById('quiz-input');
  const answer = input.value.trim();
  if (!answer) return;

  const q = questions[currentQuestionIndex];
  let correct = normalizeAnswer(answer) === normalizeAnswer(q.answer);

  // OLTA: 複数正解パターン対応
  if (!correct && q.accept && q.accept.length > 0) {
    correct = q.accept.some(a => normalizeAnswer(answer) === normalizeAnswer(a));
  }

  processAnswer(correct, q, answer);
}

function submitChoiceAnswer(choice, btnEl) {
  const q = questions[currentQuestionIndex];
  const correct = choice === q.answer;

  // ボタンの色を変える
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.answer) btn.classList.add('show-correct');
  });
  btnEl.classList.add(correct ? 'selected-correct' : 'selected-wrong');

  processAnswer(correct, q, choice);
}

function processAnswer(correct, q, givenAnswer) {
  // Guard: don't process if we've already gone past the question count
  if (currentQuestionIndex >= questions.length) return;
  // Guard: don't process the same question twice
  if (answerProcessed) return;
  answerProcessed = true;

  if (correct) {
    if (correctCount < questions.length) {
      correctCount++;
    }
  } else {
    wrongAnswers.push({ question: q.question, correct: q.answer, given: givenAnswer });
  }

  updateSR(currentProfile, currentCategory.id, q.id, correct);

  // フィードバック表示
  const feedback = document.getElementById('quiz-feedback');
  if (correct) {
    const messages = ['すごい！', 'かんぺき！', 'そのとおり！', 'ナイス！', 'やったね！'];
    let html = messages[Math.floor(Math.random() * messages.length)];
    if (q.explanation) html += `<br><span style="font-size:0.85em;font-weight:normal;color:#555;">${q.explanation}</span>`;
    if (q.link) html += `<br><a href="${q.link}" target="_blank" style="font-size:0.8em;color:#2196f3;">詳しく学ぶ →</a>`;
    feedback.innerHTML = html;
    feedback.className = 'quiz-feedback correct';
  } else {
    let html = `ざんねん！ こたえは「${q.answer}」`;
    if (q.explanation) html += `<br><span style="font-size:0.85em;font-weight:normal;color:#555;">${q.explanation}</span>`;
    if (q.link) html += `<br><a href="${q.link}" target="_blank" style="font-size:0.8em;color:#1565c0;">詳しく学ぶ →</a>`;
    feedback.innerHTML = html;
    feedback.className = 'quiz-feedback wrong';
  }
  feedback.style.display = 'block';
  document.getElementById('quiz-next').style.display = 'block';

  // 入力を無効化
  const input = document.getElementById('quiz-input');
  if (input) input.disabled = true;
}

function normalizeAnswer(s) {
  return s
    .replace(/\s/g, '')
    .replace(/[０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[～〜]/g, '~')
    .replace(/[，、]/g, ',')
    .toLowerCase();
}

// --- OLTA クイズ生成 ---
function generateOltaQuestions(category) {
  if (typeof OLTA_QUIZ === 'undefined') return [];

  let pool;
  if (category.oltaCategory === 'all') {
    pool = [];
    Object.entries(OLTA_QUIZ).forEach(([cat, items]) => {
      items.forEach((item, i) => {
        pool.push({ ...item, name: `${cat}_${i}`, _cat: cat });
      });
    });
  } else {
    pool = (OLTA_QUIZ[category.oltaCategory] || []).map((item, i) => ({
      ...item, name: `${category.oltaCategory}_${i}`
    }));
  }

  const selected = weightedSelect(pool, currentProfile, category.id, QUESTIONS_PER_ROUND);

  return selected.map(s => {
    const item = s.item;
    const isFree = item.type === 'free';

    return {
      type: isFree ? 'olta_free' : 'input',
      id: s.id,
      label: item._cat ? OLTA_CATEGORIES[item._cat]?.name || '' : (category.oltaCategory !== 'all' ? OLTA_CATEGORIES[category.oltaCategory]?.name || '' : ''),
      question: item.q,
      hint: item.hint || '',
      answer: item.a,
      accept: item.accept || [],
      explanation: item.explanation || '',
      link: item.link || '',
      display: ''
    };
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  // Guard: don't go past question count
  if (currentQuestionIndex > questions.length) {
    currentQuestionIndex = questions.length;
  }
  const input = document.getElementById('quiz-input');
  if (input) input.disabled = false;
  showQuestion();
}

// --- 結果画面 ---
function showResult() {
  const ratio = correctCount / questions.length;

  saveSessionStats(currentProfile, correctCount, questions.length);

  let emoji, title;
  if (ratio === 1) { emoji = '&#127942;'; title = 'パーフェクト！！'; }
  else if (ratio >= 0.8) { emoji = '&#127881;'; title = 'すばらしい！'; }
  else if (ratio >= 0.6) { emoji = '&#128170;'; title = 'がんばったね！'; }
  else { emoji = '&#128522;'; title = 'つぎはもっとできる！'; }

  document.getElementById('result-emoji').innerHTML = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-score').textContent =
    `${questions.length}問中 ${correctCount}問 正解（${Math.round(ratio * 100)}%）`;

  const details = document.getElementById('result-details');
  if (wrongAnswers.length > 0) {
    details.innerHTML = '<p><strong>まちがえた問題：</strong></p>' +
      wrongAnswers.map(w =>
        `<p>・${w.question} → <strong>${w.correct}</strong></p>`
      ).join('');
  } else {
    details.innerHTML = '<p>まちがいなし！ すごいね！</p>';
  }

  showScreen('result');
}

function endQuiz() {
  showMenu();
}

// --- 四桁の数字の読み方 ---
function numberToJapaneseReading(n) {
  if (n === 0) return 'ゼロ';

  const ones = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];

  let result = '';

  // 千の位
  const thousands = Math.floor(n / 1000);
  if (thousands > 0) {
    if (thousands === 1) {
      result += 'せん';
    } else if (thousands === 3) {
      result += 'さんぜん';
    } else if (thousands === 8) {
      result += 'はっせん';
    } else {
      result += ones[thousands] + 'せん';
    }
  }

  // 百の位
  const hundreds = Math.floor((n % 1000) / 100);
  if (hundreds > 0) {
    if (hundreds === 1) {
      result += 'ひゃく';
    } else if (hundreds === 3) {
      result += 'さんびゃく';
    } else if (hundreds === 6) {
      result += 'ろっぴゃく';
    } else if (hundreds === 8) {
      result += 'はっぴゃく';
    } else {
      result += ones[hundreds] + 'ひゃく';
    }
  }

  // 十の位
  const tens = Math.floor((n % 100) / 10);
  if (tens > 0) {
    if (tens === 1) {
      result += 'じゅう';
    } else {
      result += ones[tens] + 'じゅう';
    }
  }

  // 一の位
  const unit = n % 10;
  if (unit > 0) {
    result += ones[unit];
  }

  return result;
}

function generateNumberReadingQuestions(category) {
  const qs = [];
  for (let i = 0; i < QUESTIONS_PER_ROUND; i++) {
    const num = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
    const formatted = num.toLocaleString();
    const reading = numberToJapaneseReading(num);
    qs.push({
      type: 'numberReading',
      id: `numread_${i}`,
      label: 'よんけたの かず',
      question: formatted,
      answer: reading,
      display: 'large',
      hint: ''
    });
  }
  return qs;
}

// --- 都道府県クイズ 多様な出題タイプ ---
function generatePrefectureVariety(category) {
  if (typeof PREFECTURE_DATA === 'undefined') return [];

  const allQuestions = [];
  const selected = weightedSelect(PREFECTURE_DATA, currentProfile, category.id, QUESTIONS_PER_ROUND);

  selected.forEach((s, idx) => {
    // Randomly pick a question type for variety
    const types = ['capital', 'region', 'kanji'];
    // Add adjacency and feature types if data exists
    if (s.item.neighbors && s.item.neighbors.length > 0) types.push('adjacency');
    if (s.item.features && s.item.features.length > 0) types.push('feature');

    const type = types[Math.floor(Math.random() * types.length)];

    switch (type) {
      case 'capital':
        allQuestions.push({
          type: 'choice',
          id: s.id,
          label: '都道府県クイズ',
          question: `県庁所在地が「${s.item.capital}」の都道府県は？`,
          hint: `地方: ${s.item.region}`,
          answer: s.item.name,
          choices: generateChoices(s.item.name, PREFECTURE_DATA.map(p => p.name), 4)
        });
        break;

      case 'region':
        // "X地方に属する都道府県をすべて選べ"
        {
          const region = s.item.region;
          const correctAnswers = PREFECTURE_DATA.filter(p => p.region === region).map(p => p.name);
          const wrongPool = PREFECTURE_DATA.filter(p => p.region !== region).map(p => p.name);
          const wrongs = [];
          while (wrongs.length < 3 && wrongPool.length > 0) {
            const ri = Math.floor(Math.random() * wrongPool.length);
            wrongs.push(wrongPool.splice(ri, 1)[0]);
          }
          const allChoices = [...correctAnswers, ...wrongs];
          // Shuffle
          for (let i = allChoices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allChoices[i], allChoices[j]] = [allChoices[j], allChoices[i]];
          }
          allQuestions.push({
            type: 'multiChoice',
            id: s.id,
            label: '都道府県クイズ',
            question: `「${region}」に属する都道府県をすべて選んでね`,
            hint: '',
            answer: correctAnswers,
            choices: allChoices
          });
        }
        break;

      case 'kanji':
        // "都道府県名に「X」が含まれる県をすべて選べ"
        {
          const kanjiChars = ['山', '島', '川', '田', '福', '新', '大'];
          const char = kanjiChars[Math.floor(Math.random() * kanjiChars.length)];
          const correctAnswers = PREFECTURE_DATA.filter(p => p.name.includes(char)).map(p => p.name);
          if (correctAnswers.length === 0) {
            // Fallback to capital question
            allQuestions.push({
              type: 'choice',
              id: s.id,
              label: '都道府県クイズ',
              question: `県庁所在地が「${s.item.capital}」の都道府県は？`,
              hint: `地方: ${s.item.region}`,
              answer: s.item.name,
              choices: generateChoices(s.item.name, PREFECTURE_DATA.map(p => p.name), 4)
            });
            break;
          }
          const wrongPool = PREFECTURE_DATA.filter(p => !p.name.includes(char)).map(p => p.name);
          const wrongs = [];
          while (wrongs.length < 3 && wrongPool.length > 0) {
            const ri = Math.floor(Math.random() * wrongPool.length);
            wrongs.push(wrongPool.splice(ri, 1)[0]);
          }
          const allChoices = [...correctAnswers, ...wrongs];
          for (let i = allChoices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allChoices[i], allChoices[j]] = [allChoices[j], allChoices[i]];
          }
          allQuestions.push({
            type: 'multiChoice',
            id: s.id,
            label: '都道府県クイズ',
            question: `名前に「${char}」がつく都道府県をすべて選んでね`,
            hint: '',
            answer: correctAnswers,
            choices: allChoices
          });
        }
        break;

      case 'adjacency':
        // "この都道府県と隣接している都道府県をすべて選べ"
        {
          const correctAnswers = s.item.neighbors;
          const wrongPool = PREFECTURE_DATA.filter(p =>
            !correctAnswers.includes(p.name) && p.name !== s.item.name
          ).map(p => p.name);
          const wrongs = [];
          while (wrongs.length < 3 && wrongPool.length > 0) {
            const ri = Math.floor(Math.random() * wrongPool.length);
            wrongs.push(wrongPool.splice(ri, 1)[0]);
          }
          const allChoices = [...correctAnswers, ...wrongs];
          for (let i = allChoices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allChoices[i], allChoices[j]] = [allChoices[j], allChoices[i]];
          }
          allQuestions.push({
            type: 'multiChoice',
            id: s.id,
            label: '都道府県クイズ',
            question: `「${s.item.name}」と隣接する都道府県をすべて選んでね`,
            hint: '',
            answer: correctAnswers,
            choices: allChoices
          });
        }
        break;

      case 'feature':
        // Show a feature, ask which prefecture
        {
          const feature = s.item.features[Math.floor(Math.random() * s.item.features.length)];
          allQuestions.push({
            type: 'choice',
            id: s.id,
            label: '都道府県クイズ',
            question: `「${feature}」といえば どの都道府県？`,
            hint: `地方: ${s.item.region}`,
            answer: s.item.name,
            choices: generateChoices(s.item.name, PREFECTURE_DATA.map(p => p.name), 4)
          });
        }
        break;

      default:
        allQuestions.push({
          type: 'choice',
          id: s.id,
          label: '都道府県クイズ',
          question: `県庁所在地が「${s.item.capital}」の都道府県は？`,
          hint: `地方: ${s.item.region}`,
          answer: s.item.name,
          choices: generateChoices(s.item.name, PREFECTURE_DATA.map(p => p.name), 4)
        });
    }
  });

  return allQuestions;
}

// --- ブラウザ戻るボタン対応 ---
function pushAppState(screen) {
  history.pushState({ screen: screen }, '');
}

window.addEventListener('popstate', function(e) {
  const state = e.state;
  if (!state || !state.screen) {
    // 初期状態（プロフィール画面）に戻る
    currentProfile = null;
    currentCategory = null;
    questions = [];
    showScreen('profile');
    return;
  }

  switch (state.screen) {
    case 'profile':
      currentProfile = null;
      currentCategory = null;
      questions = [];
      showScreen('profile');
      break;
    case 'menu':
      // クイズ中に戻るボタンを押した場合、メニューに戻る
      currentCategory = null;
      questions = [];
      if (currentProfile) {
        showMenu();
      } else {
        showScreen('profile');
      }
      break;
    default:
      showScreen('profile');
  }
});

// --- 初期化 ---
function init() {
  // 連続日数表示
  ['sudo', 'kanako', 'tomohiro', 'hikari'].forEach(p => {
    const stats = getSessionStats(p);
    const el = document.getElementById(`streak-${p}`);
    if (stats.streak > 0) {
      el.textContent = `${stats.streak}日れんぞく！`;
    } else if (stats.sessions > 0) {
      el.textContent = `${stats.sessions}回チャレンジ済み`;
    }
  });

  // 初期状態をhistoryに記録
  history.replaceState({ screen: 'profile' }, '');
  showScreen('profile');
}

init();
