import { Link } from 'react-router-dom';

import RepoCart from "../components/RepoCart";

import classes from './AllReposPage.module.css';

const AllRepos = (props) => {
    const { allData } = props;

    const allRepoCarts = allData.map(data => (
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
            <p>Filtering</p>
            {repoDisplay}
        </section>
    );
};

export default AllRepos;