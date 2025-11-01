import express from "express";
const app = express();
app.get("/health", (_, res) => res.json({ ok: true }));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Running on ${port}`));
