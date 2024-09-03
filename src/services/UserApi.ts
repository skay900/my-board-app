import axios from 'axios';
import config from '../config';
import { IFormInput } from '../types/Interfaces';

const { API_SERVER } = config.DOMAIN;
const { LOGIN } = config.ENDPOINT;
const { REGISTRATION } = config.ENDPOINT;
const { USER_INFO } = config.ENDPOINT;

export const fetchRegister = async (data: IFormInput) => {
  const response = await axios.post(`${API_SERVER}${REGISTRATION}`, data);

  return response.data;
};

export const fetchLogin = async (data: IFormInput) => {
  const response = await axios.post(`${API_SERVER}${LOGIN}`, data);

  return response.data;
};

export const fetchUserInfo = async () => {
  const response = await axios.get(`${API_SERVER}${USER_INFO}`);

  return response.data;
};
