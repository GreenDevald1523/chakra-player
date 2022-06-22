import { Center, Text } from '@chakra-ui/react';
import React from 'react';

function ControlPanel({ duration, currentTime }) {
  function secondsToHms(seconds) {
    if (!seconds) return '00:00';

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}:${min}:${sec}`;
    } else if (min === 0) {
      return `00:${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }

  return (
    <Center minW="6em">
      <Text fontSize="md" color="#2B6CB0">
        {secondsToHms(currentTime)}/
      </Text>
      <Text fontSize="md" color="#2B6CB0">
        {secondsToHms(duration)}
      </Text>
    </Center>
  );
}
export default ControlPanel;
