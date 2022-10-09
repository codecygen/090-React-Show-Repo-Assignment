import { useRef } from 'react';

import classes from './FilterDropdown.module.css';

const FilterDropdown = (props) => {
    const optionsRef = useRef();

    const listChangeHandler = () => {
        const selectedOption = optionsRef.current.value;
        props.filter(selectedOption);        
    };

    return (
        <section className={classes.filter}>
            <label htmlFor="language">Choose the language.</label>
            <select name="language" ref={optionsRef} defaultValue='All' onChange={listChangeHandler}>
                <option value="All">--All--</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="PHP">PHP</option>
                <option value="TypeScript">TypeScript</option>
            </select>
        </section>
    );
};

export default FilterDropdown;