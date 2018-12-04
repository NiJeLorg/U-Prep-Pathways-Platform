const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const httpStatus = require("http-status");
const helmet = require("helmet");
const pino = require("express-pino-logger")();
const cors = require("cors");
const uprepResponse = require("./server/middleware/response");
const routes = require("./server/routes/index.route");

// const APIError = require("./server/helpers/APIError");
const path = require("path");

const app = express();

app.use(cors());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(uprepResponse());
app.use(pino);
app.use(helmet());
app.use(express.static(path.resolve(__dirname, "public")));
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

// mount all routes on /api path
app.use("/api", routes);
// Setup a default catch-all route that sends back the index.html page
app.get("*", (req, res) => {
    res.sendFile("index.html", { root: "./public" });
});

// // if error is not an instanceOf APIError, convert it.
// app.use((err, req, res, next) => {
//     if (!(err instanceof APIError)) {
//         const apiError = new APIError(err.message, err.status, err.isPublic);
//         return next(apiError);
//     }
//     return next(err);
// });

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//     const err = new APIError("API not found", httpStatus.NOT_FOUND);
//     return next(err);
// });

module.exports = app;
