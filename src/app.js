const express = require("express");
const applyAllMiddleware = require("./middlewares/index.js");
const router = require("./routes/index.js");

const app = express();

// Middleware
applyAllMiddleware(app)
// Router
app.use("/api/v1", router);

app.get("/health", (_req, res)=>{
    res.status(200).json({
        message: "OK"
    })
});

// Global Error Handler

app.use((err, _req, res, _next)=>{
    res.status(err.status || 500).json({
        message: err.message,
        error: err.errors
    })
})

module.exports = app;
