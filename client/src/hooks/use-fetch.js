import { useEffect, useState } from 'react';

const useFetch = () => {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
      fetch('/repos')
        .then(res => res.json())
        .then(data => setBackendData(data))
        .catch(err => console.log(err.message))
      ;
    }, []);

    console.log(backendData);

    return backendData;
};

export default useFetch;