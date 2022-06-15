import React, {useState} from 'react'
import {
  ChakraProvider, 
  Img,
  IconButton,
  Flex
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
    <React.StrictMode>
      <ChakraProvider>
        <Flex alignItems='center' justifyContent='center' h='57px' w='50px'>
          <IconButton h='30px' w='20px' onClick={handleLoudChange} variant="unstyled" bg='none'>
            <Img src={music} alt='muz'/>
          </IconButton>
        </Flex>
      </ChakraProvider>
    </React.StrictMode>
  )
}

export default SliderV
