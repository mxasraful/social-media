import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './../../logo/asraful-social-app-logo-2.png';
import './Header.css'

const Header = () => {

    const pathname = useLocation().pathname

    return (
        <div className='headerMain sticky-top'>
            <div className="header-container container-fluid">
                <div className="row">
                    <div className="col-4 d-flex">
                        <Link to="/" className='ms-3'>
                            <img src={logo} style={{ width: "40px" }} className="mt-1" alt="" />
                        </Link>
                        <form class="row g-3 pt-1 ms-5">
                            <div class="col-auto">
                                <input type="text" class="form-control" id="headerSearchInput" placeholder="Search" />
                            </div>
                            <div class="col-auto">
                                <button type="submit" id='headerSearchBtn' class="btn btn-primary mb-3">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <div className="home-center-tabs row">
                            <Link to="/videos" className={pathname === '/videos' ? "col-3 btn home-center-item home-center-item-active" : "col-3 btn home-center-item"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                                </svg>
                            </Link>
                            <div className="col-1"></div>
                            <Link to="/" className={pathname === '/' ? "col-3 btn home-center-item home-center-item-active" : "col-3 btn home-center-item"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                </svg>
                            </Link>
                            <div className="col-1"></div>
                            <Link to="/groups" className={pathname === '/groups' ? "col-3 btn home-center-item home-center-item-active" : "col-3 btn home-center-item"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                    <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-end header-right-items text-right">
                        <button type="button" class="btn header-right-item rounded-circle me-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </button>
                        <div class="btn-group dropstart messages-drop">
                            <button type="button" class="btn header-right-item rounded-circle me-4" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                </svg>
                            </button>
                            <ul class="dropdown-menu mt-5 messages-drop-menu">

                            </ul>
                        </div>
                        <div class="btn-group dropstart notification-drop">
                            <button type="button" class="btn header-right-item rounded-circle me-4" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                </svg>
                            </button>
                            <ul class="dropdown-menu mt-5 notification-drop-menu" style={{ width: "250px" }}>
                                <div className="ms-3">
                                    <h4>Notifications</h4>
                                </div>
                                <li>
                                    <Link class="dropdown-item drop-options-item d-flex" to="/">
                                        <div className="text-danger me-2 mt">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                            </svg>
                                        </div>
                                        <h6>Mx Asraful Liked Your Post</h6>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="btn-group dropstart options-drop">
                            <button type="button" class="btn header-right-item rounded-circle me-4 " data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                </svg>
                            </button>
                            <ul class="dropdown-menu mt-5 options-drop-menu" style={{ width: "250px" }}>
                                <li>
                                    <Link class="dropdown-item drop-options-item d-flex" to="/mxasraful">
                                        <img src="https://lh3.googleusercontent.com/ogw/ADea4I7P2UrnzgetD-oEK-_E7-Wp62eXJee8GIY0H60e1w" alt="" className="w-25 img-fluid rounded-circle me-2" />
                                        <h4 className=''>Mx Asraful</h4>
                                    </Link>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <Link class="dropdown-item drop-options-item" to="/">
                                        <h5>Settings</h5>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;