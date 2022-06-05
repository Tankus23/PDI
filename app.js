const mysql = require("mysql2");
const express = require("express");
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
var userName=' ';

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "kurs",
    password: "2wsx4rfv"
});

app.set("view engine", "hbs");

// получение списка пользователей
app.get("/", function(req, res){
    pool.query("select k.id as id,  k.Название as Название, Описание, ж.название as Жанр, а.ФИО, г.год as год,  пи.название as ПечатноеИздательство, я.название as Язык, о.название as Область from книга k inner join автор а on k.автор_id = а.id inner join год г on k.год_id = г.id inner join жанр ж on k.жанр_id = ж.id inner join печатное_издательство пи on k.печатное_издательство_id = пи.id inner join язык я on k.язык_id = я.id inner join область о on k.область_id = о.id", function(err, data) {
        if(err) return console.log(err);
        res.render("index.hbs", {
            users: data
        });
    });
});

app.get("/users", function(req, res){
    pool.query("select к.название as Название,к.описание as Описание,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес "
    +"from книга2библиотека кб "
    +"inner join библиотека б on кб.библиотека_id = б.id "
    +"inner join книга к on кб.книга_id = к.id "
    +"inner join жанр ж on к.жанр_id = ж.id "
    +"inner join автор а on к.автор_id = а.id "
    +"inner join год г on к.год_id = г.id limit 1, 10", function(err, data) {
        if(err) return console.log(err);
        res.render("katalog.hbs", {
            users: data
        });
    });
});
app.get("/users2", function(req, res){
    pool.query("select к.название as Название,к.описание as Описание,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес "
    +"from книга2библиотека кб "
    +"inner join библиотека б on кб.библиотека_id = б.id "
    +"inner join книга к on кб.книга_id = к.id "
    +"inner join жанр ж on к.жанр_id = ж.id "
    +"inner join автор а on к.автор_id = а.id "
    +"inner join год г on к.год_id = г.id limit 11, 10", function(err, data) {
        if(err) return console.log(err);
        res.render("katalog2.hbs", {
            users: data
        });
    });
});
app.get("/users3", function(req, res){
    pool.query("select к.название as Название,к.описание as Описание,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес "
    +"from книга2библиотека кб "
    +"inner join библиотека б on кб.библиотека_id = б.id "
    +"inner join книга к on кб.книга_id = к.id "
    +"inner join жанр ж on к.жанр_id = ж.id "
    +"inner join автор а on к.автор_id = а.id "
    +"inner join год г on к.год_id = г.id limit 21, 10", function(err, data) {
        if(err) return console.log(err);
        res.render("katalog3.hbs", {
            users: data
        });
    });
});

app.get("/users4", function(req, res){
    pool.query("select к.название as Название,к.описание as Описание,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес "
    +"from книга2библиотека кб "
    +"inner join библиотека б on кб.библиотека_id = б.id "
    +"inner join книга к on кб.книга_id = к.id "
    +"inner join жанр ж on к.жанр_id = ж.id "
    +"inner join автор а on к.автор_id = а.id "
    +"inner join год г on к.год_id = г.id limit 31, 10", function(err, data) {
        if(err) return console.log(err);
        res.render("katalog4.hbs", {
            users: data
        });
    });
});app.get("/users5", function(req, res){
    pool.query("select к.название as Название,к.описание as Описание,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес "
    +"from книга2библиотека кб "
    +"inner join библиотека б on кб.библиотека_id = б.id "
    +"inner join книга к on кб.книга_id = к.id "
    +"inner join жанр ж on к.жанр_id = ж.id "
    +"inner join автор а on к.автор_id = а.id "
    +"inner join год г on к.год_id = г.id limit 41, 10", function(err, data) {
        if(err) return console.log(err);
        res.render("katalog5.hbs", {
            users: data
        });
    });
});app.get("/users6", function(req, res){
    pool.query("select к.название as Название,к.описание as Описание,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес "
    +"from книга2библиотека кб "
    +"inner join библиотека б on кб.библиотека_id = б.id "
    +"inner join книга к on кб.книга_id = к.id "
    +"inner join жанр ж on к.жанр_id = ж.id "
    +"inner join автор а on к.автор_id = а.id "
    +"inner join год г on к.год_id = г.id limit 51, 10", function(err, data) {
        if(err) return console.log(err);
        res.render("katalog6.hbs", {
            users: data
        });
    });
});app.get("/users7", function(req, res){
    pool.query("select к.название as Название,к.описание as Описание,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес "
    +"from книга2библиотека кб "
    +"inner join библиотека б on кб.библиотека_id = б.id "
    +"inner join книга к on кб.книга_id = к.id "
    +"inner join жанр ж on к.жанр_id = ж.id "
    +"inner join автор а on к.автор_id = а.id "
    +"inner join год г on к.год_id = г.id limit 61, 10", function(err, data) {
        if(err) return console.log(err);
        res.render("katalog7.hbs", {
            users: data
        });
    });
});app.get("/users8", function(req, res){
    pool.query("select к.название as Название,к.описание as Описание,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес "
    +"from книга2библиотека кб "
    +"inner join библиотека б on кб.библиотека_id = б.id "
    +"inner join книга к on кб.книга_id = к.id "
    +"inner join жанр ж on к.жанр_id = ж.id "
    +"inner join автор а on к.автор_id = а.id "
    +"inner join год г on к.год_id = г.id limit 71, 10", function(err, data) {
        if(err) return console.log(err);
        res.render("katalog8.hbs", {
            users: data
        });
    });
});app.get("/users9", function(req, res){
    pool.query("select к.название as Название,к.описание as Описание,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес "
    +"from книга2библиотека кб "
    +"inner join библиотека б on кб.библиотека_id = б.id "
    +"inner join книга к on кб.книга_id = к.id "
    +"inner join жанр ж on к.жанр_id = ж.id "
    +"inner join автор а on к.автор_id = а.id "
    +"inner join год г on к.год_id = г.id limit 81, 10", function(err, data) {
        if(err) return console.log(err);
        res.render("katalog9.hbs", {
            users: data
        });
    });
});




app.get("/kontact", function(req, res){
    pool.query("select б.адрес as Адрес, б.телефон as Телефон, ФИО, должность from сотрудник с inner join библиотека б on с.библиотека_id = б.id", function(err, data) {
        if(err) return console.log(err);
        res.render("kontact.hbs", {
            users: data
        });
    });
});

app.get("/welcome", function(req, res){
    pool.query("select кб.id,к.название as Название,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес from книга2библиотека кб inner join библиотека б on кб.библиотека_id = б.id inner join книга к on кб.книга_id = к.id inner join жанр ж on к.жанр_id = ж.id inner join автор а on к.автор_id = а.id", function(err, data) {
        if(err) return console.log(err);
    res.render("welcome.hbs", {
        users: data
        });
    });
});

app.post("/welcome", urlencodedParser, function (req, res) {
    if(!req.body) return response.sendStatus(400);
    userName = req.body.userName;
    res.redirect("/poisk");
    });
        
app.get("/poisk", function(req, res){
    //const userNam = userName;
    var poisk= userName;  
    pool.query("select к.название as Название,ж.название as Жанр,а.ФИО as Автор,б.адрес as Адрес " 
    +"from книга2библиотека кб inner join библиотека б on кб.библиотека_id = б.id inner join книга к on кб.книга_id = к.id inner join жанр ж on к.жанр_id = ж.id inner join автор а on к.автор_id = а.id " 
    +"WHERE к.название like ?",[poisk], function(err, data) {
    if(err) return console.log(err);
    res.render("poisk.hbs", {
        users: data,
        poisk: poisk
        });
        });
    });
    





// возвращаем форму для добавления данных
app.get("/create", function(req, res){
    res.render("create.hbs");
});

// получаем отправленные данные и добавляем их в БД
app.post("/create", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const название = req.body.название;
    const описание = req.body.описание;
    const автор_id = req.body.автор_id;
    const год_id = req.body.год_id;
    const жанр_id = req.body.жанр_id;
    const печатное_издательство_id = req.body.печатное_издательство_id;
    const язык_id = req.body.язык_id;
    const область_id = req.body.область_id;
    pool.query("INSERT INTO книга (название, описание,автор_id, год_id, жанр_id, печатное_издательство_id, язык_id, область_id) VALUES (?,?,?,?,?,?,?,?)", [название, описание, автор_id, год_id, жанр_id, печатное_издательство_id, язык_id, область_id, id], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/");
    });
});

// получем id редактируемой книги, получаем е из бд и отправлям с формой редактирования
app.get("/edit/:id", function(req, res){
    const id = req.params.id;
    pool.query("SELECT * FROM книга WHERE id=?", [id], function(err, data) {
        if(err) return console.log(err);
        res.render("edit.hbs", {
            book: data[0]
        });
    });
});
// получаем отредактированные данные и отправляем их в БД
app.post("/edit", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const название = req.body.название;
    const описание = req.body.описание;
    const автор_id = req.body.автор_id;
    const год_id = req.body.год_id;
    const жанр_id = req.body.жанр_id;
    const печатное_издательство_id = req.body.печатное_издательство_id;
    const язык_id = req.body.язык_id;
    const область_id = req.body.область_id;

    pool.query("UPDATE книга SET название = ?, описание = ?, автор_id=?, год_id=?, жанр_id=?, печатное_издательство_id=?, язык_id=?, область_id=? WHERE id=?", [название, описание, автор_id, год_id, жанр_id, печатное_издательство_id, язык_id, область_id, id], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/");
    });
});


// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete/:id", function(req, res){

    const id = req.params.id;
    pool.query("DELETE FROM книга WHERE id=?", [id], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/");
    });
});



app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});

