const express = require('express');
const app = express();
app.listen(3001, () => {
    console.log("Port is running in 3001")
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require('path');
const fs = require('fs')

let homeCount = 0;
let addStudentCount = 0;
let viewStudentCount = 0;
app.get("/", function (req, res) {
    homeCount++;
    res.send("<a href='addStudent'>Click Here to add Student</a> <br> <span> Site Visited:" + homeCount + "</span>");
})

app.get("/addStudent", function (req, res) {
    addStudentCount++
    res.sendFile(path.join(__dirname, "view", "addStudent.html"))
})

app.post("/student", function (req, res) {
    viewStudentCount++;
    // res.sendFile(path.join(__dirname, "view", "student.html"))
    res.send("<h1> Students</h1> <div> <label> Name: </label> <span>" + req.body.name + "</span> <br><label>Email: </label><span>" + req.body.email + "</span></div>  <div> <label> Course: </label> <span> " + req.body.course + "</span></div> <div><label> Country: </label> <span>" + req.body.country + "</span> <br> <span>Sites Visited: " + viewStudentCount + "</span></div>")
})



app.use("/error", function (req, res) {
    // res.status(500).sendFile(__dirname, "view", "error.html");
    res.sendFile(path.join(__dirname, "view", "error.html"))
})


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "view", "notFound.html"));
})