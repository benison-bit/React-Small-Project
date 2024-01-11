import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import { server } from '../index'
import {
  Container,
  HStack,
} from "@chakra-ui/react";
import Loader from './Loader';
import ErrorComponent  from './ErrorComponent';
import ExchangeCard from './ExchangeCard';

const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
       const fetchExchanges = async () => {
        try{
          const { data } = await axios.get(`${server}/exchanges`);
          setExchanges(data);
          setLoading(false);
        }catch(error){
          setError(true);
          setLoading(false);
        }
       };
       fetchExchanges();
    }, [])

    if(error) return <ErrorComponent message="Error while fetching Details"/>


  return (
    <div className='background'>
   <Container maxW={"container.xl"}>{loading ? <Loader state = "false"/> : <>
   <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i['id']}
                name={i['name']}
                img={i['image']}
                rank={i['trust_score_rank']}
                url={i['url']}
              />
            ))}
          </HStack>
   </> }
   </Container>
    </div>
  )
}

export default Exchanges
