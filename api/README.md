cd server
npm init
npm i express pg cors

nodemon index
(node index)





Codici di stato:

    200 “OK”: operazione eseguita con successo;
    201 “Created”: successo con conseguente creazione di una nuova risorsa nel servizio. Ad esempio, potrebbe essere la risposta alla POST che inserisce un nuovo prodotto;
    400 “Bad Request”: richiesta non formulata correttamente;
    401 “Unauthorized”: è necessario eseguire prima un’autenticazione correttamente;
    403 “Forbidden”: la richiesta sarebbe corretta ma si è chiesta una risorsa cui è vietato accedere;
    404 “Not found”: risorsa non trovata. Immaginiamo ad esempio di inviare una GET all’indirizzo www.mioservizioweb.org/api/prodotti/999 ma il prodotto di id 999 non esiste nel database;
    500 “Internal server error”: generico errore interno al server;
    501 “Not implemented”: il tipo di richiesta non è stato implementato sul server.
