import { useEffect, useState } from 'react';

const useFetch = (link) => {
    const [mdData, setMdData] = useState();

    useEffect(() => {
      fetch(link)
        .then(res => res.text())
        .then(text => setMdData(text))
        .catch(err => console.log(err.message))
      ;
    }, [link]);

    

    return mdData;
};

export default useFetch;