import React from 'react';
import './UserPage.css';
import HomeLeft from '../HomeLeft/HomeLeft';
import Profile from './Profile/Profile';

const UserPage = () => {
    return (
        <div className='profileMain container-fluid'>
            <div className="d-flex">
                <div className="col-2 row">
                    <div className="col-9 side-bar">
                        <HomeLeft />
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-9 d-flex justify-content-center">
                    <div className="col-12">
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;