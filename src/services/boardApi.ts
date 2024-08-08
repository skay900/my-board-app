import axios from 'axios';

const API_DOMAIN = 'https://jsonplaceholder.typicode.com/';
const POSTS = 'posts'

export const fetchPosts = async () => {
    const response = await axios.get(API_DOMAIN + POSTS);
    return response.data;
};
