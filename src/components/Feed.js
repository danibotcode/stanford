import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js';
import Post from './Post';

function Feed() {
    return (
      <div className="feed">
        {/* call Post components and pass props */}
        <StoryReel />
        <MessageSender />

        <Post
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLZxZoZgz_DSp_qb8YRgfEy61raIXcPJVavw&usqp=CAU"
          message="Look, it's the Shiram Center for Biomedical Engineering!"
          timestamp="This is a timestamp"
          username="daniweav"
          image="https://lh3.googleusercontent.com/proxy/y98k2gny6ighsEK3Uqc6Deq1b_bNAN4OWOa1R7xj_pKKjeQcGRxEteqSSnNAsqqPoIn9D1u7MdLEnAqcziy8xJDYpCQH"
        />
        <Post
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLZxZoZgz_DSp_qb8YRgfEy61raIXcPJVavw&usqp=CAU"
          message="WOW this is cool!"
          timestamp="This is a timestamp"
          username="daniweav"
          image="https://news.stanford.edu/news/2011/june/images/claw_news.jpg"
        />

        <Post
          profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLZxZoZgz_DSp_qb8YRgfEy61raIXcPJVavw&usqp=CAU"
          message="Go Stanford!"
          timestamp="This is a timestamp"
          username="daniweav"
          image="https://gostanford.com/images/2018/12/3/Huddle.jpg?width=1024&height=576&mode=crop"
        />
      </div>
    );
}

export default Feed;
