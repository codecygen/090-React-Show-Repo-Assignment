import classes from './RepoCart.module.css';

const RepoCart = (props) => {
    const { name, description, language, forks, date } = props;

    const formattedDate = new Date(date).toLocaleDateString('EN-CA');

    return (
        <ul className={classes.cart}>
            <li><b>Name:</b> {name}</li>
            <li><b>Description:</b> {description}</li>
            <li><b>Language:</b> {language}</li>
            <li><b>Forks Count:</b> {forks}</li>
            <li><b>Date:</b> {formattedDate}</li>
        </ul>
    );
};

export default RepoCart;