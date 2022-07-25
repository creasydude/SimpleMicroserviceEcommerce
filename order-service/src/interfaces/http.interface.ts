interface httpRequestInterface {
  body: {};
  query: {};
  params: {};
  ip: string;
  method: string;
  path: string;
  headers: {
    "Content-Type": string | undefined;
    Referer: string | undefined;
    "User-Agent": string | undefined;
    UserID: string | undefined;
  };
}

interface httpResponseInterface {
  headers: {};
  statusCode: number;
  body: any;
}

export {httpRequestInterface , httpResponseInterface}