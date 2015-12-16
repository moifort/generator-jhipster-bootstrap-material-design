'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');

// Stores JHipster variables
var jhipsterVar = {moduleName: 'bootstrap-material-design'};

// Stores JHipster functions
var jhipsterFunc = {};

module.exports = yeoman.generators.Base.extend({

    templates: function () {
        this.composeWith('jhipster:modules', {
            options: {
                jhipsterVar: jhipsterVar, jhipsterFunc: jhipsterFunc
            }
        });
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the ' + chalk.red('JHipster Bootstrap Material design') + ' generator!'
        ));

        var prompts = [
            {
                type: 'confirm',
                name: 'installDesign',
                message: 'Do you want to install Bootstrap Material design?',
                default: false
            }
        ];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        }.bind(this));
    },

    writing: function () {
        var done = this.async();

        this.baseName = jhipsterVar.baseName;
        this.packageName = jhipsterVar.packageName;
        this.angularAppName = jhipsterVar.angularAppName;
        this.frontendBuilder = jhipsterVar.frontendBuilder;

        this.installDesign = this.props.installDesign;

        if (!this.installDesign) {
            return;
        }

        jhipsterFunc.addBowerDependency('bootstrap', '3.3.6');
        jhipsterFunc.addBowerDependency('arrive', '2.3.0');
        jhipsterFunc.addBowerDependency('bootstrap-material-design', '0.5.6');

        var config = "$.material.init();";
        jhipsterFunc.addAngularJsConfig([''], config, 'Initialize material design');

        var navbarFullPath = 'src/main/webapp/scripts/components/navbar/navbar.html';
        var file = fs.readFileSync(navbarFullPath, 'utf8');
        file = file.replace(/class="dropdown pointer"/g, 'dropdown');
        file = file.replace(/class="dropdown-toggle" data-toggle="dropdown"/g, 'dropdown-toggle');
        fs.writeFileSync(navbarFullPath, file);

        done();
    },

    install: function () {
        var injectDependenciesAndConstants = function () {
            switch (this.frontendBuilder) {
                case 'gulp':
                    this.spawnCommand('gulp', ['ngconstant:dev', 'wiredep:test', 'wiredep:app']);
                    break;
                case 'grunt':
                default:
                    this.spawnCommand('grunt', ['ngconstant:dev', 'wiredep']);
            }
        };

        this.installDependencies({
                callback: injectDependenciesAndConstants.bind(this)
            }
        );
    }
});

