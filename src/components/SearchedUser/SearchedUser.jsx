import React from 'react';

const SearchedUser = (props) => {

    return (
        <>
            <div className={`${props.display} container my-3`}>
                {props.searchUser.length > 1 ?
                    props.searchUser.map(user => (
                        <div>
                            <h3 className='mb-3'>Searched User</h3>
                            <div className="row row-cols-1 row-cols-lg-6 g-4">
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Name</h5>
                                            <p className="card-text text-primary">
                                                {user.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Contributions</h5>
                                            <p className="card-text text-primary">
                                                100
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Followers</h5>
                                            <p className="card-text text-primary">
                                                {user.followers}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Repo Count</h5>
                                            <p className="card-text text-primary">
                                                {user.repo}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Location</h5>
                                            <p className="card-text text-primary">
                                                {user.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Bio</h5>
                                            <p className="card-text text-primary">
                                                {user.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div>
                            <h3 className='mb-3'>Searched User</h3>
                            <div className="row row-cols-1 row-cols-lg-6 g-4">
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Name</h5>
                                            <p className="card-text text-primary">
                                                {props.searchUser.name ? props.searchUser.name : 'Not Found'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Contributions</h5>
                                            <p className="card-text text-primary">
                                                Not Found
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Followers</h5>
                                            <p className="card-text text-primary">
                                                {props.searchUser.followers ? props.searchUser.followers : 'Not Found'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Repo Count</h5>
                                            <p className="card-text text-primary">
                                                {props.searchUser.repo ? props.searchUser.repo : 'Not Found'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Location</h5>
                                            <p className="card-text text-primary">
                                                {props.searchUser.location ? props.searchUser.location : 'Not Found'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Bio</h5>
                                            <p className="card-text text-primary">
                                                {props.searchUser.bio ? props.searchUser.bio : 'No Bio'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SearchedUser;