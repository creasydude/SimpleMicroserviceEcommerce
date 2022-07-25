import { ResolverContext } from "../../../interfaces/express.interface";
import {
  registerArgsInterface,
  loginArgsInterface,
  resendOtpArgsInterface,
} from "../../../interfaces/schema.interface";
import { AuthService } from "../../../services";

const register = async (
  parent: any,
  args: registerArgsInterface,
  context: ResolverContext
) => {
  const { email } = args.input;
  const { data, status } = await AuthService.register({ email });
  return {
    status,
    userId: data.registered.userId,
    email: data.registered.email,
    otp: data.registered.otp,
    otpExpireDate: data.registered.otpExpireDate,
  };
};

const login = async (
  parent: any,
  args: loginArgsInterface,
  context: ResolverContext
) => {
  const { email, otp } = args.input;
  const { data, status, headers } = await AuthService.login({ email, otp });
  //TODO : this should be clean
  const setCookie = headers["set-cookie"]?.[0];
  context.res.set("Set-Cookie", setCookie);
  return {
    status,
    accessToken: data.accessToken,
  };
};

const logout = async (parent: any, args: any, context: ResolverContext) => {
  const Authorization = `Authorization=${context.req.cookies?.Authorization}`;
  const { data, status } = await AuthService.logout({ Authorization });
  context.res.clearCookie("Authorization");
  return {
    status,
    message: data.message,
  };
};

const resendOtp = async (
  parent: any,
  args: resendOtpArgsInterface,
  context: ResolverContext
) => {
  const { email } = args.input;
  const { data, status } = await AuthService.resendOtp({ email });
  return {
    status,
    userId: data.user.userId,
    email: data.user.email,
    otp: data.user.otp,
    otpExpireDate: data.user.otpExpireDate,
  };
};

export { register, login, logout, resendOtp };
