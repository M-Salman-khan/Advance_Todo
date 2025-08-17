const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors"); 
const PORT = 3000
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/todoApp")
  .then(() => console.log("Connection Successfully"))
  .catch((err) => console.log("Error occured while connecting to the Database",err));


const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const Task = mongoose.model("Task", taskSchema);


app.post("/task",async (req,res)=>{
    try{
        const task = new Task(req.body)
        await task.save()
        res.status(201).json(task);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
})
app.get("/task", async(req, res) => {
  try{
    const tasks = await Task.find()
    res.status(200).json(tasks)
 }
 catch(err){
    res.status(400).json({error:err.message})
 }
});
app.delete("/task/:id", async(req, res) => {
  try{
    const task = await Task.findByIdAndDelete(req.params.id)
    res.status(200).json(task)
  }
  catch(err){
    res.status(400).json({error:err.message})
  }
});


app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
