import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
// Chakra-UI
import { Center, ChakraProvider, Heading, Stack } from '@chakra-ui/react'

// Components
import Audio from './lib/ChakraPlayer'

// Music Example
import armeniaSongExample from './assets/music/armenia.mp3'

ReactDOM.render(
  <StrictMode>
    <ChakraProvider cssVarsRoot={undefined}>
      <Center h="100vh">
        <Stack>
          <Heading textAlign="center" size="lg">
            Example Chakra player
          </Heading>
          <Audio
            song={armeniaSongExample}
            color="purple.600"
            background="white.600"
          />
        </Stack>
      </Center>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
)

export default Audio
