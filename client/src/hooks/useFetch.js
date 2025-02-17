import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          setData([]);
          const res = await axios.get(url);
          setData(res.data);
        } catch (err) {
          setError(err.message);
        }
        setLoading(false);
      };
      fetchData();
    }, [url]);

    const reFetch = async () => {
      setLoading(true);
      try {
        setData([]);
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    return { data, loading, error, reFetch };
};

export default useFetch;
