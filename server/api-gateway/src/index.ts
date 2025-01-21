import express, { Request, Response, NextFunction } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/users",
  createProxyMiddleware({
    target: "http://user-service:3001",
    changeOrigin: true,
  })
);
// app.use(
//   "/task",
//   createProxyMiddleware({
//     target: "http://product-service:3002",
//     changeOrigin: true,
//   })
// );

app.get("/", (_: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(3000, () => console.log("API Gateway is running on port 3000"));
