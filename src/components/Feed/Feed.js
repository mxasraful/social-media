import React from 'react';
import './Feed.css'
import FeedMyDay from './FeedMyDay/FeedMyDay';
import FeedPost from './FeedPost/FeedPost';
import FeedPostItems from './FeedPostItems/FeedPostItems';

const Feed = () => {
    return (
        <div className='homeFeed mt-4'>
            <FeedMyDay />
            <FeedPost />
            <FeedPostItems />
        </div>
    );
};

export default Feed;