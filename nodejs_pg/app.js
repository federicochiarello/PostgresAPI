const client = require('./database');

const query = async () => {
    await client.connect();
    const result = await client.query(`select * from items`);
    console.log(result.rows);
    client.end();
}

query();

const query2 = async () => {
    await client.connect();
    const result = await client.query(`insert into table_name(name, ...) values($1,$2) RETURNING name`, ['param1', 'param2']);
    console.log(result.rows);
    console.log(result.rowCount);
    client.end();
}