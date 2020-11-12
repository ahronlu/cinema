import { EDIT_FILM, FETCH_FILMS, REMOVE_FILM, ADD_FILM } from "../constants";
import _ from "lodash";

export default function (state = {}, action) {
  const { payload, type } = action;
  switch (type) {
    case FETCH_FILMS: {
      return { ...state, ..._.mapKeys(payload, "imdbID") };
    }
    case REMOVE_FILM: {
      return _.omit(state, payload);
    }
    case EDIT_FILM: {
      return { ...state, [payload.imdbID]: payload };
    }
    case ADD_FILM: {
      return { ...state, [payload.imdbID]: payload };
    }
    default:
      return state;
  }
}
