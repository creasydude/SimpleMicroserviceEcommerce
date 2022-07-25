import {
  register,
  login,
  resendOtp,
  refreshToken,
  validateToken,
  logout,
} from "../use-cases";
import makePostRegister from "./postRegister";
import makePostLogin from "./postLogin";
import makePostResendOtp from "./postResendOtp";
import makeGetRefreshToken from "./getRefreshToken";
import makeGetValidateToken from "./getValidateToken";
import makeDeleteLogout from "./deleteLogout";

const postRegister = makePostRegister({ register });
const postLogin = makePostLogin({ login });
const postResendOtp = makePostResendOtp({ resendOtp });
const getRefreshToken = makeGetRefreshToken({ refreshToken });
const getValidateToken = makeGetValidateToken({ validateToken });
const deleteLogout = makeDeleteLogout({ logout });

const authController = Object.freeze({
  postRegister,
  postLogin,
  postResendOtp,
  getRefreshToken,
  getValidateToken,
  deleteLogout,
});
export default authController;
export {
  postRegister,
  postLogin,
  postResendOtp,
  getRefreshToken,
  getValidateToken,
  deleteLogout,
};
