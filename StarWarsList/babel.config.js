module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo", "@babel/preset-env"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@theme": "./src/theme",
            "@icons": "./src/assets/icons",
          },
        },
      ],
    ],
  };
};
