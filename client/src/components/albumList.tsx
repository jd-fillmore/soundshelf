import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Container, Flex, Select, Input, Button, Box } from "@chakra-ui/react";
import axios from "axios";

import Album from "./album";
import { AlbumData } from "../types/types";

const AlbumList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // Load data
  const {
    isLoading,
    error,
    data = [],
  } = useQuery<AlbumData[]>({
    queryKey: ["repoData"],
    queryFn: () => axios.get("http://localhost:3000/album").then((res) => res.data.data),
  });

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred.</>;

  const filteredData = data?.filter((album) => {
    const isGenreMatched = selectedGenre === "" || selectedGenre === "Genre" || album.genre === selectedGenre;
    const isStatusMatched = selectedStatus === "" || selectedStatus === "Status" || album.status === selectedStatus;
    const isSearchMatched =
      searchQuery === "" ||
      album.band_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.album_name.toLowerCase().includes(searchQuery.toLowerCase());

    return isGenreMatched && isStatusMatched && isSearchMatched;
  });

  console.log(selectedGenre);
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedGenre("Genre");
    setSelectedStatus("Status");
  };

  return (
    <>
      <Container maxW="1140px">
        <Box paddingTop="20px" paddingBottom="20px">
          <Input
            borderRadius="25px"
            bg="#f5f5f5"
            type="text"
            placeholder="Search a musical act or album name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>

        <Box paddingBottom="20px">
          <Flex direction="row" justify="space-between">
            <Flex>
              <Select
                borderRadius="25px"
                placeholder="Genre"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                onBlur={(e) => {
                  if (e.target.value === "Genre") {
                    setSelectedGenre("Genre");
                  }
                }}
                marginRight={{ base: "10px", md: "10px", lg: "10px" }}
              >
                <option value="Pop-Punk">Pop-Punk</option>
                <option value="Rap">Rap</option>
                <option value="Metal">Metal</option>
                <option value="Indie">Indie</option>
                <option value="Alternative Rock">Alternative Rock</option>
              </Select>

              <Select
                borderRadius="25px"
                placeholder="Status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                marginRight={{ base: "10px", md: "10px", lg: "10px" }}
              >
                <option value="Listened">Listened</option>
                <option value="Listening">Listening</option>
                <option value="Will Listen">Will Listen</option>
              </Select>
              <Button width="150px" borderRadius="25px" onClick={() => clearFilters()}>
                Clear
              </Button>
            </Flex>
            <p>Total products: {filteredData.length}</p>
          </Flex>
        </Box>
      </Container>

      <Album data={filteredData} />
    </>
  );
};

export default AlbumList;
