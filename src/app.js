const express = require('express');
const app = express();
const port = process.env.PORT || 8000; // aa hosting kariye tayare kam kage
const path = require('path')
const hbs = require('hbs');


// Public static path
const FolderPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../Templets/views');
const partialsPath = path.join(__dirname,'../Templets/partials')
// console.log(ViewPath);


app.set('view engine','hbs');
app.set('views',viewsPath)
hbs.registerPartials(partialsPath);
app.use(express.static(FolderPath));


// Routing
app.get("",(req,res) => {
    res.render("index");
})
app.get("/about",(req,res) => {
    res.render("about")
})
app.get("/weather",(req,res) => {
    res.render("weather");
})
app.get('*',(req,res) => {
    res.render("404Error",{
        errorMsg: "Opps! Page not Found",
    });
})
app.listen(port ,() => {
    console.log(`Listening to the port at ${port}`);
})