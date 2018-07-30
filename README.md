# :star: :star: :star: andrelademann.de :star: :star: :star:

[![Coverage Status](https://coveralls.io/repos/github/vergissberlin/andrelademann-de/badge.svg?branch=master)](https://coveralls.io/github/vergissberlin/andrelademann-de?branch=master)
[![Build Status](https://travis-ci.org/vergissberlin/andrelademann-de.svg?branch=master)](https://travis-ci.org/vergissberlin/andrelademann-de)
[![Build Status](https://scrutinizer-ci.com/g/vergissberlin/andrelademann-de/badges/build.png?b=master)](https://scrutinizer-ci.com/g/vergissberlin/andrelademann-de/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/vergissberlin/andrelademann-de/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/vergissberlin/andrelademann-de/?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d71d9adb1c8b4ba7a08ff58b86e5ff6d)](https://www.codacy.com/app/andre_1725/andrelademann-de?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=vergissberlin/andrelademann-de&amp;utm_campaign=Badge_Grade)
[![BlackDuck Badge](https://www.openhub.net/p/andrelademann-de/widgets/project_thin_badge?format=gif&amp;ref=Thin+badge)](https://www.openhub.net/p/andrelademann-de?ref=Thin+badge)
[![NSP Status](https://nodesecurity.io/orgs/programmerq/projects/87c69c1b-a0e8-4f36-964f-5718605064ec/badge)](https://nodesecurity.io/orgs/programmerq/projects/87c69c1b-a0e8-4f36-964f-5718605064ec)

## What

This is the repository to my personal homepage andrelademann.de. I decided to make the source code public for two reasons. Firstly to inspire other people to create there own Website with Node.js and secondly to give pros the chance to find and report bugs and security voluntaries.

## Used technologies

### Server site

Node.js, Express, Handlebars, Grunt, Mongoosejs ODM, MongoDB, S3 Image upload, CloudFront CDN, imagemagick, SASS

### Development and deployment

Webstorm, herokuapp app build and hosting, Travis CI, Scrutinizer,

### Client site

HTML5, Bootstrap 4 alpha CDN Version, font awesome, RDF, vCard, Microformats, Open Graph, Twitter card, Syntax highlighting with prism, Comments with Disqus

## Milestones

[![Waffle.io - Columns and their card count](https://badge.waffle.io/vergissberlin/andrelademann-de.svg?columns=all)](http://waffle.io/vergissberlin/andrelademann-de)
To see the current status, take a look in the milestones overview page or the on waffle.io board.

### Milestone #01 - Setup and static page

-   Configure custom domain andrelademann.de
-   Static sitemap for Google Webmaster Tools
-   Grunt tasks
-   Acceptance tests
-   Multi Language support
-   Check and improve coding style (JavaScript, SCSS, HTML)
-   Semantic Check
-   Accessibility Check <https://paypal.github.io/bootstrap-accessibility-plugin/demo.html#content>
-   Security Shield
-   Error pages e.g. 404

### Milestone #02 - Blog

-   Simple custom CMS for blog articles
-   Rss Feed /Atom Feed
-   Open Graph Support <http://ogp.me/>
-   Twitter Card support
-   Automatic enhanced content - TinyMCE Plugin for FREME

### Milestone #03 - Projects and blog improvements

-   Social Links <https://www.npmjs.com/package/social-media-links>
-   Projects simple CMS
-   Improvements
-   Unit Tests for ViewHelper
-   Caching
-   Generated Sitemap
-   Enhancements
-   epub - Create ebooks from all blog articles to specific categories
-   Pingback
-   Rest API for Articles
-   Alternate style <https://mobirise.com/extensions/puritym/>
-   Search for articles and projects

## Contributing

[![Stories in Ready](https://badge.waffle.io/vergissberlin/andrelademann-de.png?label=ready&title=Ready)](https://waffle.io/vergissberlin/andrelademann-de) Please report bugs and security gaps. My promis: For every bug that you find within my source code and report it, I give an hour for your project. Thanks! :thumbsup: Fee free to contact me on [![Gitter](https://badges.gitter.im/vergissberlin/andrelademann-de.svg)](https://gitter.im/vergissberlin/andrelademann-de?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![Greenkeeper badge](https://badges.greenkeeper.io/vergissberlin/andrelademann-de.svg)](https://greenkeeper.io/).

### Installation

1.  Clone the repository
2.  Type ``npm install`` to install the dependencies
3.  Start a mongodb database an configure the credentials in ``config/database.js``
    - ``docker-compose -f docker-compose.yml -f docker-compose.development.yml up -d``
4.  Set the Environment variables
    -   ``NODE_ENV=development``
    -   ``AWS_ACCESS_KEY_ID=foo``
    -   ``AWS_SECRET_ACCESS_KEY=foo``
    -   ``S3_BUCKET=foo``
5.  Type ``npm start`` to start a local web server

#### Optional settings

-   **Set the Environment variables**
    -   ``MONGODB_URI=foo`` (To override configuration file settings)
    -   ``NODE_SECRET=foo``
    -   ``AUTH_SECRET=foo``
    -   ``BASE_USER=foo``   (For basic authentication)
    -   ``BASE_SECRET=foo`` (For basic authentication)
    -   ``AWS_REGION=foo``
    -   ``BUGSNAG_TOKEN=foo`` To monitor bug messages.

## Documentation

- [JavaScript](doc/index.md)
- [SassDoc](doc/Sass/index.html)
