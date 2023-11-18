import './app.css'
import { Header } from './Components/Header/Header'
import { Body } from './Components/Body/Body'
import { Footer}  from './Components/Footer/Footer'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <>
      <ChakraProvider>
        <Header />
        <Body />
        <Footer />
      </ChakraProvider>
    </>
  )
}
export default App;
