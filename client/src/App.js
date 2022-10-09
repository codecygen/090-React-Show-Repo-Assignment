import { Route, Routes } from 'react-router-dom';

import AllReposPage from './pages/AllReposPage';
import RepoDetailPage from './pages/RepoDetailPage';

import useFetch from './hooks/use-fetch';

import classes from './App.module.css';

const App = () => {
  const backendData = useFetch();

  return (
    <main className={classes.main}>
      <Routes>
        {/* Main Page, http://localhost:3000/ */}
        <Route
          path='/'
          element={<AllReposPage allData={backendData} />}
        />

        {/* Main Page, http://localhost:3000/repoId */}
        <Route
          path='/:repoId'
          element={<RepoDetailPage />}
        />
      </Routes>
    </main>
  );
};

export default App;