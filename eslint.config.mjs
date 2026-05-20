import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
    // Ignore build output and generated files
    {
        ignores: [
            "**/dist/**",
            "**/node_modules/**",
            "backend/drizzle/**",
            "frontend/postcss.config.js",
            "frontend/tailwind.config.js",
        ],
    },

    // Base JS rules for all files
    js.configs.recommended,

    // Node.js scripts (plain .mjs — need Node globals)
    {
        files: ["scripts/**/*.mjs"],
        languageOptions: {
            globals: { ...globals.node },
        },
    },

    // TypeScript rules for backend
    {
        files: ["backend/src/**/*.ts"],
        extends: [...tseslint.configs.recommended],
        languageOptions: {
            globals: { ...globals.node },
            parserOptions: {
                project: "./backend/tsconfig.json",
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Allow intentionally unused vars/params prefixed with _
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],
        },
    },

    // TypeScript + React rules for frontend
    {
        files: ["frontend/src/**/*.{ts,tsx}"],
        extends: [...tseslint.configs.recommended],
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooks,
        },
        languageOptions: {
            globals: { ...globals.browser },
            parserOptions: {
                project: "./frontend/tsconfig.json",
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: {
            react: { version: "detect" },
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            // Not needed with React 17+ JSX transform
            "react/react-in-jsx-scope": "off",
        },
    },

    // Disable style rules that conflict with Prettier (must be last)
    prettierConfig,
);
