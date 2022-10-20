import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
  return (
    <Flex direction="column" height={["23%","23%","20%","20%","20%"]} width="3%" left="1.5%" top={["75%","78%","78%","78%","78%"]} position="fixed" zIndex="2">
        <a href='https://www.linkedin.com/in/rahul-rajeevan/' target="_blank"><Flex justifyContent="center" alignItems="center" borderRadius="50%" height="35px"  width="35px" className="logo"  _hover={{bg: '#22c35e', color:"white",boxShadow:'2xl' }}><span style={{ color: "#ecece5"}}>
        <i class="fa-brands fa-linkedin-in fa-xl"></i></span></Flex></a>
        
        <Spacer/>
        <a href='https://github.com/Rahul-Rajeevan' target="_blank"><Flex justifyContent="center" alignItems="center" borderRadius="50%" height="35px"  width="35px" className="logo" _hover={{bg: '#22c35e', color:"white",boxShadow:'2xl' }}><span style={{ color: "#ecece5"}}>
        <i class="fa-brands fa-github fa-xl"></i></span></Flex></a>
        
        <Spacer/>
        <a href='https://medium.com/@rahul.rajeevan4' target="_blank"><Flex justifyContent="center" alignItems="center" borderRadius="50%" height="35px"  width="35px" className="logo" _hover={{bg: '#22c35e', color:"white",boxShadow:'2xl' }}><span style={{ color: "#ecece5"}}>
        <i class="fa-brands fa-medium fa-lg"></i></span></Flex></a>
    </Flex>
  )
}

export default Sidebar