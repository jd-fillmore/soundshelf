import { FC } from "react";
import { Container, Flex, Card, Button } from "@chakra-ui/react";
import { AlbumData } from "../types/types";

interface AlbumProps {
  data: AlbumData[];
}

const Album: FC<AlbumProps> = ({ data }) => {
  return (
    <>
      <Container maxW="1440px">
        <Flex direction="row" flexWrap="wrap">
          {data.map(({ id, album_image, album_name, band_name, genre, status, year_listened }) => (
            <Flex key={id} width={{ base: "100%", md: "50%", lg: "33.33%" }}>
              <Card key={id}>
                <img src={album_image} alt={album_name} />
                <h2>{band_name}</h2>
                <p>
                  {album_name} | {genre}
                </p>
                <em>
                  {status} | {year_listened}
                </em>
                <Button colorScheme="yellow">Edit</Button>
                <Button colorScheme="red">Delete</Button>
              </Card>
            </Flex>
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default Album;
