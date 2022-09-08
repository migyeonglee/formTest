var express = require("express");
var controller = require("../controller/Cmain");
// router기능을 사용
const router = express.Router();

// 접속 url
router.get("/", controller.main);
router.get("/get", controller.getTest);
router.post("/login", controller.login);
/////////////////////////////////////////////////////////////
var controllerV = require("../controller/CVisitor");
router.get("/visitor", controllerV.visitor);
router.post("/visitor/post", controllerV.post_visitor);
router.post("/visitor/del", controllerV.visitor_delete);
router.post("/visitor/get", controllerV.visitor_get);
router.post("/visitor/revice", controllerV.visitor_revice);

//////////////////////////////////////////////////////////////
var controllerU = require("../controller/CsignUp");
// 가져오기
router.get("/signUp", controllerU.signUp);
// 회원가입
router.post("/signUp/post", controllerU.post_signUp);
// 로그인
router.post("/signUp/login", controllerU.login);
// 수정
router.post("/signUp/update", controllerU.sign_up_update);
// // 탈퇴
router.post("/signUp/delete", controllerU.sign_up_del);



// 모듈로 사용
module.exports = router;