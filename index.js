const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
//////////////express 선언 후////////////////
app.set("view engine", "ejs");
app.use("/static", express.static("static"))
app.use("/uploads", express.static("uploads"))
const port = 3000;

app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//router을 불러오는 부분 특정 시작 url의 역할을 나눌 수 있다.
const router = require("./routes");
app.use("/", router);


app.listen(port, () => {
    console.log("server open: ", port);
});