import axios from "axios";

const devUrl = "http://localhost:5000";

export const fetchPosts = () => axios.get(`${devUrl}/posts`);

export const createPost = newPost => axios.post(`${devUrl}/posts`, newPost)

export const updatePost = (id, updatedPost) => axios.patch(`${devUrl}/posts/${id}`, updatedPost)

export const deletePost = (id) => axios.delete(`${devUrl}/posts/${id}`)

export const likePost = (id) => axios.patch(`${devUrl}/posts/${id}/likePost`)
