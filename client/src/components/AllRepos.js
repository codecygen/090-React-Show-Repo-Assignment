import Repo from "./Repo";

const AllRepos = (props) => {
    const { allData } = props;

    console.log(allData);

    const dataComponent = allData.length === 0 ?
        (<p>Loading...</p>) :
        (allData.map((data) => (
            <Repo
                key={data.id}
                name={data.name} 
                description={data.description}
                language={data.language}
                forks={data.forks_count}
            />
        )));

    return (
        <section>
            {dataComponent}
        </section>
    );
};

export default AllRepos;