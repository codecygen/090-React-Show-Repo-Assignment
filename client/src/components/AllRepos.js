import RepoCart from "./RepoCart";

const AllRepos = (props) => {
    const { allData } = props;

    const allRepoCarts = allData.map(data => (
            <RepoCart 
                key={data.id} 
                name={data.name}
                description={data.description} 
                language={data.language} 
                forks={data.forks_count} 
                date={data.created_at}
            />
    ));

    const repoDisplay = allData.length === 0 ?
        (<p>Loading...</p>) :
        (allRepoCarts);

    return (
        <section>
            {repoDisplay}
        </section>
    );
};

export default AllRepos;