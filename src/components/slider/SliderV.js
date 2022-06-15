import React, {useState} from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Img,
} from '@chakra-ui/react'
import vol1 from './vol1.svg'
import vol2 from './vol2.svg'
import vol3 from './vol3.svg'
import vol4 from './vol4.svg'

function SliderV() {
  const [music, setMusic] = useState(vol1)
  const [count, setCount] = useState(0)

  const handleLoudChange = () => {
    if (count === 0) {
      setMusic(vol2)
      setCount(count+1)

    }
    else if (count === 1) {
      setMusic(vol3)
      setCount(count+1)
    }
    else if (count === 2) {
      setMusic(vol4)
      setCount(count+1)
    }
    else if (count === 3) {
      setMusic(vol1)
      setCount(0)
    }
  }
  return (
    <Popover defaultIsOpen={false}>
      <PopoverTrigger>
        <IconButton
          mt="13px"
          ml="auto"
          mr="-25px"
          h="20px"
          w="18px"
          target="_blank"
          variant="unstyled"
        >
          <Img src={Volume} alt="armenia2" />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent w="40px" mt="10px">
        <PopoverArrow />
        <PopoverBody>
          <Slider
            orientation="vertical"
            onChange={updateGlobalNum}
            minH={32}
            max={100}
            min={0}
            value={value}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default SliderV
