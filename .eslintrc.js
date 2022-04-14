module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true
    },
    "extends": [
        "eslint:recommended",
        "prettier"
    ],
    "plugins":["prettier"],
    "parserOptions": {
        "ecmaVersion": "2018",
        "sourceType": "module"
    },
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "prettier/prettier":"error",
        "no-unused-vars":0
    }
}
