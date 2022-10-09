import { useParams } from 'react-router-dom';

import useFetch from '../hooks/use-fetch';

import RepoDetail from '../components/RepoDetail';

const RepoDetailPage = (props) => {
    const allData = useFetch();
    const params = useParams();
    const { repoId } = params;

    // Filters to match the correct page number with the repo id
    const filteredData = allData.filter(data => data.id === +repoId);
    const pageData = filteredData[0];

    const dataDisplay = allData.length === 0 ?
        (<p>Loading...</p>) :
        (
            <RepoDetail
                link={`https://raw.githubusercontent.com/${pageData.full_name}/master/README.md`} 
                author={pageData.owner.id} 
                date={new Date(pageData.pushed_at).toLocaleDateString('EN-CA')}
            />
        );

    return dataDisplay;
};

export default RepoDetailPage;