import { combineReducers } from "redux";
import films from "./filmReducer";
import theme from "./themeReducer";

export default combineReducers({
  films,
  theme,
});
