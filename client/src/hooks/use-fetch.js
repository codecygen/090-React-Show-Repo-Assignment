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

    // Sorting the data so that latest will show up first.
    const dateSortedData = backendData.sort(
      (a, b) => a.created_at > b.created_at ? -1 : 1
    );

    return dateSortedData;
};

export default useFetch;