/** 넓은 타입 정의를 위해 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonHttpErrorScheme } from './httpErrors';

export type CommonHttpResponseStatus = 'success' | 'fail' | 'error';

export interface CommonHttpResponse<T> {
  apiVersion: string;
  timestamp: string;
  status: CommonHttpResponseStatus;
  statusCode: number;
  message?: string;
  errors?: Array<CommonHttpErrorScheme>;
  data: T;
}

export interface CommonHttpClient {
  get<T = any>(url: string, config?: any): Promise<T>;
  post<T = any, D = any>(url: string, data?: D, config?: any): Promise<T>;
  patch<T = any, D = any>(url: string, data?: D, config?: any): Promise<T>;
  delete<T = any>(url: string, config?: any): Promise<T>;
}
