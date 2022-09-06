const { response } = require("express");
const mysql = require("mysql");
// 로컬에 있는 mysql 연결 
const cnn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "mi04090506!!",
    database: "test"
});

cnn.query('SELECT * FROM signUp', (err, rows) => {
    // 에러가 났을 경우 
    if (err) throw err;
    // 안난다면 console 찍힘
    console.log("signUp: ", rows);
});
exports.get_signUp = (cb) => {
        var sql = 'SELECT * FROM signUp';
        // rows = 결과값 -> result에서 사용
        cnn.query(sql, (err, rows) => {
            if (err) throw err;
            console.log("signUp: ", rows);
            cb(rows);
        });
    }
    // 회원가입 C (insert)
exports.post_signUp = (data, cb) => {
        var sql = `INSERT INTO signUp(id, pw, name) values('${data.id}','${data.pw}','${data.name}')`;
        cnn.query(sql, (err, result) => {
            if (err) throw err;
            console.log("visitor: ", result);
            cb(result.insertId);
        });
    }
    ///////////////////////////////////////////////
    // 로그인 R (select)

exports.login = (id, cb) => {
    var sql = `SELECT * FROM signUp WHERE id = '${id}'limit 1 `;
    // rows = 결과값 -> result에서 사용
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        cb();
    });
}

// 수정 u (update)
exports.visitor_revice = (data, cb) => {
        var sql = `UPDATE signUp SET name = '${data.id}', comment = '${data.pw}' WHERE name = ${data.id}`;

        cnn.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb();
        });
    }
    // 탈퇴 d (delete)
exports.sign_up_del = (id, cb) => {
    var sql = `DELETE FROM signUp WHERE id = '${id}'`;
    // rows = 결과값 -> result에서 사용
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        cb();
    });
}