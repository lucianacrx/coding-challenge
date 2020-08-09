import { useEffect, useState } from 'react';

const useFetchData = (url, query = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${url}${query}`)
      .then(response => response.json())
      .then(
        (response) => {
          setLoading(true);
          setData(response);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      )
    }, []);
  return { data, loading, error };
};

export default useFetchData;