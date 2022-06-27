/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Center,
  Icon,
} from '@chakra-ui/react'

// Icons
import { ReactComponent as speed } from '../../assets/imgs/speed.svg'

export default function PlaySpeed({ audioRef, color }) {
  return (
    <Menu>
      <MenuButton boxSize="2em" pos="relative">
        <Center>
          <Icon color={color} as={speed} alt="armenia2" />
        </Center>
      </MenuButton>
      <MenuList minWidth="40px">
        <MenuOptionGroup defaultValue="1">
          <MenuItemOption
            value="0.25"
            onClick={() => {
              audioRef.current.playbackRate = 0.25
            }}
          >
            0.25x
          </MenuItemOption>
          <MenuItemOption
            value="0.5"
            onClick={() => {
              audioRef.current.playbackRate = 0.5
            }}
          >
            0.5x
          </MenuItemOption>
          <MenuItemOption
            value="1"
            onClick={() => {
              audioRef.current.playbackRate = 1
            }}
          >
            1.0x
          </MenuItemOption>
          <MenuItemOption
            value="1.5"
            onClick={() => {
              audioRef.current.playbackRate = 1.5
            }}
          >
            1.5x
          </MenuItemOption>
          <MenuItemOption
            value="2"
            onClick={() => {
              audioRef.current.playbackRate = 2
            }}
          >
            2.0x
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

PlaySpeed.propTypes = {
  audioRef: PropTypes.shape({
    current: PropTypes.shape({
      playbackRate: PropTypes.number,
    }),
  }).isRequired,
  color: PropTypes.string.isRequired,
}
