const express = require("express");
const router = express.Router();
const Todo =  require("../model/todo");

router.get("/alltodos",async (req,res)=>{
    const todos = await Todo.find()
    res.json(todos)
});

router.post("/add-todo",async (req,res)=>{
    const {text} = req.body;
    if(!text){
        res.status(400).send({
            message: "Add a tdod"
        })
    }
    const newTodo = new Todo({text});
    await newTodo.save();
    res.status(201).json(newTodo)
})

router.put("/update/:id",async (req,res)=>{
    const {id} = req.params;
    const {text} = req.body;
    const updateTodo = await Todo.findByIdAndUpdate(id,{text},{new: true});
    res.json(updateTodo)
})

router.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({
        message: "todo Deleted"
    })
})
module.exports = router;