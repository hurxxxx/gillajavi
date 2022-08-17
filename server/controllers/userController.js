const express = require('express');
const userService = require('../service/userService')

async function newUser(req, res, next){
    var result = await userService.createUser(req.body);
    res.send(result);
};

async function listUser(req, res, next){
    var result = await userService.listUser(req.body)
    res.send(result);
};

async function getUser(req, res, next){
    var id = req.params.id;
    var body = req.body;
    body.id = id;
    var result = await userService.getUser(body)
    console.log(result)
    res.send(result);
};

async function updateUser(req, res, next){
    //트랜잭션 테스트
    var id = req.params.id;
    var body = req.body;
    body.id = id;
    var result = await userService.updateUser(body);
    res.send("Updated");
};

module.exports = {
    newUser,
    listUser,
    getUser,
    updateUser
}