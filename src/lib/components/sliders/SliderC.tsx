import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Center,
} from '@chakra-ui/react'

function SliderC({ percentage = 0, updatePlayerTime, value, max, color }) {
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const rangeRef = useRef()
  const thumbRef = useRef()

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    const thumbWidth = thumbRef.current.getBoundingClientRect().width
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage
    setProgressBarWidth(centerProgressBar)
  }, [percentage])

  return (
    <Center px="1em">
      <Slider
        min={0}
        max={max}
        width={['75px', '95px', '165px', '250px']}
        value={value}
        ref={rangeRef}
        focusThumbOnChange={false}
        onChange={(e) => updatePlayerTime(e)}
      >
        <SliderTrack w={progressBarWidth}>
          <SliderFilledTrack bg={color} />
        </SliderTrack>
        <SliderThumb ref={thumbRef} />
      </Slider>
    </Center>
  )
}

SliderC.propTypes = {
  percentage: PropTypes.number,
  updatePlayerTime: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default SliderC
