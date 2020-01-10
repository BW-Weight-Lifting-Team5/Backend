const db = require("../data/dbConfig");

module.exports = {
    add,
    find
}
function find(id) {
  return db("usersjournal")
    .where({ id })
    .join("journal", "usersjournal.journalId", "journal.id")
    .select(
      "id",
      "exercise",
      "weight",
      "sets",
      "reps",
      "date",
      "muscle",
      "journal"
    );
}
function add(row) {
    return db('usersjournal')
    .insert(row)
}