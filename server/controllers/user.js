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

module.exports = {
    newUser,
    listUser,
    getUser
}