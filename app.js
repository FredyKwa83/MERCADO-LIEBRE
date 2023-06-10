const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.listen(3006, () => {
    console.log("servidor corriendo")
})

app.get("/mio" , (req, res) => {
    res.sendFile(path.join(__dirname, "./view/index.html"))
});

app.get("/ingresar", (req, res) => {
    res.sendFile(path.join(__dirname, "./view/ingresar.html"))
});

