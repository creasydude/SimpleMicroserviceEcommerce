interface httpResponseInterface {
    headers: {};
    statusCode: number;
    body: any;
    cookie?: {
      name : string;
      value: string;
      options : {};
    };
    clearCookie? : string;
  }
  
  interface httpRequestInterface {
    body: any,
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