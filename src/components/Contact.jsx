import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./navbar.module.css"
import phone from "./phone.png"
import spark from "./spark.png"
import twitter from "./twitter.png"
import mail from "./mail.png"
import { transform } from 'framer-motion'
const Contact = () => {
  return (
        <Flex h={["300px","300px","400px","400px","400px"]} className="dark" direction="column" alignItems="center" justifyContent="space-evenly">
            <Box><text className="m">Contact Me</text></Box>
            <Flex gap="1rem" _hover={{transform: "scale(1.1)",transition: "all .3s ease",cursor:"pointer"}} >
             <span style={{ color: "white"}}><i class="fa-solid fa-phone fa-lg"></i></span>
            <Text fontSize={['xs','sm','md','md','lg']}  as="b" color="white">9633809015</Text>
            </Flex>
            <Flex gap="1rem" _hover={{transform: "scale(1.1)",transition: "all .3s ease",cursor:"pointer"}}>
            <span style={{ color: "white"}}><i class="fa-solid fa-envelope fa-lg"></i></span>
            <Text fontSize={['xs','sm','md','md','lg']} as="b" color="white">rahul.rajeevan4@gmail.com</Text>
            </Flex>
            <Flex gap="1rem" _hover={{transform: "scale(1.1)",transition: "all .3s ease",cursor:"pointer"}}>
            <span style={{ color: "white"}}><i class="fa-brands fa-linkedin-in fa-lg"></i></span>
            <Text fontSize={['xs','sm','md','md','lg']} as="b" color="white">rahul-rajeevan</Text>
            </Flex>
        </Flex>
  )
}

export default Contact