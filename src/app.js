const express= require("express");
const hbs= require("hbs")
const app= express();
const mongoose= require("mongoose");
const bodyparser=require('body-parser')
const routes= require('./routes/main')
const Detail= require("./models/Detail");
const slider= require("./models/slider");
const Service= require("./models/service")


// /static/css/style.css
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use('/static', express.static("public"))
app.use('',routes)


// (template engine)

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//db connection

mongoose.connect("mongodb://localhost:27017/web_tut").then(res=>{
    console.log("db connected")




    // slider.create([
    //     {
    //         title:'Lirn java in very easy manner',
    //         subTitle:'java is one of the popular programming langauge.',
    //         imageUrl:"/static/images/S1.png"
    //     },
    //     {
    //         title:'What is django in python?',
    //         subTitle:'django is one of the popular web framework of python programming.',
    //         imageUrl:"/static/images/S2.png"
    //     },
    //     {
    //         title:'What about Node js?',
    //         subTitle:'Node js is rountime environment to execute javascript outside browser',
    //         imageUrl:"/static/images/S3.png"
    //     },
    // ])


    // Detail.create({
    //     brandName:"Info Technical Solution",
    //     brandIconUrl:"https://en.wikipedia.org/static/images/icons/wikipedia.png",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/",
    //         },
    //         {
    //             label:"Services",
    //             url:"/Services",
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery",
    //         },
    //         {
    //             label:"About",
    //             url:"/about",
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us",
    //         },
    //     ]
    // })
}).catch(err=>{
    console.log("mongo db connection error",err)
})

app.listen(process.env.PORT |5556,()=>{
    console.log("server started")
});