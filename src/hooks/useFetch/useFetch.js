import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setDataFetch({
        loading: false,
        error: null,
        data,
      });
    } catch (error) {
      setDataFetch({
        loading: false,
        error,
        data: null,
      });
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return dataFetch;
};

export default useFetch;
