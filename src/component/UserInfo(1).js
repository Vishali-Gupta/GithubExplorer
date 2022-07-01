import React from "react";
import "./Userinfo.css";

const UserInfo = ({ user }) => (
  <div className="user_info">
    <img
      src={user.avatar_url}
      className="p-2  avatat"
      width="130"
      height="130"
      alt="profile_image"
    />
    <div className="user_infoDetails">
      <h5>{user.name}</h5>

      <div className="user_infos">
        <div className="user_infoDetail">
          <i className="fa fa-map-marker pr-1" />
          <span> Location .</span>
        </div>
        <div className="user_infoDetail">
          <i className="fa fa-globe pr-1" />
          <span> Blog Url .</span>
        </div>
        <div className="user_infoDetail">
          <i className="fa fa-envelope pr-1" />
          <span> email .</span>
        </div>
        <div className="user_infoDetail">
          <i className="fa fa-twitter pr-1" />
          <span> Twitter userid .</span>
        </div>
        <div className="user_infoDetail">
          <i className="fa fa-group pr-1" />
          <span> Followers .</span>
        </div>
        <div className="user_infoDetail">
          <i className="fa fa-heart pr-1" />
          <span> Following.</span>
        </div>
      </div>
    </div>
  </div>
);

export default UserInfo;
