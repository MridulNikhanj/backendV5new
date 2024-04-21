import app from "./app.js";
import cloudinary from "cloudinary";
import express from "express";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET
})

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req,res) => 
res.sendFile(path.join(__dirname, "/frontend/dist/index.html")));


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})