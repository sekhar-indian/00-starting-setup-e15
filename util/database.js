const mySql=require('mysql2');

const pool=mySql.createPool({
    host:'localhost',
    user:'root',
    password:'1122',
    datbase:'databace1'

});

module.exports=pool.promise();