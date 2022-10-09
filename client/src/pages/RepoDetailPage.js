import { useParams, Link } from 'react-router-dom';

import classes from './RepoDetailPage.module.css';

const TestPage = () => {
    const params = useParams();

    return (
        <>
            <Link to='/' className={classes['all-repos']}>
                <p>{`<= Go Back`}</p>
            </Link>
            <div>Repo Detail Page</div>
            <div>{params.repoId}</div>
        </>
    );
};

export default TestPage;