import { Box, Button, CircularProgress, CircularProgressLabel, Flex, Grid, GridItem, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import chakra from "./chakraui.png"
import post from "./postman.png"
import react1 from "./react1.svg"
import mongo from "./mongodb.svg"
import node1 from "./node.svg"
import mongoo from "./mongoose.png"
import express from "./express.svg"
const Skills = () => {
    const arr=[{img:"https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg",name:"HTML"},{img:"https://chiranjeev-thapliyal.vercel.app/svg/css3.svg",name:"CSS"},{img:"https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg",name:"JAVASCRIPT"},{img:react1,name:"REACT"},{img:mongo,name:"MONGODB"},{img:"https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",name:"REDUX"},{img:node1,name:"NODE JS"},{img:"https://chiranjeev-thapliyal.vercel.app/svg/git.svg",name:"GIT"},{img:chakra,name:"CHAKRA UI"},{img:post,name:"POSTMAN "},{img:mongoo,name:"MONGOOSE"},{img:express,name:"EXPRESS"}]
    const arr1=[{img:"https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg",name:"HTML"},{img:"https://chiranjeev-thapliyal.vercel.app/svg/css3.svg",name:"CSS"},{img:"https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg",name:"JAVASCRIPT"},{img:react1,name:"REACT"},{img:"https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",name:"REDUX"},{img:chakra,name:"CHAKRA UI"}]
    const arr2=[{img:mongo,name:"MONGODB"},{img:"https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",name:"REDUX"},{img:node1,name:"NODE JS"},{img:post,name:"POSTMAN "},{img:mongoo,name:"MONGOOSE"},{img:express,name:"EXPRESS"}]
    const [array, setArray] = useState(1)
    return (
    <Flex direction="column" alignItems="center">
      <br/><br/><br/>
      <Text width={["45%","45%","25%","17%","12%"]} className="m1">Technical Skills</Text>
        <br/><br/>
        <Flex width={["60%","40%","35%","26%","20%"]} margin="auto">
        <Button onClick={()=>setArray(1)} borderRadius="0px" border="0px" _hover={{borderBottom:"3px solid #e11d48",fontWeight:"750"}} variant='outline'>All</Button>
        <Spacer/>
        <Button onClick={()=>setArray(2)} borderRadius="0px" border="0px" _hover={{borderBottom:"3px solid #e11d48",fontWeight:"750"}} variant='outline'>Frontend</Button>
        <Spacer/>
        <Button onClick={()=>setArray(3)} borderRadius="0px" border="0px" _hover={{borderBottom:"3px solid #e11d48",fontWeight:"750"}} variant='outline'>Backend</Button>
        </Flex>
        <br/><br/>
        <Grid templateColumns={['repeat(3, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)','repeat(6, 1fr)']} gap={[4,4,12,12,12]} width="75%" margin="auto">
            {array===1&&arr.map((e)=>(
                <GridItem key={e.name} w={['100','100','150','150','150']} h={['100','100','150','150','150']} bgGradient='linear-gradient(180deg, hsla(0, 0%, 100%, 1) 0%, hsla(207, 100%, 86%, 1) 73%, hsla(0, 0%, 100%, 1) 100%)' borderRadius="10px" pt="5%" _hover={{transition: "transform .2s linear", bg: 'white',boxShadow:'2xl',transform: "scale(1.03)" }}>
                    <Flex justifyContent="center" alignItems="center" direction="column">
                    <Image height={["60px","60px","80px","80px","80px"]} width={["60px","60px","80px","80px","80px"]} src={e.img} alt=""/>
                    <Text as="b" fontSize={['sm','sm','md','md','md']}>{e.name}</Text>
                    </Flex>
                </GridItem>
            ))}
            {array===2&&arr1.map((e)=>(
                <GridItem key={e.name} w={['100','100','150','150','150']} h={['100','100','150','150','150']} bgGradient='linear-gradient(180deg, hsla(0, 0%, 100%, 1) 0%, hsla(207, 100%, 86%, 1) 73%, hsla(0, 0%, 100%, 1) 100%)' borderRadius="10px" pt="5%" _hover={{transition: "transform .2s linear", bg: 'white',boxShadow:'2xl',transform: "scale(1.03)" }}>
                    <Flex justifyContent="center" alignItems="center" direction="column">
                    <Image height={["60px","60px","80px","80px","80px"]} width={["60px","60px","80px","80px","80px"]} src={e.img} alt=""/>
                    <Text as="b" fontSize={['sm','sm','md','md','md']}>{e.name}</Text>
                    </Flex>
                </GridItem>
            ))}
            {array===3&&arr2.map((e)=>(
                <GridItem key={e.name} w={['100','100','150','150','150']} h={['100','100','150','150','150']} bgGradient='linear-gradient(180deg, hsla(0, 0%, 100%, 1) 0%, hsla(207, 100%, 86%, 1) 73%, hsla(0, 0%, 100%, 1) 100%)' borderRadius="10px" pt="5%" _hover={{transition: "transform .2s linear", bg: 'white',boxShadow:'2xl',transform: "scale(1.03)" }}>
                    <Flex justifyContent="center" alignItems="center" direction="column">
                    <Image height={["60px","60px","80px","80px","80px"]} width={["60px","60px","80px","80px","80px"]} src={e.img} alt=""/>
                    <Text as="b" fontSize={['sm','sm','md','md','md']}>{e.name}</Text>
                    </Flex>
                </GridItem>
            ))}
</Grid>
<br/><br/><br/>
<Flex height={["55vh","55vh","40vh","35vh","35vh"]} justifyContent="space-between" display={["none","none","flex","flex","flex"]} w={["0%","0%","60%","40%","40%"]} gap={["0px","0px","35px","60px","60px"]} margin="auto">
      <Flex direction="column" alignItems="center">
      <CircularProgress value={80} size="100%" color='#48917d' thickness='5px'>
      <CircularProgressLabel fontSize="20px" as="b" color='#48917d'>80%</CircularProgressLabel>
      </CircularProgress>  
      <Text as="b">Coding Skills</Text> 
      </Flex>  
      <Flex direction="column" alignItems="center">
      <CircularProgress value={75} size="100%" color='#48917d' thickness='5px'>
      <CircularProgressLabel fontSize="20px" as="b" color='#48917d'>75%</CircularProgressLabel>
      </CircularProgress>
      <Text as="b">DSA</Text>
      </Flex>
      <Flex direction="column" alignItems="center">
      <CircularProgress value={90} size="100%" color='#48917d' thickness='5px'>
      <CircularProgressLabel fontSize="20px" as="b" color='#48917d'>90%</CircularProgressLabel>
      </CircularProgress>
      <Text as="b" >Communication Skills</Text>
      </Flex>
      
      </Flex>
      
      </Flex>
  )
}

export default Skills