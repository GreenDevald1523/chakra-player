import PropTypes from 'prop-types'
import { IconButton, Center, Icon } from '@chakra-ui/react'

// Icons
import { ReactComponent as pauseB } from '../../img/on.svg'
import { ReactComponent as playB } from '../../img/off.svg'

export default function PlayPause({ handleChange, color, btn }) {
  return (
    <IconButton
      boxSize="2em"
      target="_blank"
      onClick={handleChange}
      variant="unstyled"
    >
      <Center>
        <Icon color={color} as={btn === 'of' ? pauseB : playB} alt="armenia" />
      </Center>
    </IconButton>
  )
}

PlayPause.propTypes = {
  handleChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  btn: PropTypes.element.isRequired,
}
