import React from 'react';
import Feed from '../Feed/Feed';
import HomeLeft from '../HomeLeft/HomeLeft';
import HomeRight from '../HomeRight/HomeRight';
import './Home.css';

const Home = () => {
    return (
        <div className='home container-fluid'>
            <div className="d-flex">
                <div className="col-3 row">
                    <div className="col-8 side-bar">
                        <HomeLeft />
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <div className="col-9">
                        <Feed />
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-2 row">
                    <div className="col-12 right-bar">
                        <HomeRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;