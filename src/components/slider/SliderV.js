import React from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb, ChakraProvider, 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Img
} from '@chakra-ui/react'
import Volume from './volume.svg'

function SliderV({ value, updateGlobalNum }) {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Popover defaultIsOpen='false'>
            <PopoverTrigger>
            <IconButton mt='13px' ml='auto' mr='-25px' h='20px' w='18px' target="_blank" variant="unstyled">
                <Img src={Volume} alt='armenia2' />
            </IconButton>
            </PopoverTrigger>
            <PopoverContent w='40px' mt='10px'>
            <PopoverArrow />
            <PopoverBody>
                <Slider 
                    orientation='vertical' 
                    onChange={updateGlobalNum}
                    minH={32}
                    max={100}
                    min={0}
                    value={value}
                >
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb />
                </Slider>
            </PopoverBody>
            </PopoverContent>
        </Popover>
      </ChakraProvider>
    </React.StrictMode>
  )
}

export default SliderV
