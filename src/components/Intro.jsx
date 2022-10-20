import { Box, Button, Flex, Image, ListItem, Spacer, Text, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import rahul from "./rahul.png"
const Intro = () => {

  return (
    <Flex width={["90%","90%","90%","90%","80%"]} direction="column" margin="auto" mt="7%" justifyContent="space-between" alignItems="center" >
    
<Text width={["35%","35%","20%","17%","17%"]} className="m1">About Me</Text>
<br/><br/>
<Text fontSize={['sm','sm','lg','xl','xl']} color="#848588" textAlign="justify">Passionate about coding and eager to work with smart people in a challenging environment. Having exceptional interpersonal skills as well as the ability to produce interactions that organizations and people really care about. Love technology and try to use them smartly to make everyday tasks easier.</Text>
 </Flex>
  )
}

export default Intro