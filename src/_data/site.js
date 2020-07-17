const messages_en = require("./l10n/messages_en.json");
const messages_es = require("./l10n/messages_es.json");
const messages_ko = require("./l10n/messages_ko.json");

const menu_en = require("./l10n/menu_en.json");
const menu_es = require("./l10n/menu_es.json");
const menu_ko = require("./l10n/menu_ko.json");

/**
 * Get localization:
 * site[locale]._t.search
 * site[locale]._t.menu.top
 */
const site = {
    buildTime: new Date(),
    repoUrl: "https://gitlab.com/creasoft-dev/website",
    rootUrl: "https://empoderemosmas.com",

    // Branding
    name: "CreaSoft.dev",
    logoUrl: "/images/CreaSoft.dev-logo.png",
    faviconUrl: "/images/logo.ico",
    googleTagId: "", // use environment variable, see bottom of this file

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
    ],

    // locale message bundle:
    // _t is for translation
    en: {
        menu: menu_en,
        _t: messages_en
    },
    es: {
        menu: menu_es,
        _t: messages_es
    },
    ko: {
        menu: menu_ko,
        _t: messages_ko
    }
};

if (process.env.WEB_ROOT_URL) {
    site.rootUrl = process.env.WEB_ROOT_URL;
}

if (process.env.WEB_PATH_PREFIX) {
    site.pathPrefix = process.env.WEB_PATH_PREFIX;
}

if (process.env.ELEVENTY_ENV === 'production' && process.env.GOOGLE_TAG_ID) {
    site.googleTagId = process.env.GOOGLE_TAG_ID;
}

module.exports = site;