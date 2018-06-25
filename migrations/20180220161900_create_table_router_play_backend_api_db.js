
exports.up = function(knex, Promise) {
  return knex.schema.createTable('routerPlay', (table) => {
  table.increments();
  table.string('origin', 64);
  })
};

exports.down = function(knex, Promise) {
  
};
