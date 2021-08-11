import axios from 'axios';

const KEY = 'AIzaSyAjNzBzLDsoy7nZtT3H5NvpH4gSIRcpr-s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
});

