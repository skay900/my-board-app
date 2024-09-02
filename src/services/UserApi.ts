import axios from 'axios';
import config from '../config';
import { IFormInput } from '../types/Interfaces';

const API_BASE = config.DOMAIN.API_SERVER;
const LOGIN_URL = config.ENDPOINT.LOGIN;

export const fetchLogin = async (data: IFormInput) => {
  const response = await axios.post(`${API_BASE}${LOGIN_URL}`, data);

  return response.data;
};

export const fetchUserInfo = async () => {
  const response = await axios.get(`${API_BASE}/user-info`);

  return response.data;
};
