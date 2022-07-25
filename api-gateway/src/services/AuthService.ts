import { loginInterface, logoutInterface, refreshTokenInterface, registerInterface, resendOtpInterface, validateTokenInterface } from "../interfaces/authService.interface";
import { libraryHttpRequestInterface } from "../interfaces/service.interface";

const AUTH_SERVICE_API_URL = <string>process.env.AUTH_SERVICE_API_URL

export default function makeAuthService({ httpLibrary } : libraryHttpRequestInterface) {
    const req = httpLibrary.create({
        withCredentials: true,
        baseURL: AUTH_SERVICE_API_URL,
    })
    async function register({email} : registerInterface) {
        const body = await req.post("/auth/register",{email});
        return body;
    }

    async function login({email , otp} : loginInterface) {
        const body = await req.post("/auth/login", {email , otp});
        return body;
    }

    async function logout({Authorization} : logoutInterface) {
        const body = await req.delete("/auth/logout",{headers: {Cookie : Authorization}});
        return body;
    }

    async function resendOtp({email} : resendOtpInterface) {
        const body = await req.post("/auth/resendOtp", {email});
        return body;
    }

    async function refreshToken({Authorization} : refreshTokenInterface) {
        const body = await req.get("/auth/refreshToken",{headers: {Cookie: Authorization}});
        return body;
    }

    async function validateToken({tokenToVerify}: validateTokenInterface) {
        const body = await req.get(`/auth/validateToken/${tokenToVerify}`);
        return body;
    }



    return Object.freeze({
        register,
        login,
        logout,
        resendOtp,
        refreshToken,
        validateToken,
    })
}