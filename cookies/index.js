const express = require('express')
const app = express();
app.listen(3008, () => {
    console.log("app is running in 3008")
})

const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const res = require('express/lib/response');
const path = require('path');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get("/login", function (req, res) {
    res.clearCookie('loggedInUser');
    res.sendFile(path.join(__dirname, "views", "login.html"))
})

app.post("/index", function (req, res) {
    if (req.body.username == "admin" && req.body.password == "123") {
        res.cookie('loggedInUser', 1234);
        res.render("index")
    } else {
        res.redirect('login');
    }
})

app.get("/addStudent", function (req, res) {
    console.log(req.cookies.loggedInUser);
    if (req.cookies.loggedInUser) {
        res.sendFile(path.join(__dirname, "views", "addStudent.html"))
    } else {
        res.redirect("login")
    }
})

app.post("/student", function (req, res) {
    console.log(req.cookies.student)
    res.cookie('student', req.body);
    res.render("student", { student: req.body });
})


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "notFound.html"));
})