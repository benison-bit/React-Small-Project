import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

type LoaderState = {
  state: string
}
const Loader = (props: LoaderState) => {
  return (
    <VStack h={"90vh"} justifyContent={"center"}>
      <Box transform={"scale(3)"} color={props.state? "black" : "white"}>
        <Spinner size={"xl"}/>
      </Box>
    </VStack>
  )
}

export default Loader
