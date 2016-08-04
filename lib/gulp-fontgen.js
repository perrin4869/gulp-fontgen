'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

var _gulpUtil = require('gulp-util');

var _fontfacegen = require('fontfacegen');

var _fontfacegen2 = _interopRequireDefault(_fontfacegen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Consts
var PLUGIN_NAME = 'gulp-fontgen';

// Plugin level function(dealing with files)
/**
 * fontfacegen.js
 * https://github.com/agentk/fontfacegen
 *
 * Copyright 2015 Karl Bowden
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

// through2 is a thin wrapper around node transform streams

exports.default = function (options) {
  if (!options.dest) {
    throw new _gulpUtil.PluginError(PLUGIN_NAME, 'options.dest is missing');
  }
  // Creating a stream through which each file will pass

  var thr = _through2.default.obj(function (file, enc, callback) {
    var opts = options;
    opts.source = file.path;
    (0, _fontfacegen2.default)(opts);

    thr.push(file);
    return callback();
  });

  return thr;
};
