import { useState, ChangeEvent } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Box,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  album_image: string;
  band_name: string;
  album_name: string;
  genre: GenreEnum;
  status: StatusEnum;
  yearListened: string;
}

enum GenreEnum {
  POPPUNK = "Pop-Punk",
  RAP = "Rap",
  METAL = "Metal",
  INDIE = "Indie",
  ALTROCK = "Alternative Rock",
  OTHER = "Other",
}

enum StatusEnum {
  WILL_LISTEN = "Will Listen",
  LISTENING = "Listening",
  LISTENED = "Listened",
}

const genreOptions = ["Pop-Punk", "Rap", "Metal", "Indie", "Alternative Rock", "Other"];
const statusOptions = ["Will Listen", "Currently Listening", "Listened To"];

const AddAlbum = () => {
  const [newAlbum, setNewAlbum] = useState<Inputs>({
    album_image: "",
    band_name: "",
    album_name: "",
    genre: GenreEnum.POPPUNK,
    status: StatusEnum.WILL_LISTEN,
    yearListened: "",
  });

  const changeHandler = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewAlbum((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axios.post("http://localhost:3000/album", data);
      setNewAlbum({
        album_image: "",
        band_name: "",
        album_name: "",
        genre: GenreEnum[genreOptions[0] as keyof typeof GenreEnum],
        status: StatusEnum[statusOptions[0] as keyof typeof StatusEnum],
        yearListened: "",
      });
      // onClose();
      window.location.assign("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button bg="#CCD5AE" color="#333" onClick={onOpen}>
        Add Album
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Album</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Link to album image"
                {...register("album_image", { required: true })}
                value={newAlbum.album_image}
                onChange={changeHandler}
              />
              {errors.album_image && <span>Album image is required</span>}
              <Input
                placeholder="Band name"
                mt={4}
                {...register("band_name", { required: true })}
                value={newAlbum.band_name}
                onChange={changeHandler}
              />
              {errors.band_name && <span>Band name is required</span>}
              <Input
                placeholder="Album name"
                mt={4}
                {...register("album_name", { required: true })}
                value={newAlbum.album_name}
                onChange={changeHandler}
              />
              {errors.album_name && <span>Album name is required</span>}
              <Select mt={4} {...register("genre", { required: true })} value={newAlbum.genre} onChange={changeHandler}>
                {errors.genre && <span>Genre is required</span>}
                {Object.values(GenreEnum).map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </Select>
              {errors.genre && <span>Genre is required</span>}
              <Select
                mt={4}
                {...register("status", { required: true })}
                value={newAlbum.status}
                onChange={changeHandler}
              >
                {Object.values(StatusEnum).map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </Select>
              {errors.status && <span>Status is required</span>}
              <Input
                type="number"
                min="1900"
                max="2099"
                placeholder="Year listened"
                mt={4}
                {...register("yearListened", { required: true })}
                value={newAlbum.yearListened}
                onChange={changeHandler}
              />
              {errors.yearListened && <span>Year listened is required</span>}
              <Box w="100%" color="white">
                This is the Box
              </Box>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
              <Button type="submit" colorScheme="blue" mr={3}>
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddAlbum;
