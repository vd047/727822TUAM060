import axios from "axios";

const URL = "http://20.244.56.144/test/users";
const POSTS_URL = "http://20.244.56.144/test/posts";


const axiosInstance = axios.create({
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTQ5NjI1LCJpYXQiOjE3NDMxNDkzMjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImIwMTZkOThhLTU4MGEtNDY1NC05YWU2LTg2YTE0MjFiMjg4NSIsInN1YiI6IjcyNzgyMnR1YW0wNjBAc2tjdC5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImIwMTZkOThhLTU4MGEtNDY1NC05YWU2LTg2YTE0MjFiMjg4NSIsImNsaWVudFNlY3JldCI6IlFLa2liSURRVVFiaXFCalAiLCJvd25lck5hbWUiOiJWaWRoeWEgRGV2aSIsIm93bmVyRW1haWwiOiI3Mjc4MjJ0dWFtMDYwQHNrY3QuZWR1LmluIiwicm9sbE5vIjoiNzI3ODIyVFVBTTA2MCJ9.3KgNIfnKMb77dSEFS2jQ1Vzebnvq_woFSEs-XScGJc4`
    }
});


export const fetchUsers = async () => {
    const response = await axiosInstance.get(URL);
    return response.data;
};


export const fetchUserPosts = async (userId) => {
    const response = await axiosInstance.get(`${URL}/${userId}/posts`);
    return response.data;
};


export const fetchUserComments = async (postId) => {
    const response = await axiosInstance.get(`${POSTS_URL}/${postId}/comments`);
    return response.data;
};


export const fetchPosts = async () => {
    const response = await axiosInstance.get(POSTS_URL);
    return response.data;
};
