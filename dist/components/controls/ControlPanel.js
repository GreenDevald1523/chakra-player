"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.parse-int.js");

var _react = require("@chakra-ui/react");

var _react2 = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ControlPanel(_ref) {
  let {
    duration,
    currentTime
  } = _ref;

  function secondsToHms(seconds) {
    if (!seconds) return '00:00';
    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;
    let min = parseInt(duration / 60);
    duration = duration % 60;
    let sec = parseInt(duration);

    if (sec < 10) {
      sec = "0".concat(sec);
    }

    if (min < 10) {
      min = "0".concat(min);
    }

    if (parseInt(hours, 10) > 0) {
      return "".concat(parseInt(hours, 10), ":").concat(min, ":").concat(sec);
    } else if (min === 0) {
      return "00:".concat(sec);
    } else {
      return "".concat(min, ":").concat(sec);
    }
  }

  return /*#__PURE__*/_react2.default.createElement(_react.Center, {
    minW: "6em"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "md",
    color: "#2B6CB0"
  }, secondsToHms(currentTime), "/"), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "md",
    color: "#2B6CB0"
  }, secondsToHms(duration)));
}

var _default = ControlPanel;
exports.default = _default;