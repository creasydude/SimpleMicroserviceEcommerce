import { NextFunction, Response } from "express";
import { ReqWithSessionRole , middlewareResponseInterface } from "../interfaces/express.interface";
import { httpRequestInterface , httpResponseInterface } from "../interfaces/express.interface";

function makeExpressControllerCallback(controller: Function) {
  return (req: ReqWithSessionRole, res: Response) => {
    const httpRequest : httpRequestInterface = {
      body: req.body,
      query: req.query,
      params: req.params,
      signedCookies: req.signedCookies,
      cookies: req.cookies,
      ip: req.ip,
      method: req.method,
      path: req.path,
      session: req.session,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
        Authorization: req.get("Authorization"),
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
        if (httpResponse.session) {
          const session = httpRequest.session;
          req.session = session;
        }
        res.type("json");
        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch((err : any) => {
        res.status(500).send({ message: "Internal Server Error", err });
      });
  };
}

function makeMiddlewareExpressCallback(middleware : Function) {
    return (req : ReqWithSessionRole , res : Response , next: NextFunction) => {
        const httpRequest : httpRequestInterface = {
            body: req.body,
            query: req.query,
            params: req.params,
            signedCookies: req.signedCookies,
            cookies: req.cookies,
            ip: req.ip,
            method: req.method,
            path: req.path,
            session: req.session,
            headers: {
              "Content-Type": req.get("Content-Type"),
              Referer: req.get("referer"),
              "User-Agent": req.get("User-Agent"),
              Authorization: req.get("Authorization"),
            },
          };
          middleware(httpRequest)
          .then((response : middlewareResponseInterface) => {
              if (response.session) {
                  req.session = response.session
              }
              next()
          })
    }
}

export {makeExpressControllerCallback , makeMiddlewareExpressCallback}