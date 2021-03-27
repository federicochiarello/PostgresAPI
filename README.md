# PostgresAPI


EXPORT TO CSV

\copy schema.table_name to 'relative or absolute path/nameCSV.csv' CSV HEADER
(different from COPY command)

IMPORT CSV 

COPY table_name
FROM 'absolute_path\nameCSV.csv'
DELIMITER ','
CSV HEADER;


COPY can only be used with plain tables, not with views. However, you can write COPY (SELECT * FROM viewname) TO ....

Do not confuse COPY with the psql instruction \copy. \copy invokes COPY FROM STDIN or COPY TO STDOUT, and then fetches/stores the data in a file accessible to the psql client. Thus, file accessibility and access rights depend on the client rather than the server when \copy is used.