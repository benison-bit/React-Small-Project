import { Badge, Box, Container, Image, Progress, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../App.css'
import { server } from '../index'
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import ErrorComponent  from './ErrorComponent';
import {
  Button,
HStack,
Radio,
RadioGroup,
} from "@chakra-ui/react";
import Chart from './Chart';

const CoinDetails = () => {

  const [coin, setCoin] = useState(Object);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setdays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =
  currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key: any) => {
     switch(key){
      case "24h":
        setdays("24h");
        setLoading(true);
        break;
      case "7d":
        setdays("7d");
        setLoading(true);
        break;
      case "14d":
        setdays("14d");
        setLoading(true);
        break;
      case "30d":
        setdays("30d");
        setLoading(true);
        break;
      case "60d":
        setdays("60d");
        setLoading(true);
        break;
      case "200d":
        setdays("200d");
        setLoading(true);
        break;
      case "1y":
        setdays("365d");
        setLoading(true);
        break;
      case "max":
        setdays("max");
        setLoading(true);
        break;
      default: 
        setdays("24h");
        setLoading(true);
       break;
     }
  };
  const params = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
     try{
       const { data } = await axios.get(`${server}/coins/${params.id}`);
       
       const { data: chartData} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
     console.log(chartData)
       setCoin(data);
       setChartArray(chartData.prices)
       setLoading(false);
     }catch(error){
       setError(true);
       setLoading(false);
     }
    };
    fetchCoin();
 }, [params.id, currency, days])

 if(error) return <ErrorComponent message="Error while fetching coin"/>

  return (
 
    <Container maxW={"container.xl"}>
      {
        loading?<Loader state="true" /> : (
          <>

          <Box width={"full"} borderWidth={1}> 
              <Chart arr={chartArray} currency={currencySymbol} days={days}/>
          </Box>

          <HStack p={"4"} overflowX={"auto"}>
             {
              btns.map((i) => (
                <Button key={i} onClick={() => switchChartStats(i)}>{i}</Button>
              ))
             }
          </HStack>

       <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
         <HStack spacing={"4"} color={"black"} fontWeight={"bold"}>
           <Radio value={"inr"}>INR</Radio>
           <Radio value={"usd"}>USD</Radio>
           <Radio value={"eur"}>EUR</Radio>
        </HStack>
       </RadioGroup>

          <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
          <Text fontSize={"small"} alignSelf="center" opacity={0.7}>
              Last Updated On{" "}
              { Date()}
            </Text>

          <Image 
             src={coin['image']['large']}
             w={"16"}
             h={"16"}
             objectFit={"contain"}
             />

          <Stat>
            <StatLabel>{coin['name']}</StatLabel>
            <StatNumber>
              { currencySymbol }
              { coin['market_data']['current_price'][currency]}
            </StatNumber>

            <StatHelpText>
              <StatArrow 
                 type={
                   coin['market_data']['price_change_percentage_24h'] > 0 ? 'increase' : 'decrease'
                  }
                  />
              { coin['market_data']['price_change_percentage_24h'] }%
            </StatHelpText>
          </Stat>

          <Badge fontSize={'2xl'} bgColor={"blackAlpha.800"} color={"white"}>
            { `#${coin['market_cap_rank']}`}
          </Badge>

          <CustomBar 
            high={`${currencySymbol}${coin['market_data']['high_24h'][currency]}`}
            low={`${currencySymbol}${coin['market_data']['low_24h'][currency]}`}
            />
          <Box fontWeight={"bold"} w={"full"} p="4">
            <Item title='Max Supply' value={coin['market_data']['max_supply']} />
            <Item title='Circulating Supply' value={coin['market_data']['circulating_supply']} />
            <Item title='Market Cap' value={`${currencySymbol}${coin['market_data']['market_cap'][currency]}`} />
            <Item title='All Time Low' value={`${currencySymbol}${coin['market_data']['atl'][currency]}`} />
            <Item title='All Time High' value={`${currencySymbol}${coin['market_data']['ath'][currency]}`} />
          </Box>
        </VStack>
          </>
        )
      }
    </Container>
  )
}

type CustomBarModel = {
  high: string
  low: string
}

type ItemModel = {
  title: string
  value: string
}

 const Item = (props: ItemModel) => (
    <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
      <Text fontFamily={"sans-serif"} letterSpacing={"widest"}>
        {props.title}
      </Text>
      <Text>{props.value}</Text>
    </HStack>
 )

 const CustomBar = (props: CustomBarModel) => (
   <VStack w={"full"}>
     <Progress value={50} colorScheme="teal" w={"full"} />
     <HStack justifyContent={"space-between"} w={"full"}>
       <Badge children={props.low} colorScheme={"red"}/>
       <Text fontSize={"sm"}>24H Range</Text>
       <Badge children={props.high} colorScheme={"green"}/>
     </HStack>
   </VStack>
 );

export default CoinDetails
