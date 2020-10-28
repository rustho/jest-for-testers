module.exports = {
  presets: [["@babel/preset-env", { loose: true, modules: "auto" }]],
  plugins: [
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
  env: {
    test: {
      presets: [["@babel/preset-env", { loose: true, modules: "auto" }]],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          { useESModules: true, version: "7.8.3" },
        ],
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
      ],
    },
  },
};
