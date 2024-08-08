import axios from 'axios';
import config from '../config/config';

const LOGIN_API_DOMAIN = config.API_BASE_URL;

export const fetchLogin = async () => {
    const response = await axios.get(LOGIN_API_DOMAIN);
    return response.data;
};