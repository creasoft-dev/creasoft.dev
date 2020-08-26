
let site = {
    buildTime: new Date(),
    repoUrl: "https://github.com/creasoft-dev/creasoft.dev",
    rootUrl: "https://creasoft.dev",

    // Branding
    name: "CreaSoft.dev",
    logoUrl: "/images/CreaSoft.dev-logo.png",
    faviconUrl: "/images/creasoft.dev-logo.ico",
    googleTagId: "", // use environment variable, see bottom of this file

    // Active languages
    defaultLang: "es",
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

};

/**
 * Get localization:
 * site[locale].menu
 * site[locale]._t.search
 * site[locale]._t.menu.top
 */
for (lang of site.langs) {
    site[lang.id] = {
        menu: require(`./l10n/menu_${lang.id}.json`),
        _t: require(`./l10n/messages_${lang.id}.json`)
    }
}

if (process.env.WEB_ROOT_URL) {
    site.rootUrl = process.env.WEB_ROOT_URL;
}

if (process.env.WEB_PATH_PREFIX) {
    site.pathPrefix = process.env.WEB_PATH_PREFIX;
}

if (process.env.ELEVENTY_ENV === 'production' && process.env.GOOGLE_TAG_ID) {
    site.googleTagId = process.env.GOOGLE_TAG_ID;
}

if (process.env.ALGOLIA_APP_ID) {
    site.enableAlgolia = true;
}

if (process.env.REPO_URL) {
    site.repoUrl = process.env.REPO_URL;
}

if (process.env.DISQUS_SITE_NAME) {
    site.DISQUS_SITE_NAME = process.env.DISQUS_SITE_NAME;
}

// console.log(site);

module.exports = site;
