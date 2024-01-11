import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import { server } from '../index'
import {
    Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import Loader from './Loader';
import ErrorComponent  from './ErrorComponent';
import CoinCard from './CoinCard';



const Coins = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setpage] = useState(1);
    const [currency, setCurrency] = useState("inr")

    const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const changePage = (page: any) => {
        setpage(page);
        setLoading(true);
    }

    const pageBtns = new Array(132).fill(1);

    useEffect(() => {
       const fetchCoins = async () => {
        try{
          const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
          setCoins(data);
          setLoading(false);
        }catch(error){
          setError(true);
          setLoading(false);
        }
       };
       fetchCoins();
    }, [currency, page])

    if(error) return <ErrorComponent message="Error while fetching coins"/>


  return (
    <div className='background-coins'>
   <Container maxW={"container.xl"}>{loading ? <Loader state = "false" /> : <>

   <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
    <HStack spacing={"4"} color={"white"} fontWeight={"bold"}>
        <Radio value={"inr"}>INR</Radio>
        <Radio value={"usd"}>USD</Radio>
        <Radio value={"eur"}>EUR</Radio>
    </HStack>
   </RadioGroup>

   <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i['id']}
                key={i['id']}
                name={i['name']}
                img={i['image']}
                price={i['current_price']}
                symbol={i['symbol']}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={"full"} overflow={"auto"} p={"8"}>
            {
                pageBtns.map((items, index) => (
                    <Button 
                    key={index}
                    bgColor={"white"} 
                    color={'black'} 
                    onClick={() => changePage(index + 1)}>
                        {index+1}</Button>
                ))
            }
          </HStack>
   </> }
   </Container>
    </div>
  )
}


export default Coins

