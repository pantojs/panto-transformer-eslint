/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-08-27[22:29:58]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const EslintTransformer = require('../');

describe('panto-transformer-eslint', () => {
    describe('#transform', () => {
        it('should report error', done => {
            new EslintTransformer({
                eslintOptions: {
                    rules: {
                        semi: 2
                    }
                }
            }).transform({
                filename: 'a.js',
                content: 'var foo = "a"\nfoo+="b"'
            }).catch(e => {
                done()
            });
        });
    });
});
