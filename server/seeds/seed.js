const db = require("../config/connection")

/*
  To seed data:

  1. Import your model
  2. Create an array of data with the variable name seedData
  3. Uncomment the code above and replace MODEL with your imported model

*/


// db.once('open', async () => {
//   await MODEL.insertMany(seedData)
//   console.log("seeding complete")
//   process.exit(0)
// });const connection = require('../config/connection');
const { User, Goal, Workout } = require('../models');

const users =
[{
  email: 'shahanameen@gmail.com',
  password:'dontuserealpasswordlol',
  firstname:'Shahan',
  lastname:'Ameen',
  height: 74,
  weight: 215,
  gender: 'Male',
  totalCalories: 300,
  bmi: 27.6
},
  
{
  email: 'jasonyang34@gmail.com',
  password: 'dontuserealpasswordlol',
  firstname: 'Jason',
  lastname: 'Yang',
  height: 62,
  weight: 130,
  gender: 'Male',
  totalCalories: 300,
  bmi: 23.8,
},
{  
  email: 'garyslolol@gmail.com',
  password: 'dontuserealpasswordlol',
  firstname: 'Gary',
  lastname: 'Spring',
  height: 71,
  weight: 155,
  gender: 'Male',
  totalCalories: 300,
  bmi: 21.6,
},
{
  email: 'drmartin98@yahoo.com',
  password: 'fuegolego',
  firstname: 'Martin',
  lastname: 'Luther',
  height: 71,
  weight: 155,
  gender: 'Male',
  totalCalories: 300,
  bmi: 21.6,
},
{
  email: 'sarahalseidy@gmail.com',
  password: 'idontlistentoanyone',
  firstname: 'Sarah',
  lastname: 'Seidy',
  height: 70,
  weight: 160,
  gender: 'Male',
  totalCalories: 300,
  bmi: 23.0,
},
];
const goals = 
[{
weightLoss:5,
weightGain:0,
bmi:22,
totalCaloriesGoal:350,
userId:0,

},
{
weightLoss: 10,
weightGain: 0,
bmi: 25,
totalCaloriesGoal:500,
userId,
},
{
weightLoss: 0,
weightGain: 15,
bmi: 28,
totalCaloriesGoal:500,
userId,
},
{
weightLoss: 30,
weightGain: 0,
bmi: 22,
totalCaloriesGoal:300,
userId,
},
];

const workouts =
[{
  exerciseType:"bench",
  caloriesBurnt:100,
  afterWorkoutWeight:181,
  userID:9,
},
{
  exerciseType: "sqaut",
  caloriesBurnt: 150,
  afterWorkoutWeight: 200,
  userID: 9,
},
{
  exerciseType: "dumbbell-rows",
  caloriesBurnt: 100,
  afterWorkoutWeight: 202,
  userID: 9,
},
  {
  exerciseType: "3mile-tredmill",
  caloriesBurnt: 398,
  afterWorkoutWeight: 170,
  userID: 9,

},
{
  exerciseType: "box-jump",
  caloriesBurnt: 200,
  afterWorkoutWeight: 181,
  userID: 9,
}]

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  let goalCheck = await connection.db.listCollections({ name: 'goals' }).toArray();
  if (goalCheck.length) {
    await connection.dropCollection('goals');
  }

  let workoutCheck = await connection.db.listCollections({ name: 'workouts' }).toArray();
  if (workoutCheck.length) {
    await connection.dropCollection('workouts');
  }

  await User.collection.insertMany(users);
  await Goal.collection.insertMany(goals);
  await Workout.collection.insertMany(workouts);

  console.table(users);
  console.table(goals);
  console.table(workouts);
  console.info('Seeding successfuly completed')
  process.exit(0);
});
