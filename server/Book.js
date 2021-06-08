const mongoose=require('mongoose')

const Bookschema=new mongoose.Schema({
    name:String,
    book_id:String,
    edition:String,
    year:Number,
    author:String,
    description:String,
    rating:Number
})

const bookreview=new mongoose.Schema({
    bookid:String,
    reviewerid:String,
    review:String,  
})

const questionpaper=new mongoose.Schema({
    subject:String,
    subject_code:String,
    year:Number,
    semester:Number,
    type:String
})

const student=new mongoose.Schema({
    name:String,
    usn:String,
    phone:Number,
    email:String,
    password:String,
    expire:Date
})

const faculty=new mongoose.Schema({
    name:String,
    fid:String,
    phone:Number,
    email:String,
    password:String
})

const librarian=new mongoose.Schema({
    name:String,
    lid:String,
    phone:Number,
    email:String,
    password:String
})

const groupchat=new mongoose.Schema({
    user_id:String,
    msg:String
})

mongoose.model("student",student)
mongoose.model("faculty",faculty)
mongoose.model("admin",librarian)
mongoose.model("book",Bookschema)
mongoose.model("bookreview",bookreview)
mongoose.model("question",questionpaper)
mongoose.model("chat",groupchat)