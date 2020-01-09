# Backend

Unit4: Backend
https://weight-lifters-journal-5.herokuapp.com/

Login and Register
Register
post:api/auth/register
Requirements: email, password, firstName, & lastName
{
"email": "test123@email.com",
"password": "password",
"firstName": "Who",
"lastName": "knows"
}

    Login
    post:api/auth/login
    token

Requirements: email, password
{
"email": "test123@email.com",
"password": "password"
}

server.use("/api/auth", authRouter);
server.use("/api/workouts", workoutRouter);
server.use("/api/exercises", exerciseRouter);

/
api/workouts:
\*Gets all
get
/workouts
get by id
/:id
user workouts
get
/:id/workouts
indiviudal workouts:
get
/workouts/:workout
creates workout
post
/:id/workouts
edits aworkout
put
/:id
deletes workout
delete
/:id

api/exercises:
\*Gets all
get
/exercises
 specific workout
 get
/:userId/:id
 by id
 get
/:id
creates exercise
post
/:workout_id
edits exercise
put
/:id
deletes exercise
delete
/:id