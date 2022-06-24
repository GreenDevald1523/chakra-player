import PropTypes from 'prop-types'
import { Flex, Center } from '@chakra-ui/react'
import { useState, useRef } from 'react'

// Components
import ControlPanel from './components/controls/ControlPanel'
import SliderC from './components/sliders/SliderC'
import SliderV from './components/sliders/SliderV'
import PlayPause from './components/controls/PlayPause'
import PlaySpeed from './components/controls/PlaySpeed'

// eslint-disable-next-line react/require-default-props
export default function Audio({ song, color = 'blue.600' }) {
  const [btn, setBtn] = useState('on')
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [flag, setFlag] = useState(true)
  const audioRef = useRef()
  const handleChange = () => {
    const audio = audioRef.current
    if (flag) {
      audio.volume = 0.66
      setFlag(false)
    }
    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
      setBtn('of')
    } else {
      setIsPlaying(false)
      audio.pause()
      setBtn('on')
    }
  }

  const setPlayerCurrentTime = (time) => {
    if (audioRef.current !== undefined) audioRef.current.currentTime = time
  }

  const setPlayerVolume = (sound) => {
    if (audioRef.current !== undefined) audioRef.current.volume = sound / 100
  }

  const handleMetaUpdate = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2)
    setPercentage(+percent)
    setCurrentTime(e.currentTarget.currentTime)
    setDuration(e.currentTarget.duration)
  }

  return (
    <>
      {/* Компонент плеера */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        onTimeUpdate={handleMetaUpdate}
        onLoadedMetadata={handleMetaUpdate}
        ref={audioRef}
        src={song}
      />
      {/* UI плеера */}
      <Center w="100%">
        <Flex px="2em" py="1em" borderRadius={20} bg="white" w="100%">
          <PlayPause handleChange={handleChange} color={color} btn={btn} />
          <ControlPanel
            color={color}
            duration={duration}
            currentTime={currentTime}
          />
          <SliderC
            color={color}
            percentage={percentage}
            max={duration || 1}
            updatePlayerTime={setPlayerCurrentTime}
            value={currentTime}
          />
          <SliderV color={color} updateGlobalNum={setPlayerVolume} />
          <PlaySpeed audioRef={audioRef} color={color} />
        </Flex>
      </Center>
    </>
  )
}

Audio.propTypes = {
  song: PropTypes.string,
  color: PropTypes.string,
}
