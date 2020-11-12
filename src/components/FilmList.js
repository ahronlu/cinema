import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { Container, Card, Icon } from "semantic-ui-react";
import FilmCard from "./FilmCard";
import FormFilmModal from "./FormFilmModal";
import { fetchFilms } from "../actions";
import removeSpecialChars from "../helpers/removeSpecialChars";

const DEFAULT_FILM_POSTER =
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1728&q=80";

const FilmList = () => {
  const dispatch = useDispatch();
  const [showNewFilmModal, setShowNewFilmModal] = useState(false);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  const films = useSelector((state) => state.films);

  return (
    <>
      <Card.Group stackable as={Container} itemsPerRow={5}>
        {_.map(films, (film) => {
          const {
            Poster,
            Title,
            imdbID,
            Year,
            Director,
            Genre,
            Runtime,
          } = film;
          return (
            <FilmCard
              key={imdbID}
              Poster={Poster}
              Title={_.startCase(_.toLower(removeSpecialChars(Title)))}
              Year={Year}
              Director={Director}
              Runtime={Runtime}
              Genre={Genre}
              imdbID={imdbID}
            />
          );
        })}
      </Card.Group>
      <Icon
        link
        size="massive"
        onClick={() => setShowNewFilmModal(true)}
        name="add circle"
        title="Add new film"
      />
      <FormFilmModal
        open={showNewFilmModal}
        setOpen={setShowNewFilmModal}
        Poster={DEFAULT_FILM_POSTER}
      />
    </>
  );
};

export default FilmList;
