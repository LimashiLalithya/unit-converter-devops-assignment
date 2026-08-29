import js from "@eslint/js";

export default [
    {
        ignores: [
            "node_modules/",
            "dist/",
            "coverage/"
        ]
    },
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                console: "readonly"
            }
        },
        rules: {
            "no-console": "off"
        }
    }
];