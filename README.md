CreaSoft.dev website
====================

Website built on Eleventy and Tailwindcss.
Initial project setup based on https://statickit.com/guides/eleventy-webpack and https://statickit.com/guides/eleventy-tailwind.

Template based on: https://github.com/tailwindtoolbox/Help-Article

## Folder Structure
The site content is under `./src`.
```
├───en          - Contents in English
├───es          - Contents in Spanish
│   ├ es.json   - Common front matter for all the contents in Spanish 
│   ├───pages   - Site pages
│   └───posts   - Site posts (blog articles)
├───images      - Images
├───scripts     - 
│   ├ main.js   - Main JS file webapack uses to build the file including the dependencies.
├───styles      - Tailwind's CSS styling
├───_data       - Data/configuration file.
└───_includes   - Eleventy's inclusion files, as specified in the front matter 
    └───layouts - Layouts
```

## Serving the site Locally
```
$ ELEVENTY_ENV=development yarn serve:eleventy
$ ELEVENTY_ENV=production yarn build
# or just
$ ELEVENTY_ENV=production yarn build && ELEVENTY_ENV=development yarn serve:eleventy
```


## For new Eleventy + TailwindCSS project
```
yarn add --dev @11ty/eleventy
yarn add --dev webpack webpack-cli npm-run-all rimraf
yarn add --dev tailwindcss autoprefixer mini-css-extract-plugin css-loader postcss-loader
```