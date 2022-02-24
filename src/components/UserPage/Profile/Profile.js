import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = () => {

    const path = useLocation().pathname

    console.log(path)
    return (
        <div className="profile-item">
            <Link to="/user/mxasraful" className="profile-cover" style={{ height: "30vh" }}>
                <img src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/271987678_1078323199627007_857939766736352088_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeF9yW0KtBx3lZwUltqP3k5nDSo6HVeOPXINKjodV449cgwPDwP2c_TFALa2BdiU4seHnn0uADH40sfbbfy2lg7V&_nc_ohc=D2Eoo7BI6b0AX8ULpBs&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8mtBKQgO4AMbeEJJk0JafqUzWRaLo-ExeUynkItLFWNA&oe=621C8E91" alt="" className="img-fluid rounded-bottom" style={{ objectFit: "cover", height: "45vh", width: "100%" }} />
            </Link>
            <div className="profile-info row mb-3">
                <Link to="/user/mxasraful" className="col-2 pe-4">
                    <img src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/273983050_1091295158329811_5447372372906141159_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHPNdrvOzMO2IXzmy7EiDIKn_WaNjSgUSGf9Zo2NKBRIes6vLBp1t-ntFC82vf1Aji4icGi3MiFRICM_P8cFuHC&_nc_ohc=vQMrEKKmFMAAX_7qVTH&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT9xIUNhe0KYH3Hsk868fZKP2CaWmgQLSTJl6drBPZwohg&oe=621D0F08" alt="" className="img-fluid rounded-circle" style={{ objectFit: "cover", border: "5px solid #F0F2F5", marginTop: "-30px" }} />
                </Link>
                <div className="col-7">
                    <h3 className='mt-4'>Mx Asraful (Programmer)
                        <span className='ms-2 varifid example-popover text-primary' id='verifiedBadge' style={{ cursor: "pointer" }} data-bs-toggle="popover" title="Popover title" data-bs-content="A verified badge confirms that this is an authentic Page for this public figure, media company or brand.">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                        </span>
                    </h3>
                    <div className="d-flex mb-4" style={{ width: "300px" }}>
                        <div className="col-6">
                            <Link to="/user/mxasraful/followers" className="text-dark h6">999 Followers</Link>
                        </div>
                        <div className="col-6">
                            <Link to="/user/mxasraful/connected" className="text-dark h6">190 Connected</Link>
                        </div>
                    </div>
                    <h6>A person who programming professionally and happily. He always wants to do good.</h6>
                </div>
                <div className="col-3 d-inline mt-5">
                    <button className="btn btn-primary px-3 me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill mb-1" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                        <span className="ms-2">Add Story</span>
                    </button>
                    <button className="btn btn-secondary px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill mb-1" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                        </svg>
                        <span className="ms-2">Edit Profile</span>
                    </button>
                </div>
            </div>
            <div className="d-inline">
                <nav class="nav nav-pills nav-justified">
                    <Link class="nav-link active" to="/user/mxasraful">Summary</Link>
                    <Link class="nav-link " to="/user/mxasraful/about">About</Link>
                    <Link class="nav-link " to="/user/mxasraful/followers">Followers</Link>
                    <Link class="nav-link " to="/user/mxasraful/connected">Connected</Link>
                    <Link class="nav-link " to="/user/mxasraful/photos">Photos</Link>
                    <Link class="nav-link active" to="/user/mxasraful/videos">Videos</Link>
                </nav>
            </div>
            <div className="profile-tab-items">
                {
                    path === "/user/mxasraful" ?
                        <div className="profile-summary-item">
                            summary
                        </div>
                        : path === "/user/mxasraful/about" ?
                            <div className="profile-about-item">
                                about
                            </div>
                            : path === "/user/mxasraful/followers" ?
                                <div className="profile-followers-item">
                                    followers
                                </div>
                                : path === "/user/mxasraful/connected" ?
                                    <div className="profile-connected-item">
                                        connected
                                    </div>
                                    : path === "/user/mxasraful/photos" ?
                                        <div className="profile-photos-item">
                                            Photos
                                        </div>
                                        : path === "/user/mxasraful/videos" ?
                                            <div className="profile-videos-item">
                                                Videos
                                            </div>
                                            :
                                            <></>
                }
            </div>
        </div>
    );
};

export default Profile;