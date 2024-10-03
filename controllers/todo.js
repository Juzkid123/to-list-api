import { TodoModel } from "../models/todo.js";

export const addTodo = async (req,res,next) => {
    try {
        // validate user inputs
        // Write todo to database
        await TodoModel.create(req.body);
        // Respond to request
        res.status(200).json('Todo was added!');
    } catch (error) {
        next(error);
    }
}

export const getTodos = async (req, res, next) => {
   try {
    // fetch todos from database
    const todos = await TodoModel.find();
    // return rtesponse
     res.status(200).json(todos);
   } catch (error) {
    next(error)
   }
}

export const updateTodo = (req, res, next) =>{
    res.json('Todo Updated');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted!');
}