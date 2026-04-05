// 算数問題を動的に生成する関数群

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
  }
};
