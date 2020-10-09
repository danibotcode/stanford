import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js';
import Post from './Post';
import { useStateValue } from "../StateProvider";
import firebase from "firebase";
import { db } from "../firebase.js";


function Feed() {
    const [{ user }, dispatch] = useStateValue();
    const [posts, setPosts] = useState([]);


      useEffect (() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({
           id: doc.id,
           data: doc.data() })))
           );
      
          }, []);


    return (
      <div className="feed">
        {/* call Post components and pass props */}
        <StoryReel />
        <MessageSender />

        {posts.map ((post) => (
          <Post 
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          />
        ))}

        <Post
          profilePic={user.photoURL}
          message="Look, it's the Shriram Center for Biomedical Engineering!"
          // timestamp="This is a timestamp"
          username={user.displayName}
          image="https://pbs.twimg.com/media/B7LtdrOCIAANC69.jpg"
        />
        <Post
          profilePic={user.photoURL}
          message="WOW this is cool!"
          // timestamp="This is a timestamp"
          username={user.displayName}
          image="https://news.stanford.edu/news/2011/june/images/claw_news.jpg"
        />

        <Post
          profilePic={user.photoURL}
          message="Go Stanford!"
          // timestamp="This is a timestamp"
          username={user.displayName}
          image="https://gostanford.com/images/2018/12/3/Huddle.jpg?width=1024&height=576&mode=crop"
        />
      </div>
    );
}

export default Feed;
