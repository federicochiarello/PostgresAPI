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
        await client.query(query);
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
        const newTodo = await client.query(`
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