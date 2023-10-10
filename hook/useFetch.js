import {useState, useEffect} from 'react';
import axios from 'axios';
// import {RAPID_API_KEY} from '.env';
// const rapidApiKey=RAPID_API_KEY
const useFetch =(endpoint, query) => {
    const [data, setData] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require('axios');

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
    params: {...query },
    headers: {
        'X-RapidAPI-Key': '5db0b87bbdmsh2cd46f6ead91c78p14ad33jsn911a8390ca5f',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
    };
    const fetchData = async () =>{

        setIsLoading(true);
        try{
            const response = await axios.request
            (options);
            setData(response.data.data);
            setIsLoading(false);
            
        }catch (error){
            setError(error);
            alert('there has been an error')

        }finally{
            setIsLoading(false);
        }
    }
    useEffect(() =>{
        fetchData();
   
    }, []);
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    
    return  {data, isLoading, error, refetch};
    

}
export default useFetch;