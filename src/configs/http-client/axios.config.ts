/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, type AxiosResponse } from 'axios';
import { type CommonHttpClient, type CommonHttpResponse } from './httpClient';
import {
  CommonHttpException,
  SpecificHttpException,
  UnauthorizedException,
  UnknownHttpException,
  isAuthenticationErrorCode,
  isCommonErrorCode,
} from './httpErrors';

/** axios config  */
export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 15000,
});

/** interceptor config */
axiosClient.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (axios.isAxiosError(error) && error.response) {
      const response = error.response as AxiosResponse<
        CommonHttpResponse<unknown>
      >;
      const errors = response.data.errors;

      // 전역 에러는 첫 에러를 중점으로 처리하기
      const errorCodeOfFisrtError = errors?.[0].errorCode;

      // 인증 에러
      if (isAuthenticationErrorCode(errorCodeOfFisrtError)) {
        return Promise.reject(
          new UnauthorizedException('UnauthorizedException'),
        );
      }

      // 글로벌 에러 처리
      if (isCommonErrorCode(errorCodeOfFisrtError)) {
        return Promise.reject(new CommonHttpException('CommonHttpException'));
      }

      // 각 도메인의 에러
      if (errors) {
        return Promise.reject(
          new SpecificHttpException('SpecificHttpException', errors),
        );
      }
    }

    // 진짜 알 수 없는 에러
    console.error(error);
    return Promise.reject(new UnknownHttpException('UnknownHttpException'));
  },
);

class CommonHttpAxiosClientImpl implements CommonHttpClient {
  constructor(private readonly client: AxiosInstance) {}

  async get<T = any>(url: string, config?: any): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T = any, D = any>(
    url: string,
    data?: D,
    config?: any,
  ): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async patch<T = any, D = any>(
    url: string,
    data?: D,
    config?: any,
  ): Promise<T> {
    const response = await this.client.patch<T>(url, data, config);
    return response.data;
  }

  async delete<T = any>(url: string, config?: any): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

export const httpClient: CommonHttpClient = new CommonHttpAxiosClientImpl(
  axiosClient,
);
