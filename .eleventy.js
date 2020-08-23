require('dotenv').config();
const filters = require('./utils/filters.js')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const site = require('./src/_data/site');

module.exports = eleventyConfig => {
    eleventyConfig.addPlugin(syntaxHighlight);

    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('src/CNAME'); // Needed by GitHub Pages
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/images');

     // Filters
     Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName])
    })

    // For each language, create collection of posts with given language
    site.langs.map(langEntry => {
        eleventyConfig.addCollection(`posts_${langEntry.id}`, function(collectionApi) {
            return collectionApi.getFilteredByTag("post").filter(function(item) {
                return item.data.locale === langEntry.id
            });
        });

        eleventyConfig.addCollection(`qnas_${langEntry.id}`, function(collectionApi) {
            return collectionApi.getFilteredByTag("qna").filter(function(item) {
                return item.data.locale === langEntry.id
            });
        });
    });


    return {
        pathPrefix: process.env.WEB_PATH_PREFIX || '',
        dir: { input: 'src', output: '_site' }
    };

};
