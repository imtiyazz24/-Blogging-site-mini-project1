const authorModel= require("../models/authorModel")
const blogModel=require("../models/blogModel")

 const createAuthor= async function(req,res){
   try{
      let data = req.body
      if(!data.fname)
      return res.status(400).send("fname is mandatory")
      if(!data.lname)
      return res.status(400).send("lname is mandatory")
      if(!data.title)
      return res.status(400).send("title is mandatory")
      if(!data.email)
      return res.status(400).send("email is mandatory")
      if(!data.password)
      return res.status(400).send("email is mandatory")


      let saveData = await authorModel.create(data)
      res.status(201).send({msg: saveData})
   }catch(err){
      console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

 


const createBlog=async function(req,res){
   try{
      let data = req.body
      if(!data.title)
      return res.status(400).send("title is mandatory")
      if(!data.body)
      return res.status(400).send("body is mandatory")
      if(!data.authorId)
      return res.status(400).send("authorId is mandatory")
      if(!data.category)
      return res.status(400).send("category is mandatory")

      let saveData = await authorModel.create(data)
      res.status(201).send({msg: saveData})
   }catch(err){
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error: err.message })
 }
}



 const getBlog=async function(req,res){
   
}
const updateBlog=async function(req,res){
   
}

const deleteBlogById=async function(req,res){
   
}

const deleteBlogByParams=async function(req,res){
   
}


module.exports={
   createAuthor,
   createBlog,
   getBlog,
   updateBlog,
   deleteBlogById,
   deleteBlogByParams
}