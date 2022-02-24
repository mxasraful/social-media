import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeedCreatePost = () => {

    const [privacyOpt, setPrivacyOpt] = useState(false)
    const [privacySelected, setPrivacySelected] = useState('Public')

    return (
        <div class="modal fade feed-create-post" id="feedCreatePostModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="feedCreatePostModalLabel" aria-hidden="true" >
            <div class="modal-dialog modal-dialog-centered">
                {
                    privacyOpt ?
                        <div class="modal-content pb-4">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Select audience</h5>
                                <button type="button" class="btn btn-sm" onClick={() => setPrivacyOpt(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="modal-body">
                                <>
                                    <div class="d-grid gap-2 col-6 mx-auto">
                                        <button class={privacySelected === "Public" ? "btn btn-outline-info active text-light" : "btn btn-outline-info"} onClick={() => {
                                            setPrivacySelected("Public")
                                            setPrivacyOpt(false)
                                        }}>Public</button>
                                        <button class={privacySelected === "Followers" ? "btn btn-outline-info active text-light" : "btn btn-outline-info"} onClick={() => {
                                            setPrivacySelected("Followers")
                                            setPrivacyOpt(false)
                                        }}>Followers</button>
                                        <button class={privacySelected === "Only Me" ? "btn btn-outline-info active text-light" : "btn btn-outline-info"} onClick={() => {
                                            setPrivacySelected("Only Me")
                                            setPrivacyOpt(false)
                                        }}>Only Me</button>
                                    </div>
                                </>
                            </div>
                        </div>
                        :
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Create Post</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <>
                                    <div className="d-flex">
                                        <Link rel="stylesheet" to="/user/mxasraful" className="">
                                            <img src="https://lh3.googleusercontent.com/ogw/ADea4I7P2UrnzgetD-oEK-_E7-Wp62eXJee8GIY0H60e1w" alt="" className="img-fluid rounded-circle" style={{ width: "35px" }} />
                                        </Link>
                                        <div className='ms-2 d-block'>
                                            <h6>Mx Asraful</h6>
                                            <button className="btn btn-sm create-post-privacy-btn" onClick={() => setPrivacyOpt(true)}>{privacySelected}</button>
                                        </div>
                                    </div>
                                    <div className="create-post-text-section mt-3">
                                        <textarea class="form-control border border-white" placeholder="What's on your mind, Mx Asraful?" id="create-post-textarea" rows="6"></textarea>
                                    </div>
                                </>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary btn-sm w-100" data-bs-dismiss="modal">Post</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default FeedCreatePost;