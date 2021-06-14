const { response } = require('express')
const express = require('express')
const mongoose=require('mongoose')
const Blog=require('./models/blog')
const app = express()

const dburl="mongodb+srv://harsh47:harsh@3820@cluster0.ueceu.mongodb.net/blog-site?retryWrites=true&w=majority"
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(4000))
.catch((err)=>console.log(err))
 
app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))



app.get('/',(req, res)=> {
   res.redirect('/blogs')
})
app.get('/about',(req, res)=> {
    res.render('about',{title:'About'})
})

app.get('/blogs/create',(req, res)=> {
   res.render('create',{title:'Create blog'})
})

app.get('/blogs/:id',(req,res)=>{
    const id=req.params.id
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{blog:result,title:'blog detial'})
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.delete('/blogs/:id',(req,res)=>{
    const id=req.params.id
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect:'/blogs'})
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.get('/blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('index',{title:'Home',blogs:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.post('/blogs',(req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.use((req, res) => {
    res.status(404).render('404',{title:'404'});
});
