import { httpClient } from '@semo-client/configs/http-client';
import { User } from '../../models/user';
import { UserLoginDto } from '../../models/userLoginDto';

export const API_LOGIN = 'v1/auth/login';

export const sendLoginRequest = async (userLoginDto: UserLoginDto) =>
  httpClient.post<User>(API_LOGIN, userLoginDto);
