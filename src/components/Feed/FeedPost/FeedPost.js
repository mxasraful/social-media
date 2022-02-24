import React from 'react';
import { Link } from 'react-router-dom';
import FeedCreatePost from '../FeedCreatePost/FeedCreatePost';

const FeedPost = () => {
    return (
        <div className="feed-new-post card mt-4">
            <div className="card-body">
                <div className="text-center">
                    <div className="d-flex">
                        <Link className='col-2' to="/user/mxasraful">
                            <img src="https://lh3.googleusercontent.com/ogw/ADea4I7P2UrnzgetD-oEK-_E7-Wp62eXJee8GIY0H60e1w" alt="" className="img-fluid rounded-circle" style={{ width: "60px" }} />
                        </Link>
                        <div className="col-10">
                            <button class="form-control mt-2 w-100" placeholder="" data-bs-toggle="modal" data-bs-target="#feedCreatePostModal">What's on your mind, Mx Asraful?</button>
                        </div>
                    </div>
                    <FeedCreatePost />
                </div>
                <hr />
                <div className='d-flex'>
                    <button className="col-4 btn feed-create-post-short-btn btn-sm d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-reels-fill text-danger me-3" viewBox="0 0 16 16">
                            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                        <h6 style={{ marginTop: "7px" }}>Live Video</h6>
                    </button>
                    <button className="col-4 btn feed-create-post-short-btn btn-sm d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-reels-fill text-success me-3" viewBox="0 0 16 16">
                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                        </svg>
                        <h6 style={{ marginTop: "7px" }}>Photo</h6>
                    </button>
                    <button className="col-4 btn feed-create-post-short-btn btn-sm d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-reels-fill text-warning me-3" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
                        </svg>
                        <h6 style={{ marginTop: "7px" }}>Emoji</h6>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedPost;