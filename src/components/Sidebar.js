import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { useRadioGroup } from '@material-ui/core';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "../StateProvider";


function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

    return (
      <div className="sidebar">
        <SidebarRow
          src={user.photoURL}
          title={user.displayName}
        />
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Publications" />
        <SidebarRow Icon={PeopleIcon} title="Colleagues" />
        <SidebarRow Icon={ChatIcon} title="Messeges" />
        <SidebarRow Icon={WorkOutlineIcon} title="Research" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="" />
      </div>
    );
}

export default Sidebar
