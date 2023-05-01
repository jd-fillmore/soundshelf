import { FC, useState } from "react";
import { Button, Link } from "@chakra-ui/react";
import axios from "axios";

interface AlbumProps {
  id: number;
}

const DeleteAlbum: FC<AlbumProps> = ({ id }) => {
  const [album, setAlbum] = useState<any[]>([]);

  const deleteAlbum = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/album/${id}`);
      setAlbum(album.filter((i) => i.id !== id));
      window.location.assign("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link onClick={() => deleteAlbum(id)} color="red">
        Delete
      </Link>
    </>
  );
};

export default DeleteAlbum;
