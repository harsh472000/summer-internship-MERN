const mongoose = require('mongoose')
const { MongoClient } = require("mongodb");
const express = require('express')

const dburl="mongodb+srv://harsh47:harsh@3820@cluster0.ueceu.mongodb.net/sample?retryWrites=true&w=majority"
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connection successfull...."))
.catch((err)=>console.log(err))

const playList = new mongoose.Schema({
    name:String,
    coursetype:String,
    vidoes:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const Playlist = new mongoose.model("Playlist",playList)

const creactDocument = () =>{
    const reactPlaylist = new Playlist({
        name:"nodejs",
        coursetype:"backend",
        vidoes:15,
        author:"thapa bhai",
        active:true
    })
    
    reactPlaylist.save()
}

//creactDocument()

const getDocument = async () =>{
    const result = await Playlist.find({coursetype:"frontend"})
    console.log(result)
}

getDocument()

const updateDocument = async (_id)=>{
    const result = await Playlist.findByIdAndUpdate({_id},{
        $set : {
            name :"django"
        }
    })
    console.log(result)
}

//updateDocument("60c3714053100e1f2cd00216")

const deleteDocument = async (_id)=>{
    const result = await Playlist.deleteOne({_id})
    console.log(result);
}

deleteDocument("60c3714053100e1f2cd00216");