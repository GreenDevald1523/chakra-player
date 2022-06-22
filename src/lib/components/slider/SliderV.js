import { useState } from 'react'
import PropTypes from 'prop-types'
import { Icon, IconButton, Center } from '@chakra-ui/react'
import { ReactComponent as vol1 } from './vol1.svg'
import { ReactComponent as vol2 } from './vol2.svg'
import { ReactComponent as vol3 } from './vol3.svg'
import { ReactComponent as vol4 } from './vol4.svg'

function SliderV({ updateGlobalNum, color }) {
  const [music, setMusic] = useState(vol3)
  const [count, setCount] = useState(2)

  const handleLoudChange = () => {
    if (count === 0) {
      setMusic(vol2)
      setCount(count + 1)
      updateGlobalNum(33)
    } else if (count === 1) {
      setMusic(vol3)
      setCount(count + 1)
      updateGlobalNum(66)
    } else if (count === 2) {
      setMusic(vol4)
      setCount(count + 1)
      updateGlobalNum(100)
    } else if (count === 3) {
      setMusic(vol1)
      setCount(0)
      updateGlobalNum(0)
    }
  }
  return (
    <IconButton
      boxSize="2em"
      onClick={handleLoudChange}
      variant="unstyled"
      bg="none"
    >
      <Center>
        <Icon color={color} as={music} alt="muz" />
      </Center>
    </IconButton>
  )
}

SliderV.propTypes = {
  updateGlobalNum: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
}

export default SliderV
