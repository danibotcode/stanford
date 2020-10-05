import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js';

function Feed() {
    return (
        <div className='feed'>
        <StoryReel />
        <MessageSender />
            {/* MessageSender */}

        </div>
    )
}

export default Feed
