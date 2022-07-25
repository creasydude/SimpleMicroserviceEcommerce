import { injectDbInterface } from "../interfaces/db.interface";
import { makeAuthInterface } from "../interfaces/auth.interface";
import makeAuth from "../auth";

export default function makeResendOtp({ userDb }: injectDbInterface) {
  return async function resendOtp(authInfo: makeAuthInterface) {
    if (!authInfo.email) throw new Error("Enter Credentials");
    const user = await makeAuth(authInfo);
    const exist = await userDb.findbyProp({
      prop: "email",
      value: user.getEmail()!,
    });
    if (!exist) throw new Error("Invalid Credentials Or User Not Exist");

    const createNewOtp = await userDb.update({
      _id: exist._id,
      otp: user.getEncryptedGeneratedOtp(),
      otpExpireDate: user.generateOtpExpireDate(),
    });

    //TODO : You can implant email sender login here but i use simple console log otp
    console.log(`${user.getEmail()} | OTP : ${user.generateOtp()}`);

    return createNewOtp;
  };
}
