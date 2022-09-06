const SignUp = require("../model/SignUp");
exports.signUp = (req, res) => {
        SignUp.get_signUp(function(result) {
            console.log(result);
            res.render("signUp", { data: result });
        });
    }
    // 회원가입
exports.post_signUp = (req, res) => {
    SignUp.post_signUp(req.body, function() {
        var data = {
            id: req.body.id,
            pw: req.body.pw,
            name: req.body.name,
        }
        res.send(data);
        console.log("what : ", data)
    });
}


// 로그인
exports.login = (req, res) => {
    SignUp.login(req.body.id, req.body.pw, function(result) {


    });
}



// 수정
exports.sign_up_update = (req, res) => {
    SignUp.sign_up_update(req.body, function() {
        res.send(req.body);
    });
}

// 탈퇴
exports.sign_up_del = (req, res) => {
    SignUp.sign_up_del(req.body.id, function() {

        res.send("삭제");
    });
}