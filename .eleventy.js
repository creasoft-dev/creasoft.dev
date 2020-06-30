const moment = require('moment');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

moment.locale('en');

module.exports = eleventyConfig => {
    eleventyConfig.addPlugin(syntaxHighlight);

    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('images');

    // Add filter for data formatting
    eleventyConfig.addFilter('dateIso', date => {
        return moment(date).toISOString();
    });

    eleventyConfig.addFilter('dateReadable', date => {
        return moment(date).utc().format('LL'); // E.g. May 31, 2019
    });

    return {
        dir: { input: 'src', output: '_site' }
    };

};