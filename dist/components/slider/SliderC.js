"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@chakra-ui/react");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SliderC(_ref) {
  let {
    percentage = 0,
    updatePlayerTime,
    value,
    max
  } = _ref;
  const [progressBarWidth, setProgressBarWidth] = (0, _react.useState)(0);
  const rangeRef = (0, _react.useRef)();
  const thumbRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerProgressBar = thumbWidth + rangeWidth / 100 * percentage - thumbWidth / 100 * percentage;
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);
  return /*#__PURE__*/_react.default.createElement(_react2.Center, {
    px: "1em"
  }, /*#__PURE__*/_react.default.createElement(_react2.Slider, {
    min: 0,
    max: max,
    width: ['75px', '95px', '165px', '250px'],
    value: value,
    ref: rangeRef,
    focusThumbOnChange: false,
    onChange: e => updatePlayerTime(e)
  }, /*#__PURE__*/_react.default.createElement(_react2.SliderTrack, {
    w: progressBarWidth
  }, /*#__PURE__*/_react.default.createElement(_react2.SliderFilledTrack, null)), /*#__PURE__*/_react.default.createElement(_react2.SliderThumb, {
    ref: thumbRef
  })));
}

var _default = SliderC;
exports.default = _default;