import React from 'react';
import { Menu, Icon } from "semantic-ui-react";

const Header = () => {
    return (
        <Menu>
            <Menu.Item>Cinema</Menu.Item>
            <Menu.Item
                position="right"
                as="a"
                href="https://github.com/koftov"
                target="_blank"
                title="My Github"
            >
                <Icon name="github" />
            </Menu.Item>
        </Menu>
    )
}

export default Header
