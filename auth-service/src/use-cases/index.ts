import makeRegister from "./register";
import makeLogin from "./login";
import makeResendOtp from "./resendOtp";
import makeRefreshToken from "./refreshToken";
import makeValidateToken from "./validateToken";
import makeLogout from "./logout";

import { userDb } from "../data-access";

const register = makeRegister({ userDb });
const login = makeLogin({ userDb });
const resendOtp = makeResendOtp({ userDb });
const refreshToken = makeRefreshToken();
const validateToken = makeValidateToken({ userDb });
const logout = makeLogout();

const authService = Object.freeze({
  register,
  login,
  resendOtp,
  refreshToken,
  validateToken,
  logout,
});
export default authService;
export { register, login, resendOtp, refreshToken, validateToken, logout };
