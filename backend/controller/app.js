const Task = require("../models/Task")

const addTask = async (req,res)=>{
    try{
        const task = new Task(req.body)
        await task.save()
        res.status(201).json(task);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

const getTasks =  async(req, res) => {
  try{
    const tasks = await Task.find()
    res.status(200).json(tasks)
 }
 catch(err){
    res.status(400).json({error:err.message})
 }
}
const deleteTask =  async(req, res) => {
  try{
    const task = await Task.findByIdAndDelete(req.params.id)
    res.status(200).json(task)
  }
  catch(err){
    res.status(400).json({error:err.message})
  }
}

module.exports = {addTask, getTasks, deleteTask}
