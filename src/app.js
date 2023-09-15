import express from "express";
import applyAllMiddleware from "./middlewares/index.js";
import router from "./routes/index.js";

const app = express();

// Middleware
applyAllMiddleware(app)
// Router
app.use("/api/v1", router);

app.get("/health", (req, res)=>{
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

export default app;
