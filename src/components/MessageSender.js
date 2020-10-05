import React from 'react'
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
    


    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
      <div className="messageSender">
        <div class="messageSender__top">
          <Avatar />
          <form>
            <input
              className="messageSender__input"
              placeholder={`What's on your mind?`}
            />
            <input placeholder="image URL (Optional)" />

            <button onClick={handleSubmit} type="submit">
              Hidden submit
            </button>
          </form>
        </div>

        <div class="messageSender__bottom">
          <div class="messageSender__option">
            <VideocamIcon style={{ color: "B1040E" }} />
            <h3>Live Video</h3>
          </div>

          <div class="messageSender__option">
            <PhotoLibraryIcon style={{ color: "#009B76" }} />
            <h3>Photo/Video</h3>
          </div>

          <div class="messageSender__option">
            <InsertEmoticonIcon style={{ color: "D1660F" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    );
}

export default MessageSender
