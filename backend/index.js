const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

// create todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const createQuery = "INSERT INTO todo (description) VALUES($1) RETURNING *";
    const newTodo = await pool.query(createQuery, [description]);
    res.json(newTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const getAllQuery = "SELECT * FROM todo";
    const allTodos = await pool.query(getAllQuery);
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getQuery = "SELECT * FROM todo WHERE todo_id = $1";
    const todo = await pool.query(getQuery, [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { newDescription } = req.body;
    const updateQuery = "UPDATE todo SET description = $1 WHERE todo_id = $2";
    const updatedTodo = pool.query(updateQuery, [newDescription, id]);
    res.json("Todo was updated.");
  } catch (err) {
    console.error(err);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    deleteQuery = "DELETE FROM todo WHERE todo_id = $1";
    result = pool.query(deleteQuery, [id]);
    res.json("Todo was deleted.");
  } catch (err) {
    console.error(err);
  }
});

// start server
app.listen(port, () => {
  console.log(`The server has started on port ${port}.`);
});
