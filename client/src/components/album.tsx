import React, { FC } from "react";
import { Container, Flex, Card, Heading, Box, Text } from "@chakra-ui/react";
import { AlbumData } from "../types/types";
import DeleteAlbum from "./deleteAlbum";
import EditAlbum from "./editAlbum";

interface AlbumProps {
  data: AlbumData[];
}

const Album: React.FC<AlbumProps> = ({ data }) => {
  return (
    <>
      <Container maxW="1140px">
        <Flex direction="row" flexWrap="wrap">
          {/* If there's results in the array, return them.
          If no results, return error message */}
          {data.length > 0
            ? data.map(({ id, album_image, album_name, band_name, genre, status, year_listened }) => (
                <Flex key={id} width={{ base: "100%", md: "50%", lg: "33.33%" }}>
                  <Card key={id} margin="10px">
                    <img src={album_image} alt={album_name} />
                    <Box padding="20px">
                      <Flex justifyContent="space-between">
                        <Heading as="h2" size="lg" mb={2} fontSize="18px">
                          {band_name}
                        </Heading>
                        <Text fontSize="14px">{album_name}</Text>
                      </Flex>
                      {genre} | {status} in {year_listened}
                      <br />
                      <Box marginTop="20px">
                        <EditAlbum id={id} data={data} />
                        <DeleteAlbum id={id} />
                      </Box>
                    </Box>
                  </Card>
                </Flex>
              ))
            : "No matches. Please try again."}
        </Flex>
      </Container>
    </>
  );
};

export default Album;
