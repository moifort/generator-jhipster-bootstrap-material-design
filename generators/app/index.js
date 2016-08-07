'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var packagejs = require(__dirname + '/../../package.json');
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
            'Welcome to the ' + chalk.red('JHipster Bootstrap Material design') + ' generator! ' + chalk.yellow('v' + packagejs.version + '\n')
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
        this.useSass = jhipsterVar.useSass;
        this.webappDir = jhipsterVar.webappDir;

        this.installDesign = this.props.installDesign;

        if (!this.installDesign) {
            return;
        }

        // Add dependencies
        jhipsterFunc.addBowerDependency('arrive', '2.3.0');
        jhipsterFunc.addBowerDependency('bootstrap-material-design', '0.5.10');

        // Add AngularJs config
        jhipsterFunc.copyTemplate(this.webappDir + 'app/blocks/config/_bootstrap-material.config.js', this.webappDir + 'app/blocks/config/bootstrap-material.config.js', 'template', this, null, true);

        // Fix navbar menu display
        var navbarFullPath = 'src/main/webapp/app/layouts/navbar/navbar.html';
        var file = fs.readFileSync(navbarFullPath, 'utf8');
        file = file.replace(/class="dropdown pointer"/g, 'dropdown');
        file = file.replace(/class="dropdown-toggle" data-toggle="dropdown"/g, 'dropdown-toggle');
        fs.writeFileSync(navbarFullPath, file);

        // Fix error field display
        var style = '.form-group .help-block {\n' +
            '    position: static;\n' +
            '}';
        jhipsterFunc.addMainCSSStyle(this.useSass, style, 'Fix error field display');

        done();
    },

    install: function () {
        var injectDependenciesAndConstants = function () {
            this.spawnCommand('gulp', ['install']);
        };

        this.installDependencies({
          bower: true,
          npm: false,
          callback: injectDependenciesAndConstants.bind(this)
        });
    },

    end: function() {

        if (this.useSass) {
            this.log('\n' + chalk.bold.green('You are using SASS! Please make sure to check the documentation on using SASS: https://github.com/moifort/generator-jhipster-bootstrap-material-design'));
        }
    }
});
