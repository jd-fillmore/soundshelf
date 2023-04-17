import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Album from "./album";

const AlbumList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => axios.get("http://localhost:3000/album").then((res) => res.data.data),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred.";

  return (
    <>
      <Album data={data} />
    </>
  );
};

export default AlbumList;
