import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Icon } from "semantic-ui-react";
import { TOGGLE_DARK_MODE } from "../constants";

const Header = () => {
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.theme);

  return (
    <Menu inverted={darkMode}>
      <Menu.Item>Cinema</Menu.Item>
      <Menu.Item title="Dark/Light Mode">
        <Icon
          name={darkMode ? "sun" : "moon"}
          onClick={() => dispatch({ type: TOGGLE_DARK_MODE })}
        />
      </Menu.Item>
      <Menu.Item
        position="right"
        as="a"
        href="https://github.com/ahronlu"
        target="_blank"
        title="My Github"
      >
        <Icon name="github" />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
