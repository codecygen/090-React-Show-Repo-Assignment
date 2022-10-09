import AllRepos from './components/AllRepos';
import useFetch from './hooks/use-fetch';

import classes from './App.module.css';

const App = () => {
  const backendData = useFetch();

  return (
    <main className={classes.main}>
      <AllRepos allData={backendData} />
    </main>
  );
};

export default App;