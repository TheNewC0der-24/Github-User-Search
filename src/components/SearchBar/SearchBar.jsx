import React from 'react';
import ContributionModal from '../../Modal/ContributionModal';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <>
            <div className="container mt-5 mb-3 d-flex flex-wrap justify-content-between gap-3">
                <form className='d-flex'>
                    <input className={`${styles.inputField} form-control`} type='text' placeholder='Search user..' aria-label='Search' />
                    <button className={`${styles.searchButton} btn btn-outline-success`}>Search</button>
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