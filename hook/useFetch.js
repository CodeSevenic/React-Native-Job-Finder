import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '72b7496431msh2aabc405862408fp12c17ajsnbb9ea9c2ca1e',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setData(response.data.data);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refresh };
};

export default useFetch;
