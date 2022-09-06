// Cmain.js = app.js 

const Test = require("../model/Test");

// 경로와 연결될 함수(request객체 response 객체 사용) 내용 정의 

exports.main = (req, res) => {
    // var hi = Test.hello()
    // res.send(hi);
    res.render("aaaa");
}
exports.getTest = (req, res) => {
    console.log(req.query);
    res.send("성공");
}

exports.login = (req, res) => {
    var infor = Test.login();
    if (req.body.id == infor.id && req.body.pw == infor.pw) {
        console.log(req.body);
        res.send("로그인성공");
    } else {
        res.send("로그인실패");

    }
}