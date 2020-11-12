import { TOGGLE_DARK_MODE } from "../constants";

export default function (state = {}, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE: {
      return { ...state, darkMode: !state.darkMode };
    }

    default:
      return state;
  }
}
