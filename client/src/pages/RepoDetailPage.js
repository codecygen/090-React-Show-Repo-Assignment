import { useParams, Link } from 'react-router-dom';

import useFetch from '../hooks/use-fetch';

import classes from './RepoDetailPage.module.css';

const RepoDetailPage = (props) => {
    const params = useParams();
    const allData = useFetch();
    const { repoId } = params;

    // Filters to match the correct page number with the repo id
    const filteredData = allData.filter(data => data.id === +repoId);
    const pageData = filteredData[0];

    const dataDisplay = allData.length === 0 ?
        (<p>Loading...</p>) :
        (
            <section className={classes['repo-detail']}>
                <Link to='/'>
                    <p>{`<= Go Back`}</p>
                </Link>
                <p><b>Link:</b> {`https://raw.githubusercontent.com/${pageData.full_name}/master/README.md`}</p>
                <p><b>Message:</b> I could not find this section!</p>
                <p><b>Author ID:</b> {pageData.owner.id}</p>
                <p><b>Recent Commit Date:</b> {new Date(pageData.pushed_at).toLocaleDateString('EN-CA')}</p>
            </section>
        );

    return dataDisplay;
};

export default RepoDetailPage;