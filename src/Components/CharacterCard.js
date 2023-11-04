import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link} from 'react-router-dom';

const CharacterCard = ({ character,index }) => {
  const characterId = index + 1;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2} 
         maxWidth={{ base: '100%', sm: '300px' }}
         cursor="pointer" boxShadow="md" transition="transform 0.2s"  _hover={{ transform: 'scale(1.05)' }}    
    >
      <Box p={2}>
        <Text pb={3} mt={1} fontSize={{ base: '18px', md: '20px' }} color="white" textAlign="center">{character.name}</Text>
        
        <Text fontSize={{ base: '14px', md: '16px' }}>
          Height: {character.height}
        </Text>

        <Text fontSize={{ base: '14px', md: '16px' }}>
          Mass: {character.mass}
        </Text>

        <Text fontSize={{ base: '14px', md: '16px' }}>
          Gender: {character.gender}
        </Text>

        <Text pb={4} fontSize={{ base: '14px', md: '16px' }}>
          Birth Year: {character.birth_year}
        </Text>

        <div pt={2} style={{ display: 'flex', justifyContent: 'center', border:'1px solid',width:"50px" }}>
            <Link to={`/details/${characterId}`}>
                <button>More</button>
            </Link>
         </div>
      </Box>
    </Box>
  );
};

export default CharacterCard;
