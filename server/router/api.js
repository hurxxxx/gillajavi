var express = require('express');
var router = express.Router();
const datas = require("../datasource");
const { v4: uuidv4 } = require('uuid');

router.get('/', function(req, res, next) {
  res.send("no data")
  
});

router.get('/insert', function(req, res, next) {
  let query = "insert into gj_users(id,password,name) values($1,$2,$3)";
  let params = [uuidv4(),"1234","second"];

  datas.db.any(query,params).then(function (data) {
    console.log("DATA:", data.value);
    res.send(data)
  })
  .catch(function (error) {
      console.log("ERROR::::", error);
      res.send(error)
  });
  
});

router.get('/deleteAll', function(req, res, next) {
  let query = "delete from gj_users";
  datas.db.any(query).then(function (data) {
    console.log("DATA:", data.value);
    res.send(data)
  })
  .catch(function (error) {
      console.log("ERROR::::", error);
      res.send(error)
  });
  
});


module.exports = router;
