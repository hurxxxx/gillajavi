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
    
    return await datas.db.oneOrNone("select * from gj_ddusers where id = $1",params);
}

async function updateUser(body){
    let id = body.id;
    let params = [id];

    await datas.db.tx (async t => {
        await t.none("update gj_users set name = '1' where id = $1",params);
        //await t.none("update ddddd set name = '3' where id = $1",params);
        await t.none("update gj_users set name = '4' where id = $1",params);
    })
    return;
}

module.exports = {
    createUser,
    listUser,
    getUser,
    updateUser
}
