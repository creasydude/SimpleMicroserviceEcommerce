import { Request, Response } from "express";
import { httpResponseInterface , httpRequestInterface } from "../interfaces/http.interface";

export default function makeExpressCallback(controller: Function) {
  return (req: Request, res: Response) => {
    const httpRequest : httpRequestInterface = {
      body: req.body,
      query: req.query,
      params: req.params,
      signedCookies: req.signedCookies,
      cookies: req.cookies,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
        "Authorization": req.get("Authorization"),
      },
    };
    controller(httpRequest)
      .then((httpResponse : httpResponseInterface) => {
        if (httpResponse.cookie) {
          const {name , value , options} = httpResponse.cookie;
          res.cookie(name , value , options);
        }
        if (httpResponse.clearCookie) {
          const cookieName = httpResponse.clearCookie;
          res.clearCookie(cookieName);
        }
        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch((err : any) => {
        res.status(500).send({ message: "Internal Server Error", err });
      });
  };
}