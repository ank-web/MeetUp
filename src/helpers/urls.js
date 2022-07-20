export const APIURLS = {
  login: () => `https://codeial.codingninjas.com:8000/api/v2/users/login`,
  signup: () => `https://codeial.codingninjas.com:8000/api/v2/users/signup`,
  fetchPost: (page = 1, limit = 25) =>
    `https://codeial.codingninjas.com:8000/api/v2/posts?page=${page}&limit=${limit}`,
  editProfile: () => `https://codeial.codingninjas.com:8000/api/v2/users/edit`,
  userProfile: (userId) => `https://codeial.codingninjas.com:8000/api/v2/users/${userId}`,
  userFriends: () => `https://codeial.codingninjas.com:8000/api/v2/friendship/fetch_user_friends`,
  addFriend: (userId) =>
    `https://codeial.codingninjas.com:8000/api/v2/friendship/create_friendship?user_id=${userId}`,
  removeFriend: (userId) =>
    `https://codeial.codingninjas.com:8000/api/v2/friendship/remove_friendship?user_id=${userId}`,
  createPost: () => `https://codeial.codingninjas.com:8000/api/v2/posts/create`,
  createComment: () => `https://codeial.codingninjas.com:8000/api/v2/comments/`,
  toggleLike: (id, likeType) =>
    `https://codeial.codingninjas.com:8000/api/v2/likes/toggle?likeable_id=${id}&likeable_type=${likeType}`,
  userSearch: (searchText) => `https://codeial.codingninjas.com:8000/api/v2/users/search?text=${searchText}`,
};
