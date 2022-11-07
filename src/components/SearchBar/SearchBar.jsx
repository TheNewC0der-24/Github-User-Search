import React from 'react';
import ContributionModal from '../../Modal/ContributionModal';
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

                {/* Select Contributions */}
                <button className="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#contributionModal">
                    Contribution to/from
                </button>
            </div>
            <ContributionModal />
        </>
    )
}

export default SearchBar;