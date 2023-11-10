import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
};
