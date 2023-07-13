const rest = new(require('rest-mssql-nodejs'))(
    {
        user:"sa",
        password:"1234",
        server:"127.0.0.1",
       // server:"DESKTOP-F8FHJ7K\SQLEXPRESS",
        database:"sakila",
    }
    )
    
    module.exports=rest;