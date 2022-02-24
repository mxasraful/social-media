import React from 'react';
import { Link } from 'react-router-dom';

const FeedPostItem = () => {
    return (
        <div className='post-item card mt-4 pb-4'>
            <div className="p-3 d-flex">
                <div className="post-item-header" style={{ height: "40px" }}>
                    <Link to="/user/mxasraful/posts/Lorem-ipsum" className='text d-flex' style={{ textDecoration: "none" }}>
                        <div className="col-1">
                            <img src="https://lh3.googleusercontent.com/ogw/ADea4I7P2UrnzgetD-oEK-_E7-Wp62eXJee8GIY0H60e1w" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-11 ps-3 text-dark post-item-user-info">
                            <h6 className='fw-bolder '>Mx Asraful</h6>
                            <Link to="/" className='text-dark'><small>4 hourse ago</small> </Link>
                        </div>
                    </Link>
                </div>
                <div class="btn-group dropstart">
                    <button className="btn rounded-circle ms-auto" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                    </button>
                    <ul class="dropdown-menu mt-5 dropdown-menu-dark">
                        <li><button class="dropdown-item" type="button">Copy Link</button></li>
                        <li><button class="dropdown-item" type="button">Unfollow Mx Asraful</button></li>
                        <li><button class="dropdown-item" type="button">Hide Post</button></li>
                        <li><button class="dropdown-item" type="button">Report Post</button></li>
                    </ul>
                </div>
            </div>
            <div className="post-item-text px-3 mt-3">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet soluta inventore ea minus vero sint maiores ad quaerat consequuntur delectus. Aliquam fugit maiores est illo minus quisquam delectus cumque culpa.</p>
            </div>
            <div className="card-body">
                <img src="https://globeinfinite.com/wp-content/uploads/2021/05/Kangchenjunga-India.jpg" class="card-img-top rounded" alt="" />
            </div>
            <div className="px-3">
                <hr />
            </div>
            <div className="d-flex px-3">
                <div className="me-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-heart text-danger me-1" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    <span>Recep Tayyip Erdoğan and 2k Others liked</span>
                </div>
                <div className="">
                    <span>569 Comments</span>
                </div>
            </div>
            <div className="d-flex post-item-feedback-options px-3 mt-2">
                <button className="col-3 btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                    </svg>
                    <span className="h6 ms-2">Share</span>
                </button>
                <button className="col-3 btn me-auto ms-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    <span className="h6 ms-2">Like</span>
                </button>
                <button className="col-3 btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                    </svg>
                    <span className="h6 ms-2">Comment</span>
                </button>
            </div>
        </div>
    );
};

export default FeedPostItem;