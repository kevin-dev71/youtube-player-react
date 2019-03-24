import axios from 'axios';

const KEY = 'AIzaSyBanPqMiDGbf1Li3ixm3rgJJYcHbxG_JD8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
