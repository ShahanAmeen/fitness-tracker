import {useState, useEffect} from "react"

function WorkoutPage(){
  const[workouts, setWorkouts] = useState([]);


async function getWorkouts(){
 
fetch (`/api/workouts`, {
  headers: {"Content-Type": "application/json"}
  })
  .then(response => response.json())
  .then(data =>{
    console.log(data.payload)
    setWorkouts(data.payload)
  })
 
  

}

useEffect(()=>{
  getWorkouts()
  console.log(workouts)
}, [])

console.log(workouts)


  return(
    <div>
      <h2>workouts</h2>
      {
        workouts.map(workout =>{
          return(
            <div>
              <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{workout.exerciseType}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Calories Burned: {workout.caloriesBurnt}</h6>
                  <p className="card-text">After Workout Weight: {workout.afterWorkoutWeight}</p>
           
                </div>
              </div>

             </div> 
          )
        })
      }
    </div>
  )
}

export default WorkoutPage