import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import { fetchPosts } from "../actions/posts";
import { Navbar, Home, Page404, Login } from "./index";
import PropTypes from "prop-types";


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/*<PostsList posts={posts}/>*/}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Routes>
              <Route exact path="/" element={<Home posts={posts} />} />
              <Route path="/login" element={<Login />} />
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
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
