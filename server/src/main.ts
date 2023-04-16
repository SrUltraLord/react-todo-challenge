import express from "express";

const APP_DEFAULT_PORT = 5000;

const app = express();

app.listen(APP_DEFAULT_PORT, () =>
  console.log(`Server running on port ${APP_DEFAULT_PORT}`)
);
