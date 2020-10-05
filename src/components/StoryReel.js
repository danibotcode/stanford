import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
      <div className="storyReel">
        <Story
          image="https://www.desktopbackground.org/download/720x1280/2012/08/12/435553_stanford-4k-ultra-hd-wallpapers_3840x2160_h.jpg"
          profileSrc="https://www.seekpng.com/png/detail/346-3465209_stanford-university-colors.png"
          title="Stanford University"
        />
        <Story
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLSnTVt5PjVDenveRsWOiqJCa56WMDmV0bkw&usqp=CAU"
          profileSrc="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fluisakroll%2Ffiles%2F2017%2F09%2Fli-ka-shing.jpg"
          title="Li Ka Shing"
        />
        <Story
          image="https://news.stanford.edu/news/2010/september/images/marguerite_news.jpg"
          profileSrc="https://chrisbourg.files.wordpress.com/2012/02/marguerite_hybrid_rodriguez.jpg"
          title="Marguerite"
        />
        <Story
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCJstWtTWXO4utbUxcefgcksqyUgS846cYdA&usqp=CAU"
          profileSrc="https://neuroscience.stanford.edu/sites/g/files/sbiybj1576/f/e149f763b883034486113270d794ea0e.jpg"
          title="Tom Sudhof"
        />
      </div>
    );
}

export default StoryReel;
