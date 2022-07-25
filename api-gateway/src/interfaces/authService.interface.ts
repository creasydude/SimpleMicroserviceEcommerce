interface registerInterface {
  email: string;
}

interface loginInterface {
  email: string;
  otp: string;
}

interface resendOtpInterface {
  email: string;
}

interface validateTokenInterface {
  tokenToVerify: string;
}

interface logoutInterface {
  Authorization: string;
}

interface refreshTokenInterface {
  Authorization: string;
}

export {
  registerInterface,
  loginInterface,
  resendOtpInterface,
  validateTokenInterface,
  logoutInterface,
  refreshTokenInterface,
};
