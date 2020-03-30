
exports.up = function(knex) {
    return knex.schema.createTable("incidents", function(table){
        table.increments();// Tabela incrementada 1,2,3 etc...

        table.string("title").notNullable();
        table.string("description").notNullable();
        table.decimal("value").notNullable();  
//Tabela de relacionamento
        table.string("ong_id").notNullable();

        table.foreign("ong_id").references("id").inTable("ongs");
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable("incidents");
};


//comando rollback desfaz a tabela e para criála basta executar o comando de migração
// npx knex migrate:status => Mostra as migrações que foram feitas.