'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _styles = require('../lib/styles.css');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      flex = _ref.flex;
  return _react2.default.createElement('span', { className: (0, _classnames3.default)(_styles2.default.icon, _styles2.default[icon], _defineProperty({}, '' + _styles2.default.flex, flex)) });
};

Icon.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  flex: _propTypes2.default.bool
};

exports.Icon = Icon;