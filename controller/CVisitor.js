const Visitor = require("../model/Visitor");
exports.visitor = (req, res) => {
        Visitor.get_visitor(function(result) {
            console.log(result);
            res.render("visitor", { data: result });
        });
    }
    /////////////////////
    //  model insert 등록 코드
exports.post_visitor = (req, res) => {
        Visitor.post_visitor(req.body, function(result) {
            var data = {
                id: result,
                name: req.body.name,
                comment: req.body.comment,
            }
            res.send(data);
        });
    }
    /////////////////////받아오기///////////////////////
exports.visitor_get = (req, res) => {
        // id 받아 연결
        Visitor.visitor_get(req.body.id, function(result) {
            if (result.length > 0) res.send(result[0]);
            else res.send("잘못했어요...:(");


        });
    }
    /////////////////////////수정//////////////////////
exports.visitor_revice = (req, res) => {
    Visitor.visitor_revice(req.body, function() {
        res.send(req.body);
    });
}

////////////////////////삭제//////////////////////////
exports.visitor_delete = (req, res) => {
    Visitor.visitor_delete(req.body.id, function() {

        res.send("삭제");
    });
}