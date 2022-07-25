import {
  buildMakeAuthInterface,
  JwtPayload,
  makeAuthInterface,
  makeAuthReturnInterface,
} from "../interfaces/auth.interface";

export default function buildMakeAuth({
  encrypt,
  compare,
  time,
  otpGenerator,
  tokenSign,
  tokenVerify,
  idGenerator,
}: buildMakeAuthInterface) {
  return async function makeAuth({
    email,
    otp,
    refreshToken, //This Value Come From Cookie
    tokenToVerify, //This Value Come From req params
    userId, //This Value Come From DB
    hashedValue, //This Value Come From DB
    otpExpireDate, //This Value Come From DB
  }: makeAuthInterface): Promise<makeAuthReturnInterface> {
    const builtOtp = otpGenerator(
      parseInt(<string>process.env.OTP_GENERATE_NUMBER || "4")
    );
    const encryptGeneratedOtp = await encrypt(builtOtp);
    const compareOtps = await compare(otp, hashedValue);
    //TODO: You can change accessToken refreshToken expire here
    const accessTokenExpire: string = "30m";
    const refreshTokenExpire: string = "30d";
    const makeAccessToken = tokenSign(
      userId,
      <string>process.env.JWT_ACCESSTOKEN_SEC,
      accessTokenExpire
    );
    const makeRefreshToken = tokenSign(
      userId,
      <string>process.env.JWT_REFRESHTOKEN_SEC,
      refreshTokenExpire
    );

    const verifyRefreshToken = tokenVerify(
      refreshToken,
      <string>process.env.JWT_REFRESHTOKEN_SEC
    ) as JwtPayload;

    const getVerifiedToken = tokenVerify(
      tokenToVerify,
      <string>process.env.JWT_ACCESSTOKEN_SEC
    ) as JwtPayload;

    const getGenerateId = idGenerator();

    return Object.freeze({
      getEmail: () => email,
      generateOtp: () => builtOtp,
      getEncryptedGeneratedOtp: () => encryptGeneratedOtp,
      compareOtps: () => compareOtps,
      generateOtpExpireDate: () => time.addTime({ minutes: 5 }),
      compareOtpExpireDate: () => time.compareTime({ time: otpExpireDate }),
      generateAccessToken: () => makeAccessToken,
      generateRefreshToken: () => makeRefreshToken,
      verifyRefreshToken: () => verifyRefreshToken,
      getVerifiedToken: () => getVerifiedToken,
      getGeneratedId: () => getGenerateId,
    });
  };
}
