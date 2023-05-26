import {Box} from "@chakra-ui/react";

export default function Layout(props) {
    return <>
        <Box bg='tomato' w='100%' p={4} color='white'>
            Header
        </Box>
        {props.children}
        <Box bg='black' w='100%' p={4} color='white'>
            Footer
        </Box>
    </>
}
