//conexão com o banco de dados

const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
    async index (request, response){
        const ongs = await connection("ongs").select("*");
    
        return response.json(ongs);
    },
    async create(request, reponse){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString("HEX");
        // o Id vai receber uma criptografia aleatoria de 4 bytes e vai ser convertida para uma string HEX
    
        await connection("ongs").insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        
        
        return response.json({ id });
    }
};