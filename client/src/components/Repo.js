import classes from './Repo.module.css';

const Repo = (props) => {
    let { name, description, language, forks } = props;
    name = name ? name : 'N/A';
    description = description ? name : 'N/A';
    language = language ? name : 'N/A';
    forks = forks ? name : 'N/A';

    return (
        <ul className={classes.cart}>
            <li><b>Name:</b> {name}</li>
            <li><b>Description:</b> {description}</li>
            <li><b>Language:</b> {language}</li>
            <li><b>Forks Count:</b> {forks}</li>
        </ul>
    );
};

export default Repo;