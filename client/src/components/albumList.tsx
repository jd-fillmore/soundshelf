import { useState, useEffect } from "react";
import axios from "axios";

import { AlbumData } from "../types/types";
import Album from "./album";

const AlbumList = () => {
  const [data, setData] = useState<AlbumData[]>([]);

  const fetchData = async () => {
    const url = "http://localhost:3000/album";
    try {
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Album data={data} />
    </>
  );
};

export default AlbumList;
