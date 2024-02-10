import { app } from "./app.js";
import { config } from "dotenv";
config({
  path: "./data/config.env",
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server Listening on Port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
