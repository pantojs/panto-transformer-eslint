/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-08-27[22:29:58]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');
const linter = require("eslint").linter;

class EslintTransformer extends Transformer {
    _transform(file) {
        return new Promise((resolve, reject) => {
            const messages = linter.verify(file.content, this.options.eslintOptions || {}, {
                filename: file.filename
            });
            const firstMessage = messages[0];
            (!firstMessage) ? resolve(file) : reject(new Error(
                `${firstMessage.message} at ${firstMessage.line}:${firstMessage.column} in ${file.filename}`
            ));
        });
    }
    isTorrential() {
        return false;
    }
}

module.exports = EslintTransformer;
