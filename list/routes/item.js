var express = require('express');
var router = express.Router();

var mysql=require('mysql');
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'baobei'
})

/* GET home page. */
router.get('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    pool.query('SELECT * FROM detail',function (err,rows) {
        res.send(rows)
    })
});
router.post('/', function(req, res, next) {
    var title=req.body.tit
    var time=req.body.time
    var name=req.body.name
    var content=req.body.con
    var sel=req.body.sel
  res.header('Access-Control-Allow-Origin','*')
    console.log(title,time,name,content,sel)
    pool.query(`INSERT INTO detail (title,time,name,content,uid) VALUES ('${title}','${time}','${name}','${content}','${sel}')`,function (err,rows) {
        res.send(rows)
    })
});

module.exports = router;
