import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
const Calender = () => {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
  return (
    <Flex alignItems="center" direction="column" height={["55vh","55vh","75vh","35vh","35vh"]}>
        <Text className="m1" width={["60%","60%","30%","16%","16%"]}>GitHub Calender</Text>
 <Flex direction={["column","column","column","row","row"]} w="60%" gap={["2rem","2rem","","",""]} justifyContent="space-between" m="auto">
    <GitHubCalendar 
username="rahul-rajeevan" 
transformData={selectLastHalfYear} 
hideTotalCount 
hideColorLegend
/>
<Image w={["100%","100%","90%","40%","40%"]} src="https://activity-graph.herokuapp.com/graph?username=rahul-rajeevan&theme=vue" alt=""/>
</Flex>
    </Flex>
   
  )
}

export default Calender