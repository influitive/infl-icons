'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('../lib/styles.css');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var icon = _ref.icon;
  return _react2.default.createElement('span', { className: (0, _classnames2.default)(_styles2.default.icon, _styles2.default[icon]) });
};

Icon.propTypes = {
  icon: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string
};

Icon.defaultProps = {
  className: ''
};

exports.Icon = Icon;