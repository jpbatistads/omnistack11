
const express = require("express");
const cors = require("cors");

//importação
const routes = require("./routes");

const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
//App executando na porta 3333