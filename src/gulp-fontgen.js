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
import through from 'through2';
import { PluginError } from 'gulp-util';
import fontface from 'fontfacegen';

// Consts
const PLUGIN_NAME = 'gulp-fontgen';

// Plugin level function(dealing with files)
export default options => {
  if (!options.dest) {
    throw new PluginError(PLUGIN_NAME, 'options.dest is missing');
  }
  // Creating a stream through which each file will pass

  const thr = through.obj((file, enc, callback) => {
    const opts = options;
    opts.source = file.path;
    fontface(opts);

    thr.push(file);
    return callback();
  });

  return thr;
};
