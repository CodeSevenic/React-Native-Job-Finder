import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      query: 'Python developer in Texas, USA',
      page: '1',
      num_pages: '1',
    },
    headers: {
      'X-RapidAPI-Key': '1b2ee0f0b3msh96c8ac769d777a4p113f51jsn0d8ab4fad76d',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };
};
