import { useEffect, useState } from 'react';

const App = () => {
  // const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch('/repos')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err.message))
    ;
  }, []);

  // console.log(backendData);

  // const dataComponent = (typeof backendData.users === 'undefined') ?
  //   (<p>Loading...</p>) :
  //   (backendData.users.map((user, i) => (<p key={i}>{user}</p>)));

  return (
    // <div>{dataComponent}</div>
    <div>Some Info</div>
  );
};

export default App;