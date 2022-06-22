"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@chakra-ui/react");

var _vol = _interopRequireDefault(require("./vol1.svg"));

var _vol2 = _interopRequireDefault(require("./vol2.svg"));

var _vol3 = _interopRequireDefault(require("./vol3.svg"));

var _vol4 = _interopRequireDefault(require("./vol4.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SliderV(_ref) {
  let {
    updateGlobalNum
  } = _ref;
  const [music, setMusic] = (0, _react.useState)(_vol3.default);
  const [count, setCount] = (0, _react.useState)(2);

  const handleLoudChange = e => {
    if (count === 0) {
      setMusic(_vol2.default);
      setCount(count + 1);
      updateGlobalNum(33);
    } else if (count === 1) {
      setMusic(_vol3.default);
      setCount(count + 1);
      updateGlobalNum(66);
    } else if (count === 2) {
      setMusic(_vol4.default);
      setCount(count + 1);
      updateGlobalNum(100);
    } else if (count === 3) {
      setMusic(_vol.default);
      setCount(0);
      updateGlobalNum(0);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react2.IconButton, {
    boxSize: "2em",
    onClick: handleLoudChange,
    variant: "unstyled",
    bg: "none"
  }, /*#__PURE__*/_react.default.createElement(_react2.Center, null, /*#__PURE__*/_react.default.createElement(_react2.Img, {
    src: music,
    alt: "muz"
  })));
}

var _default = SliderV;
exports.default = _default;