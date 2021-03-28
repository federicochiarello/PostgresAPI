const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

const q = `
CREATE TABLE Iris (
    sepal_length VARCHAR(255),
    sepal_width VARCHAR(255),
    petal_length VARCHAR(255),
    petal_width VARCHAR(255),
    species VARCHAR(255)
);
`;

app.get('/create', async(req, res) => {
    try {
        await pool.query(q);
        //res.json(newTodo.rows[0]); 
    } catch (err) {
        console.error(err.message);
    }
});

//create a todo
app.post("/todos", async(req, res) => {
    try {
        //console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get table content
app.get("/:table", async(req, res) => {
    try {
        const { table } = req.params;
        const data = await pool.query(`SELECT * FROM ${table}`);
        res.json(data.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//get table columns names

app.get("/colname/:table", async(req, res) => {
    try {
        const { table } = req.params;
        const data = await pool.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = '${table}';`);
        res.json(data.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo
app.get("/todos/:id", async(req, res) => {
    try {
        //console.log(req.params);
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1", 
            [id]
        );
        res.json(todo.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
});
/*
//update a todo
app.put("/todos/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", 
            [description, id]
        );

        res.json("Todo was update");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );

        res.json("Todo was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});
*/
app.listen(5000, () => {
    console.log("server has started on port 5000");
});