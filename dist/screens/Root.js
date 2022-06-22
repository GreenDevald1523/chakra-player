"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Audio;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.number.to-fixed.js");

var _react = require("@chakra-ui/react");

var _react2 = _interopRequireWildcard(require("react"));

var _armenia = _interopRequireDefault(require("../img/armenia.mp3"));

var _speed = _interopRequireDefault(require("../img/speed.svg"));

var _on = _interopRequireDefault(require("../img/on.svg"));

var _off = _interopRequireDefault(require("../img/off.svg"));

var _ControlPanel = _interopRequireDefault(require("../components/controls/ControlPanel"));

var _SliderC = _interopRequireDefault(require("../components/slider/SliderC"));

var _SliderV = _interopRequireDefault(require("../components/slider/SliderV"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Audio() {
  const [btn, setBtn] = (0, _react2.useState)('on');
  const [percentage, setPercentage] = (0, _react2.useState)(0);
  const [isPlaying, setIsPlaying] = (0, _react2.useState)(false);
  const [duration, setDuration] = (0, _react2.useState)(0);
  const [currentTime, setCurrentTime] = (0, _react2.useState)(0);
  const [volume, setVolume] = (0, _react2.useState)(50);
  const [flag, setFlag] = (0, _react2.useState)(true);
  const audioRef = (0, _react2.useRef)();

  const handleChange = () => {
    const audio = audioRef.current;

    if (flag) {
      audio.volume = 0.66;
      setFlag(false);
    }

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
      setBtn('of');
    } else {
      setIsPlaying(false);
      audio.pause();
      setBtn('on');
    }
  };

  const handleVolume = e => {
    setVolume(e.currentTarget.volume * 100);
  };

  const setPlayerCurrentTime = time => {
    if (audioRef.current !== undefined) audioRef.current.currentTime = time;
  };

  const setPlayerVolume = sound => {
    if (audioRef.current !== undefined) audioRef.current.volume = sound / 100;
  };

  const handleMetaUpdate = e => {
    const percent = (e.currentTarget.currentTime / e.currentTarget.duration * 100).toFixed(2);
    setPercentage(+percent);
    setCurrentTime(e.currentTarget.currentTime);
    setDuration(e.currentTarget.duration);
  };

  return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement("audio", {
    onTimeUpdate: handleMetaUpdate,
    onLoadedMetadata: handleMetaUpdate,
    onVolumeChange: handleVolume,
    ref: audioRef,
    src: _armenia.default
  }), /*#__PURE__*/_react2.default.createElement(_react.Center, {
    p: 5
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    px: "2em",
    py: "1em",
    borderRadius: 20,
    bg: "white",
    boxShadow: "0px 0 5px grey"
  }, /*#__PURE__*/_react2.default.createElement(_react.IconButton, {
    boxSize: "2em",
    target: "_blank",
    onClick: handleChange,
    variant: "unstyled"
  }, /*#__PURE__*/_react2.default.createElement(_react.Img, {
    src: btn === 'of' ? _on.default : _off.default,
    alt: "armenia"
  })), /*#__PURE__*/_react2.default.createElement(_ControlPanel.default, {
    duration: duration,
    currentTime: currentTime
  }), /*#__PURE__*/_react2.default.createElement(_SliderC.default, {
    percentage: percentage,
    max: duration || 1,
    updatePlayerTime: setPlayerCurrentTime,
    value: currentTime
  }), /*#__PURE__*/_react2.default.createElement(_SliderV.default, {
    updateGlobalNum: setPlayerVolume
  }), /*#__PURE__*/_react2.default.createElement(_react.Menu, null, /*#__PURE__*/_react2.default.createElement(_react.MenuButton, {
    boxSize: "2em",
    pos: "relative"
  }, /*#__PURE__*/_react2.default.createElement(_react.Img, {
    src: _speed.default,
    alt: "armenia2"
  })), /*#__PURE__*/_react2.default.createElement(_react.MenuList, {
    minWidth: "40px"
  }, /*#__PURE__*/_react2.default.createElement(_react.MenuOptionGroup, {
    defaultValue: "1"
  }, /*#__PURE__*/_react2.default.createElement(_react.MenuItemOption, {
    value: "0.25",
    onClick: () => audioRef.current.playbackRate = 0.25
  }, "0.25x"), /*#__PURE__*/_react2.default.createElement(_react.MenuItemOption, {
    value: "0.5",
    onClick: () => audioRef.current.playbackRate = 0.5
  }, "0.5x"), /*#__PURE__*/_react2.default.createElement(_react.MenuItemOption, {
    value: "1",
    onClick: () => audioRef.current.playbackRate = 1
  }, "1.0x"), /*#__PURE__*/_react2.default.createElement(_react.MenuItemOption, {
    value: "1.5",
    onClick: () => audioRef.current.playbackRate = 1.5
  }, "1.5x"), /*#__PURE__*/_react2.default.createElement(_react.MenuItemOption, {
    value: "2",
    onClick: () => audioRef.current.playbackRate = 2
  }, "2.0x")))))));
}