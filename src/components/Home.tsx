import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react';
import btcSrc from '../assets/btc.png'
import {motion} from "framer-motion"

const Home = () => {
  return (
   <Box bgImage={"https://c4.wallpaperflare.com/wallpaper/403/467/730/technology-bitcoin-coin-money-wallpaper-preview.jpg"} w={"full"} h={"85vh"}>
    <motion.div
      style={{
        height: "80vh"
      }}
      animate={{
        translateY: "20px"
      }}
      transition={{
        duration:2,
        repeat: Infinity,
        repeatType: "reverse"
      }}>

    <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} filter={"grayscale(1)"}/>

    </motion.div>
    <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"white"} mt={"-20"}>XCrypto</Text>
   </Box> 
  )
}

export default Home
