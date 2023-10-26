const express=require('express')
const { route } = require('express/lib/application')

const Detail= require("../models/Detail")
const slider = require('../models/slider')
const service = require('../models/service')
const Contact= require('../models/Contact')


const routes=express.Router()

routes.get("/",async(req,res)=>{
    const details= await Detail.findOne({"_id":"6537b66dfbfa747fbad5bbef"})
    const slides= await slider.find()
    // console.log(slides)

    // console.log(details)
    const services= await service.find()
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})

routes.get("/gallery",async (req,res)=>{
    const details= await Detail.findOne({"_id":"6537b66dfbfa747fbad5bbef"});
    res.render("gallery",{
        details:details,
    });
});

// process contact form
routes.post("/process-contact-form",async (request,response)=> {
    console.log("form is submitted");
    console.log(request.body)

    //save the data to db
    try{

        const data= await Contact.create(request.body)
        console.log(data)
        response.redirect("/")

    }catch(e)
    {
        console.log(e)
        response.redirect("/")
    }
})


module.exports=routes;