import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode as btoa } from 'base-64';
import jwtDecode from 'jwt-decode';
import qs from 'qs';

import { makeRequest } from './request';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'movieflix';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'movieflix123';

type LoginData = {
  username: string;
  password: string;
}

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userName: string;
  userId: number;
}

type AccessToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
}

export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

export async function makeLogin(loginData: LoginData) {
  const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

  const headers = {
    Authorization: `Basic ${btoa(token)}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  const payload = qs.stringify({ ...loginData, grant_type: 'password' });

  const response = await makeRequest({ url: '/oauth/token', data: payload, method: 'POST', headers });

  saveSessionData(response.data);
}

export function saveSessionData(loginResponse: LoginResponse) {
  AsyncStorage.setItem('@movieflix:access_token', JSON.stringify(loginResponse));
}

export async function getSessionData() {
  const sessionData = await AsyncStorage.getItem('@movieflix:authData') ?? '{}';
  const parsedSessionData = JSON.parse(sessionData);

  return parsedSessionData as LoginResponse;
}

export async function getAccessTokenDecoded() {
  const sessionData = await getSessionData();

  try {
    const tokenDecoded = jwtDecode(sessionData.access_token);
    return tokenDecoded as AccessToken;
  } catch (error) {
    return {} as AccessToken;
  }
}

export async function isTokenValid() {
  const { exp } = await getAccessTokenDecoded();

  return Date.now() <= exp * 1000;
}

export async function isAuthenticated() {
  const sessionData = await getSessionData();

  return sessionData.access_token && isTokenValid();
}

export async function logout() {
  localStorage.removeItem('authData');
}
