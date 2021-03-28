
const getTableColumnsNames = async (table) => {
    try {
        const response = await fetch(`http://localhost:5000/${table}/colname`);
        const jsonData = await response.json();
        
        console.log(jsonData);
        return jsonData;
    } catch (err) {
        console.error(err.message);
    }
};

const getTable = async (table) => {
    try {
        const response = await fetch(`http://localhost:5000/${table}`);
        const jsonData = await response.json();
        
        console.log(jsonData);
        //return jsonData;
    } catch (err) {
        console.error(err.message);
    }
};
//getTodos(iris);

//export default GetTable;