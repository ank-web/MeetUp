import React from "react";
import { FriendsListItem } from "./";
import { Link } from "react-router-dom";
import dp from "../helpers/img-1.png";
// props  coming from componenets root file
const FriendsList = (props) => {
  return (
    <div className="friends-list">
      <div className="header">Friends</div>
      <div className="friends-item">
        <div className="friends-img">
          <img src={dp} alt="user-pic" />
        </div>
        <div className="friends-name">udgam@udgam.com</div>
      </div>

      {props.friends && props.friends.length === 0 && (
        <div className="no-friends">No friends found!</div>
      )}

      {props.friends &&
        props.friends.map((friend) => (
          <FriendsListItem friend={friend.to_user} key={friend._id} />
        ))}
    </div>
  );
};

export default FriendsList;
