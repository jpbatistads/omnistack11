
//Metodo Up é responsável por criar a tabela, porém é poreciso executá-lo
//O comando é esse: npx knex migrate:latest
exports.up = function(knex) {
 return knex.schema.createTable("ongs", function(table){
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("whatsapp").notNullable();
      table.string("city").notNullable();
      table.string("uf",2).notNullable();   
  });
};
// Metodo para deletar alguma coisa da tabela.
 exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
  
};
