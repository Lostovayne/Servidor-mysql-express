import express from "express";
import dotenv from "dotenv";
import Router from "../routes/routes.js";
dotenv.config();
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);
app.set("view engine", "ejs");

//llamar al servidor
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
});

export default app;
