import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { fetchPosts } from "../actions/posts";
import {
  Navbar,
  Home,
  Page404,
  Login,
  Signup,
  Settings,
  UserProfile,
} from "./index";
import PropTypes from "prop-types";
import * as jwt_decode from "jwt-decode";
import { authenticateUser } from "../actions/auth";
import { fetchUserFriends } from "../actions/friends";

const PrivateRoute = ({ isLoggedin, path, element: Element }) => {
  return true ? <Element /> : <Navigate to="/login" />;
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwt_decode(token);

      console.log("user", user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
      this.props.dispatch(fetchUserFriends());
    }
  }

  render() {
    const { posts, auth, friends } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/*<PostsList posts={posts}/>*/}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  posts={posts}
                  friends={friends}
                  isLoggedin={auth.isLoggedin}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              exact
              path="/settings"
              element={
                <PrivateRoute
                  element={Settings}
                  path="/settings"
                  isLoggedin={auth.isLoggedin}
                />
              }
            />
            <Route
              exact
              path="/user/:userId"
              element={
                <PrivateRoute
                  element={UserProfile}
                  path="/user"
                  isLoggedin={auth.isLoggedin}
                />
              }
            />
            <Route path="" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
