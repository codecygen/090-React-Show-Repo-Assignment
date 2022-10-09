import { useEffect, useState } from 'react';

const App = () => {

  useEffect(() => {
    fetch('/repos')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err.message))
    ;
  }, []);

  return (
    <div>Some Info</div>
  );
};

export default App;