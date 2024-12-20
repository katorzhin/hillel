const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 8080;

mongoose
    .connect("mongodb+srv://oleksiikatorzhin:0eROBfrwtNnVe5ai@cluster0.hx7tj.mongodb.net/todoDB")
    .then(() => console.log("MongoDB connected!"))
    .catch((error) => console.error("MongoDB connection error:", error));

app.use(cors());
app.use(express.json());

const Todo = mongoose.model("Todo", { text: String, checked: Boolean });

app.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post("/todos", async (req, res) => {
    const todo = new Todo(req.body);
    await todo.save();
    res.json(todo);
});

app.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    await Todo.findByIdAndUpdate(id, { text });
    const updatedTodo = await Todo.findById(id);
    res.json(updatedTodo);
});

app.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Task deleted" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
