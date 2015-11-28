# gulp-fontgen

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> gulp-fontgen plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-fontgen` as a development dependency:

```shell
npm install --save-dev gulp-fontgen
```

Then, add it to your `gulpfile.js`:

```javascript
var gulp = require('gulp');
var fontgen = require('../gulp-fontgen');

gulp.task('fontgen', function() {
  return gulp.src("./src/*.{ttf,otf}")
    .pipe(fontgen({
      dest: "./dest/"
    }));
});

gulp.task('default', ['fontgen']);
```

## API

### gulpFontgen(options)

#### options.dest
Type: `String` (Required)

Destination to write all the font files to

All other options for `fontfacegen` are passed through.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-fontgen
[npm-image]: https://badge.fury.io/js/gulp-fontgen.png

[travis-url]: http://travis-ci.org/agentk/gulp-fontgen
[travis-image]: https://secure.travis-ci.org/agentk/gulp-fontgen.png?branch=master

[coveralls-url]: https://coveralls.io/r/agentk/gulp-fontgen
[coveralls-image]: https://coveralls.io/repos/agentk/gulp-fontgen/badge.png

[depstat-url]: https://david-dm.org/agentk/gulp-fontgen
[depstat-image]: https://david-dm.org/agentk/gulp-fontgen.png
