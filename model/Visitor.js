const mysql = require("mysql");
// 로컬에 있는 mysql 연결 
const cnn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "mi04090506!!",
    database: "test"
});

cnn.query('SELECT * FROM visitor', (err, rows) => {
    // 에러가 났을 경우 
    if (err) throw err;
    // 안난다면 console 찍힘
    console.log("visitor: ", rows)
});
// (cb) => function (cb)
exports.get_visitor = (cb) => {
        var sql = 'SELECT * FROM visitor';
        // rows = 결과값 -> result에서 사용
        cnn.query(sql, (err, rows) => {
            if (err) throw err;
            console.log("visitor: ", rows);
            cb(rows);
        });
    }
    // insert -> 
exports.post_visitor = (data, cb) => {
    var sql = `INSERT INTO visitor(name, comment) values('${data.name}','${data.comment}')`;

    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log("visitor: ", result);
        cb(result.insertId);
    });
}
exports.visitor_get = (id, cb) => {
    var sql = `SELECT * FROM visitor WHERE id = ${id}`;

    // rows = 결과값 -> result에서 사용
    cnn.query(sql, (err, rows) => {
        if (err) throw err;

        cb(rows);
    });
}
exports.visitor_revice = (data, cb) => {
    var sql = `UPDATE visitor SET name = '${data.name}', comment = '${data.comment}' WHERE id = ${data.id}`;

    cnn.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        cb();
    });
}
exports.visitor_delete = (id, cb) => {
    var sql = `DELETE FROM visitor WHERE id = ${id}`;
    // rows = 결과값 -> result에서 사용
    cnn.query(sql, (err, result) => {
        if (err) throw err;
        cb();
    });
}