import { Request, Response } from "express";
import {
  httpRequestInterface,
  httpResponseInterface,
} from "../interfaces/http.interface";

export default function expressCallback(controller: Function) {
  return (req: Request, res: Response) => {
    const httpRequest: httpRequestInterface = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
        UserID: req.get("UserID"),
      },
    };
    controller(httpRequest)
      .then((httpResponse: httpResponseInterface) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch((err: any) => {
        res.status(500).send({ message: "Internal Server Error", err });
      });
  };
}
