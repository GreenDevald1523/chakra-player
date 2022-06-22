import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Chakra-UI
import { Center, ChakraProvider, Heading, Stack } from '@chakra-ui/react'

// Components
import Audio from './lib/screens/Root'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <ChakraProvider>
      <Center h="100vh">
        <Stack>
          <Heading textAlign="center" size="lg">
            Example Chakra player
          </Heading>
          <Audio color="purple.600" />
        </Stack>
      </Center>
    </ChakraProvider>
  </StrictMode>
)

export default Audio
