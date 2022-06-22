import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Chakra-UI
import { ChakraProvider } from '@chakra-ui/react'
// import { Audio } from 'chakra-player'
// Components
import Audio from './lib/screens/Root'
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <ChakraProvider>
      <Audio />
    </ChakraProvider>
  </StrictMode>
)

export {Audio}
