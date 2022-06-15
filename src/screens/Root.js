import {
  Flex,
  IconButton,
  Img,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Center,
} from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import song from '../img/armenia.mp3';
import Speed from '../img/speed.svg';
import pauseB from '../img/on.svg';
import playB from '../img/off.svg';
import ControlPanel from '../components/controls/ControlPanel';
import SliderC from '../components/slider/SliderC';
import SliderV from '../components/slider/SliderV';

export default function Audio() {
  const [btn, setBtn] = useState('on');
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(50);
  const [flag, setFlag] = useState(true);
  const audioRef = useRef();
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
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    setPercentage(+percent);
    setCurrentTime(e.currentTarget.currentTime);
    setDuration(e.currentTarget.duration);
  };

  return (
    <>
      {/* Компонент плеера */}
      <audio
        onTimeUpdate={handleMetaUpdate}
        onLoadedMetadata={handleMetaUpdate}
        onVolumeChange={handleVolume}
        ref={audioRef}
        src={song}
      ></audio>
      {/* UI плеера */}
      <Center
        h="100vh"
        w="100vw"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
      >
        <Flex
          px="2em"
          py="1em"
          borderRadius={20}
          bg="white"
          boxShadow="0px 0 5px grey"
        >
          <IconButton
            boxSize="2em"
            target="_blank"
            onClick={handleChange}
            variant="unstyled"
          >
            <Img src={btn === 'of' ? pauseB : playB} alt="armenia" />
          </IconButton>
          <ControlPanel duration={duration} currentTime={currentTime} />
          <SliderC
            percentage={percentage}
            max={duration || 1}
            updatePlayerTime={setPlayerCurrentTime}
            value={currentTime}
          />
          <SliderV updateGlobalNum={setPlayerVolume} />
          <Menu>
            <MenuButton boxSize="2em" pos="relative">
              <Img src={Speed} alt="armenia2" />
            </MenuButton>
            <MenuList minWidth="40px">
              <MenuOptionGroup defaultValue="1">
                <MenuItemOption
                  value="0.25"
                  onClick={() => (audioRef.current.playbackRate = 0.25)}
                >
                  0.25x
                </MenuItemOption>
                <MenuItemOption
                  value="0.5"
                  onClick={() => (audioRef.current.playbackRate = 0.5)}
                >
                  0.5x
                </MenuItemOption>
                <MenuItemOption
                  value="1"
                  onClick={() => (audioRef.current.playbackRate = 1)}
                >
                  1.0x
                </MenuItemOption>
                <MenuItemOption
                  value="1.5"
                  onClick={() => (audioRef.current.playbackRate = 1.5)}
                >
                  1.5x
                </MenuItemOption>
                <MenuItemOption
                  value="2"
                  onClick={() => (audioRef.current.playbackRate = 2)}
                >
                  2.0x
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Center>
    </>
  );
}
