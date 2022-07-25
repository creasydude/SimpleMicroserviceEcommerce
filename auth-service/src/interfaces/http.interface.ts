interface httpResponseInterface {
  headers: {};
  statusCode: number;
  body: {};
  cookie?: {
    name : string;
    value: string;
    options : {};
  };
  clearCookie? : string;
}

interface httpRequestInterface {
  body: {},
  query: {},
  params: {},
  signedCookies: {},
  cookies: {},
  ip: string,
  method: string,
  path: string,
  headers: {
    "Content-Type" : string | undefined;
    Referer: string | undefined;
    "User-Agent": string | undefined;
    "Authorization": string | undefined;
  },
}

export {httpResponseInterface , httpRequestInterface};