import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import router from "./routes/auth.routes.js";
import { allowed_origin, production, secret } from "./config.js";

const app = express();
app.disable("x-powered-by");

app.use(
  cors({
    origin: allowed_origin,
    credentials: true,
  })
);
app.options("*", cors());

app.use(cookieParser());

app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax",
      secure: production ? true : false,
      httpOnly: true,
    },
  })
);

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api", router);

export default app;
