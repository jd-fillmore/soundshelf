import { Heading, Flex, Box, Container } from "@chakra-ui/react";
import AddAlbum from "../inputAlbum";

const Nav = () => {
  return (
    <>
      <Container>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ md: "space-between" }}
          align={{ base: "center", md: "flex-start" }}
        >
          <Box mr={{ md: "4" }}>
            <Heading>SoundShelf</Heading>
          </Box>
          <Box mt={{ base: "4", md: "0" }}>
            <AddAlbum />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Nav;
