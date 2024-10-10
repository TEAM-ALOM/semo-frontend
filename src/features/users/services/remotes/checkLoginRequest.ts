import { httpClient } from '@/configs/http-client';
import { User } from '../../models/user';

export const API_CHECK_LOGIN = 'v1/auth/check-login';
export const checkLoginRequest = () => httpClient.post<User>(API_CHECK_LOGIN);
