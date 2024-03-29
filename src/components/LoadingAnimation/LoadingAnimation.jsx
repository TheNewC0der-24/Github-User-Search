import React from 'react';

const LoadingAnimation = () => {
    return (
        <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" ariaHidden="true"></div>
        </div>
    )
}

export default LoadingAnimation;