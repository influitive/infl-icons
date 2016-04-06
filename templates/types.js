'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = [<%= glyphs.filter(function (glyph) {
        return glyph.name !== '500donotdeletethis';
      }).map( function(glyph) {
      return "{ name: \'" + glyph.name + "\'}"
      })
    %>]
