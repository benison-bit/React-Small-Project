import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import benison from '../assets/pp.jpg'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whatsapp.700"} minH={"48"} px={"16"} py={["16", "8"]}>

     <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} color="white">About Us</Text>
          <Text fontSize={"sm"} color={"whiteAlpha.900"} letterSpacing={"widest"} textAlign={["center", "left"]}>
            Welcome to the Crypto Application where you can find all the information related 
            to Crypto Coin.
          </Text>
        </VStack>
        <VStack>
            <Avatar src={benison} boxSize={"28"} mt={["4", "0"]}/>
            <Text color={"whiteAlpha.900"}>Benison Muller</Text>
        </VStack>
     </Stack>
    </Box>
  )
}

export default Footer
