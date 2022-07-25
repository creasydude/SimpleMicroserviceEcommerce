import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

import buildMakeAuth from "./auth";

import * as time from "../helpers/time";
import otpGenerator from "../helpers/otpGenerator";

//TODO : You can change this from bcrypt to another library.
const encrypt = async (value: string) => {
  return await bcrypt.hash(value, 10);
};
const compare = async (
  value: string | undefined,
  hashedValue: string | undefined
) => {
  if (hashedValue == undefined || value == undefined) return false;
  return await bcrypt.compare(value, hashedValue);
};
//

//TODO : You can change this from uuid to another library
const idGenerator = () => {
  return uuidv4();
};
//

//TODO : You can change this from jsonwebtoken to another library.
const tokenSign = (
  userId: string | undefined,
  secretKey: string,
  expireTime: string
) => {
  if (!userId || !secretKey) return "";
  // if (!userId || !secretKey) throw new Error("User Id Not Found For Sign Token");
  return jwt.sign({ userId }, secretKey, { expiresIn: expireTime });
};

const tokenVerify = (
  token: string | undefined,
  secretKey: string
) => {
  if (!token || !secretKey) return {};
  // if (!token || !secretKey) throw new Error("Token Not Found");
  return jwt.verify(token, secretKey) as any;
};

//

const makeAuth = buildMakeAuth({
  encrypt,
  compare,
  time,
  otpGenerator,
  tokenSign,
  tokenVerify,
  idGenerator,
});

// TODO : REMOVE THIS
// const test = async () => {
//   const auth = await makeAuth({
//     otpExpireDate: "saturday",
//     email: "x",
//     otp: "7386",
//     hashedValue: "$2b$10$1d8.2y/1Ns15YY0B23GNJu/8EaJh8rZal6rpYnmkcTi./t2t4eRlC",
//     nowDate: "dawg"
//   });
//   console.log(auth.generateOtp());
//   console.log(auth.getEncryptedGeneratedOtp());
//   console.log(auth.compareOtps());
//   console.log(auth.getNowDate());
//   console.log(auth.generateOtpExpireDate());
//   console.log(auth.getOtpExpireDate());
//   console.log(auth.getEmail());
// };

// test();

export default makeAuth;
