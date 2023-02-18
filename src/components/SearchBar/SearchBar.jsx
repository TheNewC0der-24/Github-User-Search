import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
    return (
        <>
            <div className="container mt-4 mb-3 d-flex flex-wrap justify-content-between gap-3">
                <form className='d-flex' onSubmit={props.handleSearch}>
                    <input
                        type='text'
                        className={`${styles.inputField} form-control`}
                        placeholder='Search user..'
                        value={props.search}
                        onChange={(e) => props.setSearch(e.target.value)}
                    />
                    <button disabled={props.search ? false : true} className={`${styles.searchButton} btn btn-success`}>Search</button>
                </form>
            </div>
        </>
    )
}

export default SearchBar;