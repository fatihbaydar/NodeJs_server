"use strict"
// console.log("nodejs server")

const http = require("node:http")

// http.createServer((request,response) => {

// })
//! server oluştur
// http.createServer((req,res) => {
//     console.log("serverdasın")
//     res.end("hello nodejs")
// })

//! gelen istekleri dinlemeye başla

/*
const app = http.createServer((req,res) => {
    console.log("serverdasın")
    res.end("<h1>hello nodejs</h1>")
})

app.listen(8000,"127.0.0.1") */

const app = http.createServer((req,res) => {
    console.log("serverdasın")
    res.end("<h1>hello nodejs</h1>")
}).listen(8000,"127.0.0.1")