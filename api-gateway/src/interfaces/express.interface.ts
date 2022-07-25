import { Request, Response } from "express";

interface ResolverContext {
  req: ReqWithSessionRole;
  res: Response;
}

interface httpResponseInterface {
  headers: {};
  statusCode: number;
  body: {};
  session: {};
  cookie?: {
    name: string;
    value: string;
    options: {};
  };
  clearCookie?: string;
}

interface httpRequestInterface {
  body: {};
  query: {};
  params: {};
  signedCookies: {};
  cookies: {};
  ip: string;
  method: string;
  path: string;
  session: {} | undefined;
  headers: {
    "Content-Type": string | undefined;
    Referer: string | undefined;
    "User-Agent": string | undefined;
    Authorization: string | undefined;
  };
}

interface sessionInterface {
  userId?: string;
  iat?: string;
  exp?: string;
}

interface ReqWithSessionRole extends Request {
  session?: sessionInterface;
}

interface middlewareResponseInterface {
  session?: sessionInterface;
}

export {
  httpRequestInterface,
  httpResponseInterface,
  ReqWithSessionRole,
  middlewareResponseInterface,
  ResolverContext,
};
