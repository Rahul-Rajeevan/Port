import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "./ani.gif"
const Anim = () => {
  return (
    <Box h="100%" w="100%" position="fixed" backgroundColor="black" zIndex="3">
        <Image src={logo} m="auto" w={["30%","27%","23%","13%","13%"]} mt="230px"/>
    </Box>
  )
}

export default Anim