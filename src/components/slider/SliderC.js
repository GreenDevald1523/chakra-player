import React, { useState, useRef, useEffect} from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb, ChakraProvider, Box
} from '@chakra-ui/react'

function SliderC({ percentage = 0,  updatePlayerTime, value, max }) {
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const rangeRef = useRef()
  const thumbRef = useRef()
  
  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width
    const thumbWidth = thumbRef.current.getBoundingClientRect().width
    const centerProgressBar = thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
    setProgressBarWidth(centerProgressBar)
  }, [percentage])

  return (
    <React.StrictMode>
      <ChakraProvider>
        <Box mt='17px' ml='15px'>
          <Slider 
              min={0}
              max={max}
              width={[
                '75px', 
                '95px', 
                '165px', 
                '250px', 
              ]}
              value={value}
              ref={rangeRef}
              focusThumbOnChange={false}
              onChange={(e) => updatePlayerTime(e)}>
            <SliderTrack
              w={progressBarWidth} 
            >
              <SliderFilledTrack/>
            </SliderTrack>
            <SliderThumb
              ref={thumbRef}
            />
          </Slider>
        </Box>
      </ChakraProvider>
    </React.StrictMode>
  )
}

export default SliderC
