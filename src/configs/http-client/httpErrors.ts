import { ValueOf } from '@semo-utils/types/utilTypes';

export type CommonHttpErrorScheme = {
  field?: string;
  errorCode: CommonHttpErrorCodeType;
  message: string;
};

export const CommonHttpErrorCode = {
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  INVALID_REQUEST: 'INVALID_REQUEST',
  RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
} as const;

export type CommonHttpErrorCodeType = ValueOf<typeof CommonHttpErrorCode>;

export type AuthenticationErrorCode = Extract<
  CommonHttpErrorCodeType,
  'AUTHENTICATION_ERROR' | 'AUTHORIZATION_ERROR'
>;

export const isCommonErrorCode = (
  errorCode: string | undefined,
): errorCode is CommonHttpErrorCodeType => {
  return Object.values(CommonHttpErrorCode).includes(errorCode as never);
};

export const isAuthenticationErrorCode = (
  errorCode: string | undefined,
): errorCode is AuthenticationErrorCode => {
  return ['AUTHENTICATION_ERROR', 'AUTHORIZATION_ERROR'].includes(
    errorCode as never,
  );
};

// 각 기능에서 사용 될 구분 가능한 http 에러
export class SpecificHttpException extends Error {
  constructor(
    message: string,
    public errors: Array<CommonHttpErrorScheme>,
  ) {
    super(message);
    this.name = 'SpecificHttpException';
  }
}

export class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedException';
  }
}

export class CommonHttpException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CommonHttpException';
  }
}

export class UnknownHttpException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnknownHttpException';
  }
}
