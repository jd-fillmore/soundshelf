import { Heading, Flex, Box, Container } from "@chakra-ui/react";
import AddAlbum from "../inputAlbum";

const Nav = () => {
  return (
    <>
      <Box bg="#D4A373" padding="20px">
        <Container maxW="1140px">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" alignItems={"center"}>
            <Box>
              <Heading color="#fff">SoundShelf</Heading>
              <p style={{ color: "#f5f5f5" }}>Manage your music.</p>
            </Box>
            <Box>
              <AddAlbum />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Nav;
