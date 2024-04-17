import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import router from "./routes/auth.routes.js";
import { allowed_origin, secret } from "./config.js";

const app = express();
app.disable("x-powered-by");

app.use(cookieParser());

// app.use(
//   session({
//     secret: secret,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 24 * 60 * 60 * 1000,
//       sameSite: "strict",
//       secure: true,
//       httpOnly: true,
//     },
//   })
// );

app.use(
  cors({
    origin: (origin, callback) => {
      allowed_origin;

      if (allowed_origin.includes(origin)) return callback(null, true);

      if (!origin) return callback(null, true);

      return callback(new Error("Not allowed by Cors"));
    },
    credentials: true,
  })
);

app.options("*", cors());

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.locals.session = req.session;
//   next();
// });

app.use("/api", router);

export default app;
