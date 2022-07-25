import { addTimeInterface, compareTimeInterface } from "./time.interface";

interface buildMakeAuthInterface {
  encrypt: (value: string) => Promise<string>;
  compare: (
    value: string | undefined,
    hashedValue: string | undefined
  ) => Promise<boolean>;
  time: {
    addTime: ({ minutes }: addTimeInterface) => string;
    compareTime: ({ time }: compareTimeInterface) => boolean;
  };
  otpGenerator: (num: number) => string;
  tokenSign: (
    userId: string | undefined,
    secretKey: string,
    expireTime: string
  ) => string;
  tokenVerify: (
    token: string | undefined,
    secretKey: string
  ) => JwtPayload;
  idGenerator: () => string;
}

interface makeAuthInterface {
  email?: string;
  otp?: string;
  refreshToken?: string;
  tokenToVerify?: string;
  userId?: string;
  hashedValue?: string;
  otpExpireDate?: string;
}

interface JwtPayload {
  userId: string;
  iat: number;
  exp: number;
}

interface makeAuthReturnInterface {
  getEmail: () => string | undefined;
  generateOtp: () => string;
  getEncryptedGeneratedOtp: () => string;
  compareOtps: () => boolean;
  generateOtpExpireDate: () => string;
  compareOtpExpireDate: () => boolean;
  generateAccessToken: () => string;
  generateRefreshToken: () => string;
  verifyRefreshToken: () => JwtPayload;
  getVerifiedToken: () => JwtPayload;
  getGeneratedId: () => string;
}

export { buildMakeAuthInterface, makeAuthInterface, makeAuthReturnInterface , JwtPayload };
