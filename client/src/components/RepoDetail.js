import { Link } from 'react-router-dom';

// This is a module converts markdown file to HTML format
import ReactMarkdown from "react-markdown";

import useMd from '../hooks/use-md';

import classes from './RepoDetail.module.css';

const RepoDetail = (props) => {
    // Custom hook which gets the markdown data in text format.
    const mdData = useMd(props.link);

    return (
        <section className={classes['repo-detail']}>
            <Link to='/'>
                <button>{`<= Go Back`}</button>
            </Link>
            <p><b>Message:</b> I could not find this section!</p>
            <p><b>Author ID:</b> {props.author}</p>
            <p><b>Recent Commit Date:</b> {props.date}</p>

            <div className={classes.md}>
                <h1>Repo Markdown Data</h1>
                {/* This is a module converts markdown file to HTML format */}
                <ReactMarkdown children={mdData} />
            </div>
        </section>
    );
};

export default RepoDetail;