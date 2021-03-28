const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

// get tables names
app.get("/tablesnames", async(req, res) => {
    try {
        const data = await pool.query(`SELECT table_name FROM information_schema.tables WHERE table_schema='public'`);
        res.json(data.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get table content
app.get("/:table", async(req, res) => {
    try {
        const { table } = req.params;
        const data = await pool.query(`SELECT * FROM ${table}`);
        res.json(data.rows);
    } catch (err) {
        console.error(err.message);
        //res.status(418).send({ message: `${table} doesn't exist` });
        return;
    }
});

//get table columns names
app.get("/:table/colname", async(req, res) => {
    try {
        const { table } = req.params;
        const data = await pool.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = '${table}';`);
        res.json(data.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// delete a table
app.delete("/:table", async (req, res) => {
    try {
        const { table } = req.params;
        await pool.query( `DROP TABLE ${table};` );
        res.json(`The table ${table} was deleted`);
        //console.log(res);
    } catch (err) {
        console.error(err.message);
    }
});





//--------------------------------------------------------------------------------------
const query = `
CREATE TABLE Iris (
    sepal_length VARCHAR(255),
    sepal_width VARCHAR(255),
    petal_length VARCHAR(255),
    petal_width VARCHAR(255),
    species VARCHAR(255)
);`;

app.get('/create', async(req, res) => {
    try {
        await pool.query(query);
        //res.json(newTodo.rows[0]); 
    } catch (err) {
        console.error(err.message);
    }
});

//create a table
app.post("/insert/:table", async(req, res) => {
    try {
        //console.log(req.body);
        const { table } = req.params;
        const columnsList = 'nome VARCHAR(25), numero numeric'
        //const { description } = req.body;
        const newTodo = await pool.query(`
            CREATE TABLE ${table} (
            ${columnsList}
            );`
        );
        //console.log(res)
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
        //res.send("something wrong");
    }
});
//--------------------------------------------------------------------------------------





app.listen(
    PORT,
    () => console.log(`server alive on http://localhost:${PORT}`)
);
