import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
    return (
      <div className="header">
        <div className="header__left">
          <img
            src="https://static.rimetocdn.com/oids/32489:1000:50/95bd3964f856ac285485e9cab44aaeba.jpeg"
            alt=""
          />
          <div className="header__input">
            <SearchIcon style={{ color: "#544948" }} />
            <input placeholder="Search by name" type="text" />
          </div>
        </div>

        <div className="header__center">
          <div
            className="header__option
            header__option--active"
          >
            <HomeIcon fontSize="large" />
          </div>
          <div className="header__option">
            <FlagIcon fontSize="large" />
          </div>
          <div className="header__option">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div className="header__option">
            <WorkOutlineIcon fontSize="large" />
          </div>
          <div className="header__option">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>

        <div className="header__right">
          <div className="header__info">
            <Avatar />
            <h4 style={{ color: "white" }}>sunetid</h4>
          </div>

          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    );
}

export default Header
