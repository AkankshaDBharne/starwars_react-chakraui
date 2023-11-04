import { Box, Flex, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'

const Header = () => {

  return (
   <Flex align="center" justify="space-between" p={4}  bg="rgba(0, 0, 0, 0.7)" color="white" >
     <Box>
        <Image src="/assets/logo.jpg" alt="logo" p={4}  boxSize="100px"/>
     </Box>
     <Box>
        <Link href="/" p={4} fontSize={{ base: '16px', md: '2xl' }} textDecoration="none" _hover={{ textDecoration: 'none' }}>
          Home
        </Link>

        <Link href={`/details/character`} p={4} fontSize={{ base: '16px', md: '2xl' }} textDecoration="none" _hover={{ textDecoration: 'none' }}>
          Characters
        </Link>
     </Box>
     
   </Flex>
   
  )
}

export default Header
