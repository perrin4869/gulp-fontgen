// through2 is a thin wrapper around node transform streams
var through = require('through2');
var gutil = require('gulp-util');
var fontface = require('fontfacegen');
var path = require('path');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-fontgen';

// Plugin level function(dealing with files)
function gulpFontgen(options) {

  if (!options.dest) {
    throw new PluginError(PLUGIN_NAME, "options.dest is missing");
  }

  // Creating a stream through which each file will pass
  var stream = through.obj(function(file, enc, callback) {

    options.source = path.join(file.cwd, file.relative);
    fontface(options);

    this.push(file);
    return callback();

  });

  return stream;
};

module.exports = gulpFontgen;
