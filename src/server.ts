import express, { request, response } from "express";

const app = express();

// Get = Busca
// Post = Criação
// PUT = Alteração
// Delete = Deletar
// Patch = Alterar algo especifico

app.get("/", (request, response) => {
    return response.json({
        message: "Test"
    })

});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuario salvo"
    })
});

app.listen(3333, () => console.log("Servers is running on port 3333"));