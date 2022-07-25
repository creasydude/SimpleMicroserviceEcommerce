import makeAuth from "../auth";
import { makeAuthInterface } from "../interfaces/auth.interface";
import { injectDbInterface } from "../interfaces/db.interface";

export default function makeRegister({ userDb }: injectDbInterface) {
  return async function register(authInfo: makeAuthInterface) {
    if (!authInfo.email) throw new Error("No Credentials Found");
    const user = await makeAuth(authInfo);
    const exist = await userDb.findbyProp({
      prop: "email",
      value: user.getEmail()!,
    });

    if (exist) {
      const createNewOtp = await userDb.update({
        _id: exist._id,
        otp: user.getEncryptedGeneratedOtp(),
        otpExpireDate: user.generateOtpExpireDate(),
      });

      //TODO : You can implant email sender login here but i use simple console log otp
      console.log(`${user.getEmail()} | OTP : ${user.generateOtp()}`);

      return createNewOtp;
    }

    const createUser = await userDb.insert({
      userId: user.getGeneratedId(),
      email: user.getEmail()!,
      otp: user.getEncryptedGeneratedOtp(),
      otpExpireDate: user.generateOtpExpireDate(),
    });

    //TODO : You can implant email sender login here but i use simple console log otp
    console.log(`${user.getEmail()} | OTP : ${user.generateOtp()}`);

    return createUser;
  };
}
