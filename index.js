'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gulpFontgen = gulpFontgen;

var _through = require('through2');

var through = _interopRequireWildcard(_through);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _fontfacegen = require('fontfacegen');

var fontface = _interopRequireWildcard(_fontfacegen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
function gulpFontgen(options) {
  var _this = this;

  if (!options.dest) {
    throw new _gulpUtil2.default(PLUGIN_NAME, 'options.dest is missing');
  }
  // Creating a stream through which each file will pass

  return through.obj(function (file, enc, callback) {
    // options.source = file.path;
    fontface(options);

    _this.push(file);
    return callback();
  });
}
