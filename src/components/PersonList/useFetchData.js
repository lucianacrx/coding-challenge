import { useEffect, useState } from 'react';

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(
            (response) => {
              setLoading(true);
              setData(response);
              console.log(response);
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