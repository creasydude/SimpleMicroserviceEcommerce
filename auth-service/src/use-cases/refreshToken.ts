import makeAuth from "../auth";

export default function makeRefreshToken() {
  return async function refreshToken(authInfo: any) {
    const refreshTokenCookie = authInfo.Authorization;
    if (!refreshTokenCookie) throw new Error("Authorization Token Not Found");
    const refreshToken = refreshTokenCookie.split(" ")[1];

    let user = await makeAuth({ refreshToken });
    const verifyToken = user.verifyRefreshToken();
    if (Object.keys(verifyToken).length === 0) throw new Error("Authorization Token Verify Failed");
    user = await makeAuth({ refreshToken, userId: verifyToken.userId });

    const accessToken = `Bearer ${user.generateAccessToken()}`;
    return accessToken;
  };
}
