const messages_en = require("./l10n/messages_en.json");
const messages_es = require("./l10n/messages_es.json");

const menu_en = require("./l10n/menu_en.json");
const menu_es = require("./l10n/menu_es.json");


/**
 * Get localization:
 * site[locale].search
 * site[locale].menu.top
 */
module.exports = {
    buildTime: new Date(),
    name: "CreaSoft.dev",
    en: {
        menu: menu_en,
        ...messages_en
    },
    es: {
        menu: menu_es,
        ...messages_es
    },
    // Active languages
    langs: [{
            "id": "es",
            "name": "Español"
        }, {
            "id": "en",
            "name": "English"
        },
        {
            "id": "ko",
            "name": "한국어"
        }
    ]
};