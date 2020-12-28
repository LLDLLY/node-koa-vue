module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    // "quotes": [2, "single", "avoid-escape"],
    // 不允许多个空行
    // "no-multiple-empty-lines": [2, { "max": 2 }],
    // 要求使用模板字面量而非字符串连接
    // "prefer-template": 0,
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
