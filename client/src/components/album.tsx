import { FC } from "react";
import { AlbumData } from "../types/types";

interface AlbumProps {
  data: AlbumData[];
}

const Album: FC<AlbumProps> = ({ data }) => {
  return (
    <>
      {data.map(({ album_image, album_name, band_name, genre, status, year_listened }) => (
        <div key={`${album_name}-${band_name}`}>
          <img src={album_image} alt={album_name} />
          <h2>{band_name}</h2>
          <p>
            {album_name} | {genre}
          </p>
          <em>
            {status} | {year_listened}
          </em>
        </div>
      ))}
    </>
  );
};

export default Album;
