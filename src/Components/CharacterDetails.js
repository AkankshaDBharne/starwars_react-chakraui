import { Box,Text,ListItem, UnorderedList, Icon, Flex, Button, Input, Image } from '@chakra-ui/react';
import  {  useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCharacterDetails from '../Hooks/useCharacterDetails';
import{FaCar,FaSpaceShuttle} from 'react-icons/fa';
import Header from './Header';

const CharacterDetails = () => {
    const { id } = useParams();
    const[search,setSearch]=useState(id || '');
    const { character, films, vehicles, starships } = useCharacterDetails(id);
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/details/${search}`);
    };

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
      <div>
        <Header/>
        <Box m="auto" p={4} >
               <Flex marginRight={60} marginLeft={60}  alignContent={{ base: 'center', md: 'flex-start' }} 
                     display={{ base: 'none', md: 'flex' }}
                     textColor="white">
                    <Input
                        size="sm" 
                        width={{ base: '100%', md: '800px' }}
                        placeholder="Enter ID to get Character details"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button
                        size="sm" 
                        ml={{ base: '0', md: 6 }}
                        mt={{ base: 2, md: 0 }}
                        onClick={handleSearch}
                    >
                        Search By Id
                    </Button>
                </Flex>

        {search ? (
          character ? ( 
           <Box borderWidth="1px" bg="black" bgOpacity={0.8} borderRadius="lg" overflow="hidden" p={2} m={{base:'0',md:'20'}} alignContent={"center"}  textColor={"white"}>
             <Box ml={6}>
                <Text  mt={2} fontSize={{ base: '24px', md: '28px' }} pb={2} color="white" textAlign="center">
                    {character.name}
                </Text>

                <Flex  m="auto" p={4}>
                    <Flex direction="column">
                        <Image src={`/assets/characters/${id}.jpg`} boxSize={{base:'200px',md:'220px'}} m="auto" alignContent="center" alt={character.name} />
                    </Flex>
                    <Box fontSize={{ base: '16px', md: '18px' }} ml={{base:'8',md:'16'}}>
                        <Text>Height: {character.height}</Text>
                        <Text>Mass: {character.mass}</Text>
                        <Text>Birth Year: {character.birth_year}</Text>
                        <Text>Gender: {character.gender}</Text>
                        <Text> Hair_Color: {character.hair_color}</Text>
                        <Text>Skin_Color:{character.skin_color}</Text>     
                        <Text>Eye_Color: {character.eye_color}</Text>
                    </Box>
                </Flex>
             </Box>

                <Text mt={6} ml={6} fontSize={{ base: '20px', md: '22px' }}> 
                   Appeared in Films:</Text>

                    <Flex flexWrap="wrap" m={4} mt={0}>
                        {films.map((film, index) => (
                            <Box display="flex" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={4} maxW="md" 
                                key={index}>
                                <Box p={2}>
                                <Text fontSize={18} alignItems={'center'} fontWeight="bold">{film.title}</Text>
                                <Text pt={4}>Release_Date: {film.release_date}</Text>
                                <Text >Director:{film.director}</Text>
                                <Text>Producer:
                                    <UnorderedList pl={6}>
                                        {film.producer.split(', ').map((producer, index) => (
                                            <ListItem key={index}>{producer}</ListItem>
                                        ))}
                                    </UnorderedList>
                                </Text>
                            
                                </Box>
                            </Box>
                            ))}
                    </Flex>
                    
                    {vehicles && vehicles.length > 0 && (
                        <div>
                            <Text mt={2} ml={6} fontSize={{ base: '20px', md: '22px' }}> 
                               <Icon as={FaCar} w={4} mr={2} /> Vehicles:</Text>
                            <Flex flexWrap="wrap" m={4} mt={0}>
                                {vehicles.map((vehicle, index) => (
                                    <Box display="flex" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={4} maxW="md"
                                        key={index}>
                                        <Box p={2}>
                                            <Text fontSize={18} alignItems={'center'} fontWeight="bold">{vehicle.name}</Text>
                                            <Text pt={4}>Model: {vehicle.model}</Text>
                                            <Text >Manufacturer:{vehicle.manufacturer}</Text>
                                            <Text >Max_Atmosphering_Speed:{vehicle.max_atmosphering_speed}</Text>
                                        </Box>
                                    </Box>
                                ))}
                            </Flex>
                        </div>
                    )}


                    {starships && starships.length > 0 && (
                        <div>
                            <Text mt={2} ml={6} fontSize={{ base: '20px', md: '22px' }}><Icon as={FaSpaceShuttle} w={4} mr={2} /> Starships:</Text>
                            <Flex flexWrap="wrap" m={4} mt={0}>
                                {starships.map((starship, index) => (
                                    <Box display="flex" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={4} maxW="md"
                                        key={index}>
                                        <Box p={2}>
                                            <Text fontSize={18} alignItems={'center'} fontWeight="bold">{starship.name}</Text>
                                            <Text pt={4}>Model: {starship.model}</Text>
                                            <Text >Manufacturer:{starship.manufacturer}</Text>
                                            <Text >Max_Atmosphering_Speed:{starship.max_atmosphering_speed}</Text>
                                        </Box>
                                    </Box>
                                ))}
                            </Flex>
                        </div>
                    )}
                    </Box>
                  ) : (
                    <Text
                      pb={3}
                      m={10}
                      fontSize={{ base: '24px', md: '28px' }}
                      textAlign="center"
                      textColor="white"
                    >
                      Loading...!!!
                    </Text>
                  )
                ) : null}
              </Box>
      </div>
    );
};

export default CharacterDetails;
