import makeAuth from "../auth";
import { makeAuthInterface } from "../interfaces/auth.interface";
import { injectDbInterface } from "../interfaces/db.interface";

export default function makeLogin({ userDb }: injectDbInterface) {
  return async function login(authInfo: makeAuthInterface) {
    if (!authInfo.email || !authInfo.otp)
      throw new Error("No Credentials Found");
    let user = await makeAuth(authInfo);
    const exist = await userDb.findbyProp({
      prop: "email",
      value: user.getEmail()!,
    });
    if (!exist) throw new Error("User Not Found , Try Register");

    // In Here We Get otp hashedValue & otpExpireDate from db and give it to makeAuth to compare Otps.
    const newAuthInfo = {
      ...authInfo,
      userId: exist.userId,
      hashedValue: exist.otp,
      otpExpireDate: exist.otpExpireDate,
    };
    user = await makeAuth(newAuthInfo);

    const compareOtps = user.compareOtps();
    const compareOtpExpireDate = user.compareOtpExpireDate();

    if (!compareOtps) throw new Error("Invalid Credentials");
    if(!compareOtpExpireDate) throw new Error("Otp Expired , Get New One");

    const accessToken = `Bearer ${user.generateAccessToken()}`;
    const refreshToken = `Bearer ${user.generateRefreshToken()}`;

    const tokens = {
      accessToken,
      refreshToken
    }

    return tokens;

  };
}
