CreaSoft.dev website
====================

Website built from [Fundamenty](https://fundamenty.netlify.app), an Eleventy starter project.

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
For running locally
```
$ ELEVENTY_ENV=development yarn build && ELEVENTY_ENV=development yarn serve:eleventy
```
For building
```
$ ELEVENTY_ENV=production yarn build
```
For pushing entris to Algolia index
```
$ yarn algolia:tool push 
```

## Authoring Content
Just open up your trusty code editor and start adding markdown files under `./src/{lang}/` directory.

After each new article/page, you can push it to the Algolia index for searching, see command above.

