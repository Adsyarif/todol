import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json([{ id: 1, name: "Product A" }]);
});

app.listen(3002, () => console.log("Product service is running on port 3002"));
