'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var fs = require('fs-extra');
var helpers = require('yeoman-generator').test;

describe('Files are created', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts({"modules": ['all']})
            .on('end', done);
    });

    it('creates sample page', function () { });
});
