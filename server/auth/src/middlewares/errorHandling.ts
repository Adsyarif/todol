import { NextFunction, Request, Response } from "express";

const errorHandling = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(500).json({ status: 500, message: err.message });
};

export default errorHandling;
