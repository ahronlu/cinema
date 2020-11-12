import axios from "axios";
import { EDIT_FILM, FETCH_FILMS, REMOVE_FILM, ADD_FILM } from "../constants";
import { apiKey, baseUrl } from "../config";

export const fetchFilms = () => {
  const filmTitle = "war";

  return async (dispatch) => {
    const response = (
      await axios(`${baseUrl}/?s=${filmTitle}&apikey=${apiKey}`)
    ).data.Search;
    const promisesArray = response.map((film) =>
      axios(`${baseUrl}/?t=${film.Title}&apikey=${apiKey}`)
    );
    const values = (await Promise.all(promisesArray)).map(
      (value) => value.data
    );
    dispatch({
      type: FETCH_FILMS,
      payload: values,
    });
  };
};

export const removeFilm = (id) => {
  return {
    type: REMOVE_FILM,
    payload: id,
  };
};

export const editFilm = (film) => {
  return {
    type: EDIT_FILM,
    payload: film,
  };
};

export const addFilm = (film) => {
  return {
    type: ADD_FILM,
    payload: film,
  };
};
