exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("exercises")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("exercises").insert([
        {
          exercise: "Squat",
          weight: 150,
          units: "lbs",
          sets: 2,
          reps: 8,
          workout_id: 1
        },
        {
          exercise: "Deadlift",
          weight: 150,
          units: "lbs",
          sets: 2,
          reps: 8,
          workout_id: 1
        },
        {
          exercise: "Split Squat",
          weight: 150,
          units: "lbs",
          sets: 5,
          reps: 8,
          workout_id: 1
        },
        {
          exercise: "Tricep Extension",
          weight: 150,
          units: "lbs",
          sets: 3,
          reps: 8,
          workout_id: 2
        },
        {
          exercise: "Bicep Curls",
          weight: 150,
          units: "lbs",
          sets: 4,
          reps: 7,
          workout_id: 2
        },
        {
          exercise: "Bench",
          weight: 150,
          units: "lbs",
          sets: 4,
          reps: 8,
          workout_id: 3
        },
        {
          exercise: "Incline DB",
          weight: 150,
          units: "lbs",
          sets: 4,
          reps: 8,
          workout_id: 3
        },
        {
          exercise: "DB Fly",
          weight: 150,
          units: "lbs",
          sets: 5,
          reps: 8,
          workout_id: 3
        },
        {
          exercise: "Pushups",
          weight: 150,
          units: "lbs",
          sets: 5,
          reps: 8,
          workout_id: 3
        }
      ]);
    });
};
