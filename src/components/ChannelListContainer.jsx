import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";

function SideBar() {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="Hospital" width="20" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon2__inner">
          <img src={LogoutIcon} alt="Logout" width="20" />
        </div>
      </div>
    </div>
  );
}

function CompanyHeader() {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
    </div>
  );
}

function ChannelListContainer() {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => {
            <TeamChannelPreview {...previewProps} type="team" />;
          }}
        />

        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => {
            <TeamChannelPreview {...previewProps} type="messaging" />;
          }}
        />
      </div>
    </>
  );
}

export default ChannelListContainer;
