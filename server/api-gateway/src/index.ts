import express, { Request, Response, NextFunction } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/v1/auth",
  createProxyMiddleware({
    target: "http://auth:3001",
    changeOrigin: true,
  })
);
app.use(
  "/task",
  createProxyMiddleware({
    target: "http://task:3002",
    changeOrigin: true,
  })
);

app.get("/", (_: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.get("/health", (_: Request, res: Response) => {
  res.status(200).json({ status: "UP" });
});

app.listen(3000, () => console.log("API Gateway is running on port 3000"));
