import { APIURLS } from "../helpers/urls";
import { UPDATE_POSTS } from "./actionTypes";

export function fetchPosts() {
  return (dispatch) => {
    const url =APIURLS.fetchPost();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
