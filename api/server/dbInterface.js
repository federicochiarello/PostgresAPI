const PORT = 5000;

const getTablesNames = async () => {
    try {
        const response = await fetch(`http://localhost:${PORT}/tablesnames`);
        const jsonData = await response.json();
        
        //console.log(jsonData);
        return jsonData;
    } catch (err) {
        console.error(err.message);
    }
};

const getTableContent = async (table) => {
    try {
        const response = await fetch(`http://localhost:${PORT}/${table}`);
        const jsonData = await response.json();
        
        //console.log(jsonData);
        return jsonData;
    } catch (err) {
        console.error(err.message);
    }
};

const getTableColumnsNames = async (table) => {
    try {
        const response = await fetch(`http://localhost:${PORT}/${table}/colname`);
        const jsonData = await response.json();
        
        //console.log(jsonData);
        return jsonData;
    } catch (err) {
        console.error(err.message);
    }
};

//delete table
const deleteTable = async (table) => {
    try {
        const deleteTable = await fetch(`http://localhost:${PORT}/${table}`, { 
            method: "DELETE" 
        });
        const jsonData = await deleteTable.json();

        //console.log(jsonData);
        return jsonData;
    } catch (err) {
        console.error(err.message);
    }
};

export { getTablesNames, getTableContent, getTableColumnsNames, deleteTable };