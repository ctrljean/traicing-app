import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";

export default function Home() {
    return <Menu>
        <MenuButton>
            Actions
        </MenuButton>
        <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
    </Menu>
}
