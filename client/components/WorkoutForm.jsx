import { useState, useEffect } from "react"
import { useAppCtx } from "../utils/AppProvider";

export default function WorkoutForm() {

  const {user} = useAppCtx();

  const [newWorkout, setNewWorkout] = useState({exerciseType: '', caloriesBurnt: 0, afterWorkoutWeight: 0, userID: ''})

  // will need to add validators at some point (unless MVP gets dicey)
  async function createWorkout(event){
    event.preventDefault()

    try {
      const query = await fetch(`/api/workouts`, {
        method: "POST",
        body: JSON.stringify(newWorkout),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const response = await query.json()
      console.log(response)
      if( response.result === "success" ){
        // "/private" is our "profile" at the moment
        // alternatively, instead of the window.location.href method, we can set up a useEffect to trigger a reload of the rendering of the component
        window.location.href = "/profile"
      }
    } catch(err){
      console.log(err.message)
    }
  }

  function handleInputChange(event){
    setNewWorkout({...newWorkout, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    const editWorkout = {...newWorkout, userID: user._id}
    setNewWorkout(editWorkout)
    console.log(`user hit`)
  },[user._id])

  if( !user?._id ) return <></>
  return(
    <>
    <form onSubmit={createWorkout}>
        <label>What was your workout?: </label>
        <input type='string' name='exerciseType' value={newWorkout.exerciseType} onChange={handleInputChange}/>
        <div></div>
        <label>Calories burnt?: </label>
        <input type='number' name='caloriesBurnt' value={newWorkout.caloriesBurnt} onChange={handleInputChange}/>
        <div></div>
        <label>After-workout weight?: </label>
        <input type='number' name='afterWorkoutWeight' value={newWorkout.afterWorkoutWeight} onChange={handleInputChange}/>
        <div></div>
        <button>Confirm</button>
    </form>
    </>
  )
}