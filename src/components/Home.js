import React, { Component } from "react";
import FriendsList from "./FriendsList";
import PostsList from "./PostsList";

class Home extends Component {
  render() {
    const { posts, friends, isLoggedin } = this.props;
    return (
      <div className="home ">
        <PostsList posts={posts} />
        {true && <FriendsList friends={friends}/>}
      </div>
    );
  }
}

export default Home;
