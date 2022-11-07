import React from 'react';

import { FaUserCircle } from 'react-icons/fa';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

const Result = (props) => {

    const style = {
        height: "400px",
        overflowY: "auto"
    }

    return (
        <>
            <div className='container my-5'>
                <div className="card mt-5">
                    <div className="card-header">
                        <h3>Github Users</h3>
                    </div>
                    <div className="card-body" style={style}>
                        {props.Loading ? <LoadingAnimation /> :
                            props.userData.length > 0 &&
                            props.userData.map(users => (
                                <div key={users.id} className="card mb-3">
                                    <div className="card-body d-flex gap-3">
                                        {users.avatar ?
                                            <img src={users.avatar} width={35} height={35} className="img-fluid rounded-circle" alt="avatar" />
                                            :
                                            <FaUserCircle className='fs-3' />
                                        }
                                        <h5 className="card-title">{users.name}</h5>

                                        <div className='d-flex justify-content-end ms-auto'>
                                            <a href={users.url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">View Profile</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result;