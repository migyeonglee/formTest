const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
//////////////express 선언 후////////////////
app.set("view engine", "ejs");
app.use("/static", express.static("static"))
app.use("/uploads", express.static("uploads"))
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

////////////////////저장할 공간에 대한 세부설정//////////////////////////
// const upload = multer({
//     // 저장 공간의 설정을 위한 메소드

//     storage: multer.diskStorage({

//         //목적지 함수
//         destination(req, file, done) {
//             done(null, 'uploads/');
//         },
//         // 파일 name 설정 함수
//         filename(req, file, done) {
//             //path 파일 경로 이름 관리 extname 확장자 basename 확장자 제외
//             const ext = path.extname(file.originalname);
//             //  + Date.now() 는 현재시간
//             // done(null, path.basename(file.originalname, ext) + ext);
//             done(null, req.body.id + ext);


//         },
//     }),
//     //파일 용량 제한
//     limits: { fileSize: 5 * 1024 * 1024 },
// });
// ////////////////////////////////////////////////


// /////////////// 주소에 관한 query/////////////
// app.get("/", (req, res) => {
//     // main 안 내용을 보여줌
//     res.render("upload");
// });
// //////////////////////////////////////////////
// // upload.single (미들웨어) 다음 요청으로 넘어감  array로 바꾸면 여러개 가능
// app.post("/upload", upload.single("userfile"), (req, res) => {
//     // app.post("/upload", upload.fields(({ name: "userfile" }, { name: "userfile1" })), (req, res) => {

//     console.log(req.body);
//     //파일이 하나일 시 file 여러개 files
//     console.log(req.file);
//     // res.send("업로드 성공");
//     // res.render(req.file.filename);
//     res.send(req.file.filename);

// });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/", (req, res) => {

    res.render("aaaa");
});
app.post("/post/axios", (req, res) => {

    if (req.body.id == "dkseho" || req.body.pw == "dksehlsekrh") {
        console.log(req.body);
        res.send("로그인성공");
    } else {
        res.send("로그인실패");

    }
});
//////////////////////////////////////////////////
// app.get("/get/axios", (req, res) => {
//     console.log(req.query);
//     var data = {
//         name: req.query.name,
//         gender: req.query.gender,
//         birthYear: req.query.birthYear,
//         birthMonth: req.query.birthMonth,
//         birthDay: req.query.birthDay,
//         interest: req.query.interest,

//     }
//     res.send(data);

// });
///////////////////////////////////////////////////
// app.post("/get/ajax", (req, res) => {
//         console.log(req.body);
//         var data = {
//             name: req.body.name
//         }
//         res.send(data);
//     })
///////////////////////////////////////////////////
// app.get("/get", (req, res) => {
//     //문자열을 보여줌
//     console.log(req.query);
//     // res.send("get 요청");
//     res.render("main", {
//         name: req.query.name,
//     });
// });

////////////////////////////////////////////////////////
// app.get("/get", (req, res) => {
//     //실습
//     console.log(req.query);

//     res.render("test", {
//         name: req.query.name,
//         gender: req.query.gender,
//         birthYear: req.query.birthYear,
//         birthMonth: req.query.birthMonth,
//         birthDay: req.query.birthDay,
//         interest: req.query.interest,

//     });
// });
/////////////////////////////////////////////////////////
// app.get("/get/axios", (req, res) => {
//     //실습
//     console.log(req.body);

//     res.render("main", {
//         name: req.query.name,
//         gender: req.query.gender,

//     });
// });
///////////////////////////////////////////////////////
// app.post("/post", (req, res) => {
//     // 실습
//     res.render("aaaa", {
//         name: req.body.name,
//         gender: req.body.gender,
//         birthYear: req.body.birthYear,
//     });
// });
/////////////////////////////////////////////////////
// app.get("/get", (req, res) => {
//     //문자열을 보여줌
//     console.log(req.query);
//     // res.send("get 요청");
//     res.render("aaaa", {
//         name: req.query.name,
//     });
// });
//////////////////////////////////////////////////////////////
// app.post("/post", (req, res) => {
//     console.log(req.body);
//     res.render("aaaa", {
//         name: req.body.name,
//         gender: req.body.gender,
//     });
// });


/////////////// 서버  open ////////////////////
app.listen(port, () => {
    console.log("server open: ", port);
});