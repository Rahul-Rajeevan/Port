import { Box, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Curve = () => {
  return (
    <Flex width={["90%","80%","80%","70%","70%"]} height="100px" margin="auto" mt="-3%" boxShadow='lg' borderRadius="50px" backgroundColor="white" alignItems="center" justifyContent="space-around" display={["none","flex","flex","flex","flex"]}>
        <Flex  width="18%" height="50%" justifyContent="space-around">
        {/* <Box borderRadius="50%" padding="5% 7.5% 2% 7.5%" backgroundColor="#22c35e"><span style={{ color: "white"}}><i class="fa-solid fa-award fa-xl"></i></span></Box> */}
        <Flex justifyContent="center" alignItems="center" borderRadius="50%" height="40px"  width="40px" className="logo1" _hover={{bg: '#22c35e', color:"white",boxShadow:'2xl' }}><span style={{ color: "#ecece5"}}>
        <i class="fa-solid fa-award fa-xl"></i></span></Flex>
        <Box>
          <Text as='b'>4 Major</Text>
          <Text color="#48917d">Projects</Text>
        </Box>
        </Flex>
        <Divider orientation='vertical' height="70%" />
        <Flex width={["25%","25%","25%","18%","18%"]} height="50%" justifyContent="space-around">
        <Flex justifyContent="center" alignItems="center" borderRadius="50%" height="40px"  width="40px" className="logo1" _hover={{bg: '#22c35e', color:"white",boxShadow:'2xl' }}><span style={{ color: "#ecece5"}}>
        <i class="fa-solid fa-briefcase fa-xl"></i></span></Flex>
        {/* <Box borderRadius="50%" padding="5% 6.5% 2% 6.5%" backgroundColor="#22c35e"><span style={{ color: "white"}}><i class="fa-solid fa-briefcase fa-xl"></i></span></Box> */}
        <Box>
          <Text as='b'>2 Years Job</Text>
          <Text color="#48917d">Experience</Text>
        </Box>
        </Flex>
        <Divider orientation='vertical' />
        <Flex width="18%" height="50%" justifyContent="space-around">
        {/* <Box borderRadius="50%" padding="5% 5.5% 2% 5.5%" backgroundColor="#22c35e"><span style={{ color: "white"}}><i class="fa-solid fa-trophy fa-xl"></i></span></Box> */}
        <Flex justifyContent="center" alignItems="center" borderRadius="50%" height="40px"  width="40px" className="logo1" _hover={{bg: '#22c35e', color:"white",boxShadow:'2xl' }}><span style={{ color: "#ecece5"}}>
        <i class="fa-solid fa-trophy fa-xl"></i></span></Flex>
        <Box>
          <Text as='b'>1st Prize</Text>
          <Text color="#48917d">Project</Text>
        </Box>
        </Flex>
        
        
    </Flex>
  )
}

export default Curve