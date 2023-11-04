import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Theme from './Theme';
import Browse from './Components/Browse';


function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Box
        bgImage="url('/assets/bg_logo.jpg')" 
        bgSize="cover"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        w="100%"
        minH="100vh"
       
      >
        <Browse/>
      
      </Box>
    </ChakraProvider>
  );
}

export default App;
