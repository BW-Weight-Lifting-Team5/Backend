

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "test123@email.com",
          password: "password",
          firstName: "Who",
          lastName: "knows"
        },
        {
          email: "Anothertest123@email.com",
          password: "password",
          firstName: "Kelly",
          lastName: "Angry"
        },
        {
          email: "testin123@gmail.com",
          password: "susan",
          firstName: "help",
          lastName: "me"
        }
      ]);
    });
};

