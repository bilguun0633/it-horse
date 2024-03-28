const config = {
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("@trivago/prettier-plugin-sort-imports"),
  ],
  trailingComma: "all",
  arrowParens: "avoid",
  singleQuote: false,
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^[./]", // Other imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import('@trivago/prettier-plugin-sort-imports').PluginConfig} */
module.exports = config;
