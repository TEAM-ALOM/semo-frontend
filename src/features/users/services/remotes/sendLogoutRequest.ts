import { httpClient } from '@/configs/http-client';

export const API_LOGOUT = 'v1/auth/logout';

export const sendLogoutRequest = async () => httpClient.post(API_LOGOUT);
