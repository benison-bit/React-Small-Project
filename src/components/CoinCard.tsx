import React from 'react'
import {
    Heading,
    Image,
    Text,
    VStack,
  } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

type Card = {
    name: string,
    img: string,
    id: string,
    symbol: string,
    price: number,
    currencySymbol: any
 }

const CoinCard = (props: Card) => (
    <Link to={`/coin/${props.id}`}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        bgColor={"white"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={props.img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchange"}
        />
        <Heading size={"md"} noOfLines={1}>
          {props.symbol}
        </Heading>
  
        <Text noOfLines={1}>{props.name}</Text>
        <Text noOfLines={1}>{props.price ? `${props.currencySymbol}${props.price}` : "NA"}</Text>
      </VStack>
    </Link>
  );
  
export default CoinCard
