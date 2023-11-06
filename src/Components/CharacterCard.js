import React, { useState } from 'react';
import { Box, Text ,Image ,Flex,Button} from '@chakra-ui/react';
import { Link} from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';


const CharacterCard = ({ character, index }) => {
  const characterId = index + 1;
  const characterImage = `/assets/characters/${characterId}.jpg`;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const action = isFavorite ? 'Removed from Favorites' : 'Added to Favorites';
    console.log(`${character.name} ${action}`);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={{base:"4",md:"2"}}
      maxWidth={{ base: '80%', sm: '300px' }}
      cursor="pointer" boxShadow="md" transition="transform 0.2s" _hover={{ transform: 'scale(1.05)' }}
    >
      <Box p={2}>
        <Link to={`/details/${characterId}`}>
          <Image src={characterImage} boxSize='150px' m="auto" alignContent="center" alt={character.name} />
        </Link>

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

        <Flex  justify="space-evenly">
          <Box p={1} style={{ textAlign:'center', color:'transparent', width: "50px" }} >
            <Link to={`/details/${characterId}`}>
            {/* <button >More</button> */}
            <Button >More</Button>
            </Link>
          </Box>
         

          <button type="button" onClick={handleToggleFavorite}>
            <StarIcon w={8} h={5} 
                      color={isFavorite ? 'white' : ' gray'} />
          </button>
        </Flex>
      </Box>
    </Box>
  );
};

export default CharacterCard;
