/**
 * fontfacegen.js
 * https://github.com/agentk/fontfacegen
 *
 * Copyright 2015 Karl Bowden
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

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

    options.source = file.path;
    fontface(options);

    this.push(file);
    return callback();

  });

  return stream;
};

module.exports = gulpFontgen;
