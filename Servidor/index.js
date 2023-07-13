const rest=require("./config");
const cors=require("cors");
const bodyParser=require('body-parser')
//const bcrypt = require('bcrypt');


var express = require("express");
const app=express().use(cors());
app.use(bodyParser.json({limit:"6mb"}))


app.get("/", async function (req,res){
    await rest.executeQuery('select * from actor').then((data)=>{
      res.json(data)
    })
  });
//
  app.post("/checkA", async function (req,res){
    let body=req.body;
    await rest.executeQuery(
      `select first_name from users where username='${body.username}' and password='${body.password}'`).then((data)=>{
    res.json(data)
    })  
  });
//
  app.post("/new",async function (req,res){
    let body=req.body;
    await rest.executeQuery(
      `insert into actor (first_name, last_name, last_update, actor_status) values ('${body.firstname}','${body.lastname}',GETDATE(), 1)`).then((data)=>{
    res.json(data)
    })
  }) 
//
app.post("/edit",async function (req,res){
  let body=req.body;
  await rest.executeQuery(
    `update actor set first_name='${body.first_name}', last_name='${body.last_name}', last_update=GETDATE() where actor_id=${body.actor_id}`).then((data)=>{
  res.json(data)
  })
}) 
//
app.post("/remove",async function (req,res){
  let body=req.body;
  console.log("entrra a peticion")
  console.log(body)
  console.log(body.firstname)
  await rest.executeQuery(
 /*   `update actor set actor_status=0, last_update=GETDATE() where actor_id=${body.actor_id}`*/
  `UPDATE actor
  SET actor_status = CASE
      WHEN actor_status = 1 THEN 0
      WHEN actor_status = 0 THEN 1
      ELSE actor_status
    END,
    last_update = GETDATE()
  WHERE actor_id =${body.actor_id};
  `).then((data)=>{
  res.json(data)
  })
}) 

//

app.listen(8080, function(){
    console.log("port 8080");

})