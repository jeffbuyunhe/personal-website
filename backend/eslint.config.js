import js from "@eslint/js";
import globals from "globals";
import nodePlugin from "eslint-plugin-n";

export default [
    { ignores: ["node_modules/**", "coverage/**"] },
    js.configs.recommended,
    nodePlugin.configs["flat/recommended-module"],
    {
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "module",
            globals: { ...globals.node },
        },
        rules: {
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
            "n/no-missing-import": "off", // Handled by module resolution; noisy with .js ESM extensions.
            "n/no-unpublished-import": "off",
        },
    },
];
