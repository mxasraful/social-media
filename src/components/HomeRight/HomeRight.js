import React from 'react';
import { Link } from 'react-router-dom';
import './HomeRight.css';

const HomeRight = () => {
    return (
        <div className='homeRight pt-4'>
            <h5>Online Pepoles</h5>
            <ul className='left-items nav d-block mt-4 w-100'>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/user/mxasraful">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://lh3.googleusercontent.com/ogw/ADea4I7P2UrnzgetD-oEK-_E7-Wp62eXJee8GIY0H60e1w" alt="" className="sidebar-item-img img-fluid rounded-circle " />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Mx Asraful</h6>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/user/mxasraful">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://media-eng.dhakatribune.com/uploads/2020/07/6-4005229455087070627-o-1594042640361.jpg" alt="" className="img-fluid rounded-circle sidebar-item-img" />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Ayman Sadiq</h6>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/user/rakib3">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQGcLXAUVzygFA/profile-displayphoto-shrink_200_200/0/1642526218871?e=1648080000&v=beta&t=ZZIRTOMoLgjOKPIZHrZ8i0kP7cy5jDU7JDfL1UERbsM" alt="" className="sidebar-item-img img-fluid rounded-circle" />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Rakib Hossin</h6>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/user/rakib3">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://blogograph.com/wp-content/uploads/2020/01/Tawhid-Afridi-3.jpg" alt="" className="img-fluid sidebar-item-img rounded-circle" />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Tawhid Afridi</h6>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded text-center' to="/messages/online">
                        <div className="col-12">
                            <h6 className='mt-2'>View All</h6>
                        </div>
                    </Link>
                </li>
            </ul>
            <br />
            <div className="home-right-ad">
                <a href="https://asrafulweb.com" target="blank">
                    <img src="http://matsyafed.in/sites/default/files/side-banner-6_0.png" alt="" className="img-fluid" />
                </a>
            </div>
            <br />
        </div >
    );
};

export default HomeRight;