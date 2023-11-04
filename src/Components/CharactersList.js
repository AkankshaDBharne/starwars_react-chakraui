import { Button, Text, VStack, HStack, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 8;
  const totalCharacters = 82;

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const fetchCharacters = (page) => {
    if (page <= Math.ceil(totalCharacters / charactersPerPage)) {
      fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((data) => data.json())
        .then((json) => {
          setCharacters([...characters, ...json.results]);
        })
        .catch((error) => console.error('Error', error));
    }
  };

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  const LastCharacter = currentPage * charactersPerPage;
  const FirstCharacter = LastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(FirstCharacter, LastCharacter);

  return (
    <VStack p={4} m={2} color="white" w="100%">
      <Text pb={3} fontSize={{ base: '24px', md: '28px' }} textAlign="center">
        Star War Characters
      </Text>

      <SimpleGrid  columns={{ base: 1, md: 4 }}
        spacing={4}
        w="100%"
        justifyContent="center">
        {currentCharacters.map((character, index) => (
          <CharacterCard key={character.name} character={character} index={index} />
        ))}
      </SimpleGrid>

      <HStack spacing={4} mt={4} w="100%" justify="center">
        <Button
          onClick={() => handlePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>
        <Button
          onClick={() => handlePage(currentPage + 1)}
          disabled={LastCharacter >= totalCharacters}
        >
          Next Page
        </Button>
      </HStack>
    </VStack>
  );
};

export default CharactersList;
