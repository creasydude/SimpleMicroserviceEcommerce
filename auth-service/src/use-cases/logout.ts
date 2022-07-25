import makeAuth from "../auth";

export default function makeLogout() {
  return async function logout(authInfo: any) {
    const refreshTokenCookie = authInfo.Authorization;
    if (!refreshTokenCookie) throw new Error("Authorization Token Not Found");
    const refreshToken = refreshTokenCookie.split(" ")[1];

    let user = await makeAuth({ refreshToken });
    const verify = user.verifyRefreshToken()
    if (Object.keys(verify).length === 0) throw new Error("Authorization Token Verify Failed");

    return "Logout Successfuly";
  };
}
