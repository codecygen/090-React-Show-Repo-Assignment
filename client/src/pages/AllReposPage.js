import { useState } from 'react';
import { Link } from 'react-router-dom';

import RepoCart from "../components/RepoCart";
import FilterDropdown from '../components/FilterDropdown';

import { useEffect } from 'react';
import classes from './AllReposPage.module.css';

const AllRepos = (props) => {
    const { allData } = props;
    const [languageFilteredData, setLanguageFilteredData] = useState(allData);

    useEffect(() => {
        setLanguageFilteredData(allData);
    }, [allData]);

    // Function is used to hoist filter option
    // from FilterDropdown component!
    const filterHandler = (selectedLanguage) => {

        if (selectedLanguage !== 'All') {
            const filteredData = allData.filter(data => data.language === selectedLanguage);
            setLanguageFilteredData(filteredData);
            return;
        }

        setLanguageFilteredData(allData);
    };

    const allRepoCarts = languageFilteredData.map(data => (
        <Link to={`/${data.id}`} key={data.id} className={classes['all-repos']}>
            <RepoCart
                name={data.name}
                description={data.description}
                language={data.language}
                forks={data.forks_count}
                date={data.created_at}
            />
        </Link>
    ));

    const repoDisplay = allData.length === 0 ?
        (<p>Loading...</p>) :
        (allRepoCarts);

    return (
        <section>
            <FilterDropdown filter={filterHandler} />
            {repoDisplay}
        </section>
    );
};

export default AllRepos;