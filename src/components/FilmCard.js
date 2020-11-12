import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Button, Image } from "semantic-ui-react";
import RemoveFilmModal from "./RemoveFilmModal";
import FormFilmModal from "./FormFilmModal";
import { removeFilm } from "../actions/index";

const FilmCard = ({
  Poster,
  Title,
  Year,
  Runtime,
  Genre,
  Director,
  imdbID,
}) => {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const deleteFilm = () => {
    dispatch(removeFilm(imdbID));
    setShowDeleteModal(false);
  };

  return (
    <Card>
      <Image src={Poster} alt={Title} wrapped />
      <Card.Content>
        <Card.Header>{Title}</Card.Header>
        <Card.Description>
          <p>Director: {Director}</p>
          <p>Year: {Year}</p>
          <p>Genre: {Genre}</p>
          <p>Runtime: {Runtime}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic onClick={() => setShowDeleteModal(true)} color="red">
            <i className="fas fa-trash" />
          </Button>
          <Button basic onClick={() => setShowEditModal(true)} color="green">
            <i className="fas fa-pencil-alt"></i>
          </Button>
        </div>
      </Card.Content>
      <FormFilmModal
        deleteFilm={deleteFilm}
        setOpen={setShowEditModal}
        open={showEditModal}
        Poster={Poster}
        Title={Title}
        Year={Year}
        Runtime={Runtime}
        Genre={Genre}
        Director={Director}
        imdbID={imdbID}
      />
      <RemoveFilmModal
        deleteFilm={deleteFilm}
        setOpen={setShowDeleteModal}
        open={showDeleteModal}
      />
    </Card>
  );
};

export default FilmCard;
