import React from 'react';

const FeedMyDay = () => {
    return (
        <div className="feed-day rounded p-3" style={{ height: "230px", background: "#fff" }}>
            <h5 className="mb-2">My Day</h5>
            <div className="row feed-day-items d-flex ms-2 pt-2">
                <div className="feed-day-item col-2 rounded d-flex align-items-center justify-content-center" style={{ background: "#d3d3d3" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </div>
                <div className="feed-day-item col-2 rounded" style={{ backgroundImage: "url('https://globeinfinite.com/wp-content/uploads/2021/05/Kangchenjunga-India.jpg')" }}>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I7P2UrnzgetD-oEK-_E7-Wp62eXJee8GIY0H60e1w" alt="" className="img-fluid rounded-circle mt-2" style={{ width: "30px", height: "30px" }} />
                </div>
                <div className="feed-day-item col-2 rounded" style={{ backgroundImage: "url('https://globeinfinite.com/wp-content/uploads/2021/05/Kangchenjunga-India.jpg')" }}>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I7P2UrnzgetD-oEK-_E7-Wp62eXJee8GIY0H60e1w" alt="" className="img-fluid rounded-circle mt-2" style={{ width: "30px", height: "30px" }} />
                </div>
                <div className="feed-day-item col-2 rounded" style={{ backgroundImage: "url('https://globeinfinite.com/wp-content/uploads/2021/05/Kangchenjunga-India.jpg')" }}>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I7P2UrnzgetD-oEK-_E7-Wp62eXJee8GIY0H60e1w" alt="" className="img-fluid rounded-circle mt-2" style={{ width: "30px", height: "30px" }} />
                </div>
                <div className="feed-day-item col-2 rounded" style={{ backgroundImage: "url('https://globeinfinite.com/wp-content/uploads/2021/05/Kangchenjunga-India.jpg')" }}>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I7P2UrnzgetD-oEK-_E7-Wp62eXJee8GIY0H60e1w" alt="" className="img-fluid rounded-circle mt-2" style={{ width: "30px", height: "30px" }} />
                </div>
                <div className="feed-day-item col-2 rounded d-flex align-items-center justify-content-center" style={{ background: "#d3d3d3" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default FeedMyDay;