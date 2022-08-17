const datas = require("../datasource");
const { v4: uuidv4 } = require('uuid');

async function createUser(body){
    let id = uuidv4();
    let params = {id:id , ... body};
    await datas.db.none("insert into gj_users(id,user_id,password,name) values($/id/,$/userId/,$/password/,$/name/)",params);
    return id
}

async function listUser(body){
    return await datas.db.manyOrNone("select * from gj_users");
}

async function getUser(body){
    let id = body.id;
    let params = [id];
    console.log(body);
    console.log(id);
    return await datas.db.oneOrNone("select * from gj_users where id = $1",params);
}

module.exports = {
    createUser,
    listUser,
    getUser
}
