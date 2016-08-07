# generator-jhipster-bootstrap-material-design
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Add Material design to your JHipster application

## Compatibility

**This version is compatible with Jhipster 3 and greater!**

## Usage

This is a [JHipster](http://jhipster.github.io/) module, that is meant to be use in a JHipster application.

![](https://raw.githubusercontent.com/moifort/generator-jhipster-bootstrap-material-design/master/static/generator-jhipster-bootstrap-material-design-install.gif)

![](https://raw.githubusercontent.com/moifort/generator-jhipster-bootstrap-material-design/master/static/generator-jhipster-bootstrap-material-design-demo.gif)


## Installation

As this is a [JHipster](http://jhipster.github.io/) module, we expect you have JHipster and its related tools already installed.

```bash
npm install -g generator-jhipster-bootstrap-material-design
```

Then run the module on a JHipster generated application:

```bash
yo jhipster-bootstrap-material-design
```

### Using SASS

When you use sass you need to modify your ``index.html`` a little bit to make sure material design styles are not overwritten by default bootstrap styles again:

```html
<!-- build:css content/css/vendor.css -->
<link rel="stylesheet" href="content/css/vendor.css">
<!-- bower:css -->
<link rel="stylesheet" href="bower_components/angular-loading-bar/build/loading-bar.css">
<link rel="stylesheet" href="bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.css">
<link rel="stylesheet" href="bower_components/bootstrap-material-design/dist/css/ripples.css">
<!-- endinject -->
<!-- endbuild -->
```

You should make sure that the ``vendor.css`` is before all material design stylesheets in your ``index.html``!

## Bootstrap Material Design  

Material Design for Bootstrap is a theme for Bootstrap 3 which lets you use the new Google Material Design in your favorite front-end framework.

- Github: https://github.com/FezVrasta/bootstrap-material-design
- Website: http://fezvrasta.github.io/bootstrap-material-design/

## Screenshot

![](https://raw.githubusercontent.com/moifort/generator-jhipster-bootstrap-material-design/master/static/jhipster-bootstrap-material-design-1.png)

![](https://raw.githubusercontent.com/moifort/generator-jhipster-bootstrap-material-design/master/static/jhipster-bootstrap-material-design-2.png)

![](https://raw.githubusercontent.com/moifort/generator-jhipster-bootstrap-material-design/master/static/jhipster-bootstrap-material-design-3.png)

![](https://raw.githubusercontent.com/moifort/generator-jhipster-bootstrap-material-design/master/static/jhipster-bootstrap-material-design-4.png)

![](https://raw.githubusercontent.com/moifort/generator-jhipster-bootstrap-material-design/master/static/jhipster-bootstrap-material-design-5.png)

![](https://raw.githubusercontent.com/moifort/generator-jhipster-bootstrap-material-design/master/static/jhipster-bootstrap-material-design-6.png)

![](https://raw.githubusercontent.com/moifort/generator-jhipster-bootstrap-material-design/master/static/jhipster-bootstrap-material-design-7.png)

## License

WTFPL-2.0 © Thibaut Mottet


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-bootstrap-material-design.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-bootstrap-material-design
[daviddm-image]: https://david-dm.org/moifort/generator-jhipster-bootstrap-material-design.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/moifort/generator-jhipster-bootstrap-material-design
[travis-image]: https://travis-ci.org/moifort/generator-jhipster-bootstrap-material-design.svg?branch=master
[travis-url]: https://travis-ci.org/moifort/generator-jhipster-bootstrap-material-design
