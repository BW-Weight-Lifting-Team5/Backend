exports.up = function(knex) {
  return knex.schema.createTable("workoutjournal", table => {
    table.increments();

    table
      .integer("userId")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("journalId")
      .references("id")
      .inTable("journal")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("workoutjournal");
};
