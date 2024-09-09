import axios from 'axios';
import config from '../config';
import { IFormInput } from '../types/Interfaces';
import Cookies from 'js-cookie';

const { API_SERVER } = config.DOMAIN;
const { LOGIN } = config.ENDPOINT;
const { REGISTRATION } = config.ENDPOINT;
const { USER_INFO } = config.ENDPOINT;
const { NAVER_LOGIN_URL } = config.ENDPOINT;
const { GOOGLE_LOGIN_URL } = config.ENDPOINT;

export const registerUser = async (data: IFormInput) => {
  const response = await axios.post(`${API_SERVER}${REGISTRATION}`, data);

  return response.data;
};

export const fetchLogin = async (data: IFormInput) => {
  const response = await axios.post(`${API_SERVER}${LOGIN}`, data);

  return response.data;
};

export const fetchUserInfo = async () => {
  // 쿠키에서 accessToken 가져오기
  const email = Cookies.get('email');
  const accessToken = Cookies.get('accessToken');

  // accessToken이 없으면 요청하지 않음
  if (!email && !accessToken) {
    throw new Error('Access token or Email is missing');
  }

  const response = await axios.get(`${API_SERVER}${USER_INFO}?email=${email}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  return response.data;
};

export const redirectToNaver = () => {
  window.location.href = `${API_SERVER}${NAVER_LOGIN_URL}`;
};

export const redirectToGoogle = () => {
  window.location.href = `${API_SERVER}${GOOGLE_LOGIN_URL}`;
};
