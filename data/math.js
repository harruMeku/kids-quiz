// 算数問題を動的に生成する関数群

// ヘルパー関数: 最大公約数（ユークリッドの互除法）
function gcd(a, b) {
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

// ヘルパー関数: 最小公倍数
function lcm(a, b) {
  return a * b / gcd(a, b);
}

const MATH_GENERATORS = {
  // ひかり用: 20までの足し算・引き算
  addition20: {
    name: "たしざん（20まで）",
    generate() {
      const a = Math.floor(Math.random() * 19) + 1;
      const b = Math.floor(Math.random() * (20 - a)) + 1;
      return {
        question: `${a} + ${b} = ?`,
        answer: String(a + b),
        display: "large"
      };
    }
  },

  subtraction20: {
    name: "ひきざん（20まで）",
    generate() {
      const answer = Math.floor(Math.random() * 19) + 1;
      const b = Math.floor(Math.random() * (20 - answer)) + 1;
      const a = answer + b;
      return {
        question: `${a} - ${b} = ?`,
        answer: String(answer),
        display: "large"
      };
    }
  },

  mixed20: {
    name: "たしざん・ひきざん まぜまぜ",
    generate() {
      if (Math.random() < 0.5) {
        return MATH_GENERATORS.addition20.generate();
      } else {
        return MATH_GENERATORS.subtraction20.generate();
      }
    }
  },

  // 友博用: 四則演算
  addition: {
    name: "足し算",
    generate() {
      const a = Math.floor(Math.random() * 900) + 100;
      const b = Math.floor(Math.random() * 900) + 100;
      return {
        question: `${a} + ${b} = ?`,
        answer: String(a + b),
        display: "large"
      };
    }
  },

  subtraction: {
    name: "引き算",
    generate() {
      const a = Math.floor(Math.random() * 900) + 100;
      const b = Math.floor(Math.random() * a) + 1;
      return {
        question: `${a} - ${b} = ?`,
        answer: String(a - b),
        display: "large"
      };
    }
  },

  multiplication: {
    name: "かけ算",
    generate() {
      const a = Math.floor(Math.random() * 9) + 2;
      const b = Math.floor(Math.random() * 90) + 11;
      return {
        question: `${a} × ${b} = ?`,
        answer: String(a * b),
        display: "large"
      };
    }
  },

  division: {
    name: "わり算",
    generate() {
      const b = Math.floor(Math.random() * 9) + 2;
      const answer = Math.floor(Math.random() * 99) + 2;
      const a = b * answer;
      return {
        question: `${a} ÷ ${b} = ?`,
        answer: String(answer),
        display: "large"
      };
    }
  },

  mixedAll: {
    name: "四則演算ミックス",
    generate() {
      const types = ['addition', 'subtraction', 'multiplication', 'division'];
      const type = types[Math.floor(Math.random() * types.length)];
      return MATH_GENERATORS[type].generate();
    }
  },

  // ---- 中学受験 計算力強化ジェネレーター ----

  fraction: {
    name: "分数の計算",
    generate() {
      // 分母2〜12でランダムに2つの分数を生成
      const d1 = Math.floor(Math.random() * 11) + 2;
      const d2 = Math.floor(Math.random() * 11) + 2;
      const n1 = Math.floor(Math.random() * (d1 - 1)) + 1;
      const n2 = Math.floor(Math.random() * (d2 - 1)) + 1;
      const isAdd = Math.random() < 0.5;

      // 通分して計算
      const commonD = lcm(d1, d2);
      const cn1 = n1 * (commonD / d1);
      const cn2 = n2 * (commonD / d2);
      let ansN, ansD;
      if (isAdd) {
        ansN = cn1 + cn2;
        ansD = commonD;
      } else {
        // 引き算: 大きい方 - 小さい方にして正の答えを保証
        if (cn1 >= cn2) {
          ansN = cn1 - cn2;
          ansD = commonD;
        } else {
          ansN = cn2 - cn1;
          ansD = commonD;
        }
      }
      // 約分
      const g = gcd(ansN, ansD);
      ansN = ansN / g;
      ansD = ansD / g;

      // 整数になる場合
      let ansStr;
      if (ansN === 0) {
        ansStr = "0";
      } else if (ansD === 1) {
        ansStr = String(ansN);
      } else {
        ansStr = `${ansN}/${ansD}`;
      }

      // 問題文の分数表記
      const frac1 = `${n1}/${d1}`;
      const frac2 = `${n2}/${d2}`;
      const op = isAdd ? "+" : (cn1 >= cn2 ? "-" : "-");
      const [qFrac1, qFrac2] = isAdd
        ? [frac1, frac2]
        : (cn1 >= cn2 ? [frac1, frac2] : [frac2, frac1]);

      return {
        question: `${qFrac1} ${op} ${qFrac2} = ?`,
        answer: ansStr,
        display: ""
      };
    }
  },

  decimal: {
    name: "小数の計算",
    generate() {
      const ops = ['+', '-', '×'];
      const op = ops[Math.floor(Math.random() * ops.length)];

      // 小数第1〜2位の数を生成
      const rand1dec = () => Math.round((Math.random() * 9 + 0.1) * 10) / 10;
      const rand2dec = () => Math.round((Math.random() * 9 + 0.01) * 100) / 100;
      const randDec = () => Math.random() < 0.5 ? rand1dec() : rand2dec();

      let a, b, ans;
      if (op === '+') {
        a = randDec();
        b = randDec();
        ans = Math.round((a + b) * 1000) / 1000;
      } else if (op === '-') {
        a = randDec();
        b = randDec();
        if (a < b) { const tmp = a; a = b; b = tmp; }
        ans = Math.round((a - b) * 1000) / 1000;
      } else {
        // かけ算: 小数第1位どうし
        a = rand1dec();
        b = rand1dec();
        ans = Math.round(a * b * 100) / 100;
      }

      // 末尾の余分な0を除去して文字列化
      const ansStr = String(parseFloat(ans.toFixed(3)));

      return {
        question: `${a} ${op} ${b} = ?`,
        answer: ansStr,
        display: ""
      };
    }
  },

  gcdLcm: {
    name: "最大公約数・最小公倍数",
    generate() {
      // 6〜120の範囲で2数を生成
      const a = Math.floor(Math.random() * 115) + 6;
      const b = Math.floor(Math.random() * 115) + 6;
      const isGcd = Math.random() < 0.5;

      if (isGcd) {
        return {
          question: `${a}と${b}の最大公約数は？`,
          answer: String(gcd(a, b)),
          display: ""
        };
      } else {
        return {
          question: `${a}と${b}の最小公倍数は？`,
          answer: String(lcm(a, b)),
          display: ""
        };
      }
    }
  },

  calcTrick: {
    name: "計算の工夫",
    generate() {
      const pattern = Math.floor(Math.random() * 4);

      if (pattern === 0) {
        // 25×4型: 25×(4k) → k を 2〜9 で生成
        const k = Math.floor(Math.random() * 8) + 2;
        const b = 4 * k;
        return {
          question: `25 × ${b} = ?\n（ヒント: 25×4=100を使おう）`,
          answer: String(25 * b),
          display: ""
        };
      } else if (pattern === 1) {
        // 近い数型: (100-1)×n → n は 3〜12
        const n = Math.floor(Math.random() * 10) + 3;
        return {
          question: `99 × ${n} = ?\n（ヒント: 100×${n}−${n}を使おう）`,
          answer: String(99 * n),
          display: ""
        };
      } else if (pattern === 2) {
        // 分配法則: a×k + b×k = (a+b)×k
        const k = Math.floor(Math.random() * 9) + 2;
        // a+b が 100 になるよう a を 11〜89 でランダム
        const a = Math.floor(Math.random() * 79) + 11;
        const b = 100 - a;
        return {
          question: `${a}×${k} + ${b}×${k} = ?\n（ヒント: まとめてかけよう）`,
          answer: String((a + b) * k),
          display: ""
        };
      } else {
        // 連続足し算: 1+2+...+n, n は 5〜20
        const n = Math.floor(Math.random() * 16) + 5;
        return {
          question: `1＋2＋3＋…＋${n} = ?\n（ヒント: n×(n+1)÷2）`,
          answer: String(n * (n + 1) / 2),
          display: ""
        };
      }
    }
  },

  unitConvert: {
    name: "単位換算",
    generate() {
      const category = Math.floor(Math.random() * 3);

      if (category === 0) {
        // 長さ: mm/cm/m/km
        const conversions = [
          { from: 'km', to: 'm',  factor: 1000,   gen: () => (Math.floor(Math.random() * 90) + 10) / 10 },
          { from: 'm',  to: 'cm', factor: 100,    gen: () => Math.floor(Math.random() * 50) + 1 },
          { from: 'cm', to: 'mm', factor: 10,     gen: () => Math.floor(Math.random() * 100) + 1 },
          { from: 'm',  to: 'mm', factor: 1000,   gen: () => (Math.floor(Math.random() * 50) + 1) },
        ];
        const c = conversions[Math.floor(Math.random() * conversions.length)];
        const val = c.gen();
        return {
          question: `${val}${c.from} ＝ ___${c.to}`,
          answer: String(parseFloat((val * c.factor).toFixed(3))),
          display: ""
        };
      } else if (category === 1) {
        // 重さ: g/kg
        const toKg = Math.random() < 0.5;
        if (toKg) {
          const g = (Math.floor(Math.random() * 90) + 10) * 100;
          return {
            question: `${g}g ＝ ___kg`,
            answer: String(g / 1000),
            display: ""
          };
        } else {
          const kg = (Math.floor(Math.random() * 90) + 1) / 10;
          return {
            question: `${kg}kg ＝ ___g`,
            answer: String(Math.round(kg * 1000)),
            display: ""
          };
        }
      } else {
        // かさ: mL/dL/L
        const conversions = [
          { from: 'L',  to: 'dL', factor: 10,   gen: () => (Math.floor(Math.random() * 40) + 1) / 10 * 10 / 10 },
          { from: 'dL', to: 'mL', factor: 100,  gen: () => Math.floor(Math.random() * 20) + 1 },
          { from: 'L',  to: 'mL', factor: 1000, gen: () => (Math.floor(Math.random() * 40) + 1) / 10 },
        ];
        const c = conversions[Math.floor(Math.random() * conversions.length)];
        const val = c.gen();
        return {
          question: `${val}${c.from} ＝ ___${c.to}`,
          answer: String(parseFloat((val * c.factor).toFixed(3))),
          display: ""
        };
      }
    }
  },

  divisibility: {
    name: "倍数・約数",
    generate() {
      const isFactors = Math.random() < 0.5;

      if (isFactors) {
        // 約数: 対象は6〜36の整数
        const n = Math.floor(Math.random() * 31) + 6;
        const factors = [];
        for (let i = 1; i <= n; i++) {
          if (n % i === 0) factors.push(i);
        }
        return {
          question: `${n}の約数をすべて答えなさい\n（小さい順にカンマ区切りで）`,
          answer: factors.join(','),
          display: ""
        };
      } else {
        // 公倍数: 100以下の公倍数
        // 小さい数ペアを選ぶ (2〜12の範囲)
        const a = Math.floor(Math.random() * 11) + 2;
        const b = Math.floor(Math.random() * 11) + 2;
        const l = lcm(a, b);
        const multiples = [];
        for (let k = l; k <= 100; k += l) {
          multiples.push(k);
        }
        return {
          question: `${a}と${b}の公倍数で100以下のものをすべて答えなさい\n（小さい順にカンマ区切りで）`,
          answer: multiples.join(','),
          display: ""
        };
      }
    }
  },

  jukenMix: {
    name: "受験算数ミックス",
    generate() {
      const types = ['fraction', 'decimal', 'gcdLcm', 'calcTrick', 'unitConvert', 'divisibility'];
      const type = types[Math.floor(Math.random() * types.length)];
      return MATH_GENERATORS[type].generate();
    }
  }
};
