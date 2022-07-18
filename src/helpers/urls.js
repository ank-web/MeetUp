export const APIURLS = {
    login: () => `https://codeial.codingninjas.com:8000/api/v2/users/login`,
    signup: () => `https://codeial.codingninjas.com:8000/api/v2/users/signup`,
    fetchPost : (page=1, limit=5) => `https://codeial.codingninjas.com:8000/api/v2/posts?page=${page}&limit=${limit}`,
}