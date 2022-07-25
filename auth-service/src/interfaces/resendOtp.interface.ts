import { makeAuthInterface } from "./auth.interface";
import { userSchemaInterface } from "./db.interface";

interface resendOtpInterface {
    resendOtp: (authInfo: makeAuthInterface) => Promise<userSchemaInterface & {
        _id: any;
    }>
}

export { resendOtpInterface };
