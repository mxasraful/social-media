import React from 'react';
import { Link } from 'react-router-dom';
import "./HomeLeft.css"

const HomeLeft = () => {
    return (
        <div className='homeLeft'>
            <ul className='left-items nav d-block mt-4 w-100'>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/user/mxasraful">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://lh3.googleusercontent.com/ogw/ADea4I7P2UrnzgetD-oEK-_E7-Wp62eXJee8GIY0H60e1w" alt="" className="img-fluid " />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Mx Asraful</h6>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/followers">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://icon-library.com/images/followers-icon/followers-icon-1.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Followers</h6>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/messages">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/messages-icon.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Messages</h6>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/pages">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeGq2b6UJwAtb5NSKRIIHELEtEPFOzh_t-u0Q8U7OH-3631CK9cQXzYW1pGEpq8vYpOOfEe-xLYjxMFDFxQyNcoF" alt="" className="img-fluid" />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Pages</h6>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/videos">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/GNOME_Video_icon_2019.svg/1200px-GNOME_Video_icon_2019.svg.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Videos</h6>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/groups">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Groups</h6>
                        </div>
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className='left-items nav d-block mt-4 w-100'>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/settings">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/lock-icon.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>lock Your Profile</h6>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className='left-item d-flex text-dark nav-link home-left-item w-100 rounded' to="/user/mxasraful?action=lock-profile">
                        <div className="col-2 me-2" style={{ width: "35px", height: "35px" }}>
                            <img src="https://www.iconpacks.net/icons/1/free-settings-icon-778-thumb.png" alt="" className="img-fluid " />
                        </div>
                        <div className="col-9">
                            <h6 className='mt-2'>Settings</h6>
                        </div>
                    </Link>
                </li>
            </ul>
            <div class="fixed-bottom mb-4 w-25">
                <h6 className='ps-4 mt-2'>© All Rights Reserved By <a href="https://asrafulweb.com">AsrafulWeb</a>.</h6>
                <small className='ps-4'>Design And Developed By <a href="https://mxasraful.com">Mx Asraful</a>.</small>
            </div>
        </div>
    );
};

export default HomeLeft;