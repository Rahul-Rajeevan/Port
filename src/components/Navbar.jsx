import { Box, Button, color, Flex, Image, Spacer, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import MovingComponent from 'react-moving-text'
import resume from "./Rahul-Rajeevan_Resume.pdf"
import logo from "./strikelogo.svg"
// import logo from "./ani.gif"
const Navbar = ({scroll1,first,second,third,fourth,top,zero}) => {

  
  const toast = useToast()
  return (
    <Box className='navbox' position="sticky" top="0" zIndex="2" >
    <Flex alignItems="center" justifyContent="end" width="97%" margin="auto" >
      <Image src={logo} w={["15%","15%","7%","6%","4%"]} onClick={()=>scroll1(zero)} cursor="pointer"/>
        <Spacer/>
        <Flex width={["80%","70%","60%","50%","32%"]} justifyContent="space-between" >
        <Text cursor="pointer" fontSize={['xs','sm','md','md','lg']}  variant='link' borderBottom="3px solid black" fontWeight="bold" _hover={{color:"white",borderBottom:"3px solid #e11d48"}}  onClick={()=>scroll1(first)}>About</Text>
        <a href={resume} 
          onClick={() =>
            toast({
              title: 'Download',
              description: "Rahul's resume is being downloaded",
              status: 'success',
              duration: 5000,
              isClosable: true,
            })
          }
          download="Rahul_Rajeevan_Resume" style={{textDecoration:"none"}}><Text borderBottom="3px solid black" _hover={{color:"white",borderBottom:"3px solid #e11d48"}} fontSize={['xs','sm','md','md','lg']}  variant='link' fontWeight="bold">Resume</Text></a>
        <Text cursor="pointer" fontSize={['xs','sm','md','md','lg']} borderBottom="3px solid black" _hover={{color:"white",borderBottom:"3px solid #e11d48"}} variant='link' fontWeight="bold" onClick={()=>scroll1(second)}>Projects</Text>
        <Text cursor="pointer" fontSize={['xs','sm','md','md','lg']} borderBottom="3px solid black" _hover={{color:"white",borderBottom:"3px solid #e11d48"}}  variant='link' fontWeight="bold" onClick={()=>scroll1(third)}>Skills</Text>
        <Text cursor="pointer" fontSize={['xs','sm','md','md','lg']} borderBottom="3px solid black" _hover={{color:"white",borderBottom:"3px solid #e11d48"}} variant='link' fontWeight="bold" onClick={()=>scroll1(fourth)}>Contact</Text>
        </Flex>
    </Flex>
    </Box>
  )
}

export default Navbar