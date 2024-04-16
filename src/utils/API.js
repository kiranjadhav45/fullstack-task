import { config } from './conf';
import axios from 'axios';

const GetApi = async (url) => {
    try {
        const newUrl = `${config.domain}${url}`;
        const apiResponse = await axios.get(newUrl);
        return apiResponse.data;
    } catch (error) {
        return error;
    }
};

const PostApi = async (payload) => {
    const { url, data } = payload
    console.log(payload)
    const newUrl = `${config.domain}${url}`;
    const userData = JSON.stringify(data)
    try {
        const headers = {
            'Content-Type': 'application/json',
        };
        const apiResponse = await axios.post(newUrl, userData, { headers });
        return apiResponse.data
    } catch (error) {
        return error;
    }
};


export { GetApi, PostApi }

