var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

function adustIconNames(glyphs) {
  return glyphs.map(function(glyph) {
    glyph.name = glyph.name.split('-').slice(1).join('-');
  });
}

gulp.task('default', function() {
  // use SVG files from this directory
  gulp.src(['SVG/*.svg'])
    // build the woff, ttf, svg, eot font files named "influicons"
    .pipe(iconfont({
      fontName:           'influicons',
      formats:            ['ttf', 'eot', 'woff'],
      fixedWidth:         true,
      centerHorizontally: true,
      normalize:          true
    }))
    .on('glyphs', function(glyphs) {
      adustIconNames(glyphs);
      // This is the style file that's used by the actual component
      // and shouldn't ever be referenced directly.
      gulp.src('templates/styles.css')
        .pipe(consolidate('lodash', {
          glyphs:    glyphs,
          fontName:  'influicons',
          fontPath:  'infl-fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('./lib'));

      // generate the patternity readme file for icon
      // to be injested by patternlab.
      gulp.src('templates/README.md')
        .pipe(consolidate('lodash', {
          glyphs:    glyphs
        }))
        .pipe(gulp.dest('.'));

      // Generates a file ingested by the Hub. No one else
      // should use this one
      gulp.src('templates/_icon.scss')
        .pipe(consolidate('lodash', {
          glyphs:    glyphs,
          fontName:  'influicons',
          fontPath:  'infl-fonts/',
          className: 'ic'
        }))
        .pipe(gulp.dest('./lib/stylesheets'));
    })
    .pipe(gulp.dest('./lib/fonts'));
});
