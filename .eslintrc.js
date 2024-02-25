// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ["apps/**", "packages/**", "configs/**"],
  extends: ["@jsm/eslint-configlibrary.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
