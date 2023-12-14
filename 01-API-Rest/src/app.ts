import express from "express";

import { dataSource } from "./config/dataSource";

import bookmarkRoutes from "./routes/bookmark.routes";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";

dataSource
  .initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Failed to connect to database", err));

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/bookmarks", bookmarkRoutes);
app.use("/users", userRoutes);
app.use("/", loginRoutes);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
