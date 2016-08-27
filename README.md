# panto-transformer-eslint
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Eslint transformer for panto.

```js
panto.loadTransformer('eslint');

panto.$('**/*.js').eslint({
    eslintOptions: {
        rules: {
            semi: 2
        }
    }
});
```

## options
 - eslintOptions: Object, see [eslint node api](http://eslint.org/docs/developer-guide/nodejs-api)

[npm-url]: https://npmjs.org/package/panto-transformer-eslint
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-eslint.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-eslint.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-eslint
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-eslint.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-eslint
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-eslint.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-eslint#type=dev
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-eslint/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-eslint/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-eslint?branch=master
