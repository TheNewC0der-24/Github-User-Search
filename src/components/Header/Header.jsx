import React from 'react';
import styles from './Header.module.css';

import { ImGithub } from 'react-icons/im';

const Header = () => {
    return (
        <>
            <nav className={`${styles.nav} navbar sticky-top navbar-dark`}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1"><ImGithub className='fs-3 me-2' />Github User Search <span className={styles.description}>and List Sorting</span></span>
                </div>
            </nav>
        </>
    )
}

export default Header;