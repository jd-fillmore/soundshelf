import { useState, useEffect } from "react";
import axios from "axios";

const AlbumList = () => {
  const [data, setData] = useState<any[]>([]);

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
    <div className="App">
      {data.map(({ album_image, album_name, band_name, genre, status, year_listened }) => (
        <>
          <img src={album_image} alt={album_name} />
          <h2>{band_name}</h2>
          <p>
            {album_name} | {genre}
          </p>
          <em>
            {status} | {year_listened}
          </em>
        </>
      ))}
    </div>
  );
};

export default AlbumList;
