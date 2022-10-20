import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const RightSide = ({scroll1,zero}) => {
  return (
    <Box zIndex="2" height="5%" width="3%" left={["90%","93%","94%","94.5%"]} top="92%" position="fixed" onClick={()=>scroll1(zero)}>
   
    <Flex justifyContent="center" alignItems="center" borderRadius="50%" height="35px"  width="35px" className="logo" _hover={{bg: '#22c35e', color:"white",boxShadow:'2xl' }}><span style={{ color: "#ecece5"}}>
    <i class="fa-solid fa-up-long fa-lg"></i></span></Flex>
    </Box>
  )
}

export default RightSide