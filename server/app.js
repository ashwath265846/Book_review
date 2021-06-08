const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
require('./Book')

app.use(bodyParser.json())

const Book=mongoose.model('book')
const Ouestion=mongoose.model('question')
const Student=mongoose.model('student')
const Faculty=mongoose.model('faculty')
const Admin=mongoose.model('admin')


const mongourl="mongodb+srv://satish_kumar:B01eLT0oS2PpnTso@cluster0.s71eb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("error",err)
})



app.get('/book',(req,res)=>{
    Book.find({}).then (data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.get('/qp',(req,res)=>{
    Ouestion.find({}).then (data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/stdlogin',(req,res)=>{
    Student.exists({email:req.body.email},{password:req.body.password},function(err,result){
        if (err){
            res.send(err)
            console.log("this is invalid")
        }else{
            res.send(result)
        }
    })
}) 


app.post('/faclogin',(req,res)=>{
    Faculty.exists({email:req.body.email},{password:req.body.password},function(err,result){
        if (err){
            res.send(err)
            console.log("this is invalid")
        }else{
            res.send(result)
        }
    })
}) 

app.post('/liblogin',(req,res)=>{
    Admin.exists({email:req.body.email},{password:req.body.password},function(err,result){
        if (err){
            res.send(err)
            console.log("this is invalid")
        }else{
            res.send(result)
        }
    })
}) 

app.post('/addstudent',(req,res)=>{
    const student=new Student({
        name:req.body.name,
        usn:req.body.usn,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password
    })
    student.save()
    .then(data=>{
        console.log(data)
        res.send("Success")
    }).catch(err=>{
        console.log(err)
    })   
})


app.post('/addbook',(req,res)=>{
    const book=new Book({
        name:req.body.name,
        book_id:req.body.bid,
        edition:req.body.edition,
        year:req.body.year,
        author:req.body.author,
        description:req.body.descriptiom
    })
    book.save()
    .then(data=>{
        console.log(data)
        res.send("Success")
    }).catch(err=>{
        console.log(err)
    })   
})


app.post('/deletebook',(req,res)=>{
    Book.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send("Deleted")
    }).catch(err=>{
        console.log(err)
    })   
})









app.listen(3000,()=>{
    console.log("server running")
})