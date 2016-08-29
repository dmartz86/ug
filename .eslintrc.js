module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "__dirname": true,
        "require": true,
        "angular": true,
        "uuid": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};