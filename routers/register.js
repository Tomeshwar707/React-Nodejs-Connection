const express=require("express")
const router=express.Router()
const path = require("path")
const mysql = require('mysql2');





router.post("/", (req, res) => {
    const formData = req.body
    console.log(formData)
    console.table(formData)

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "My$ql123",
        database: "persondb"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        var sql = `INSERT INTO person 
        (name,age,mobile,password,email,gender) 
                    VALUES 
                     ('${formData.name}', 
                  
                  
                     '${formData.age}', 
                     '${formData.mobile}', 
                      
                     '${formData.password}', 
                     '${formData.email}',
                     '${formData.gender}')`

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            res.send("1 record inserted");
        });
    });

    // res.send("suucess...")



})

module.exports=router