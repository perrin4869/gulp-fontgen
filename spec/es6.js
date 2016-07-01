'use strict';

import fontgen from '../index';

if (typeof fontgen !== 'function') {
  throw "Not a function"
}

// get and save raw font fileto ./tmp/src/fonts
// gulp.task(...) fontfacegen ./tmp/dst/fonts
// get expected files
// compare expected files
