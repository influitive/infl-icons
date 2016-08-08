/* This is a generated file */
import React from 'react';
import { render } from 'react-dom';
import { Icon } from '../src';

render(
  <div>
    <Icon icon='stage-profile'/>
<% _.each(glyphs, function(glyph) {

  if (glyph.name != '500donotdeletethis') {
  %>
    <Icon icon='<%= glyph.name %>'/>
<%
  }
});
%>
  </div>,
  document.getElementById('app')
);

