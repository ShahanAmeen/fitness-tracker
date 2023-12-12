import { useState } from "react"
import { useAppCtx } from "../utils/AppProvider";

export default function GoalForm() {

  const {user} = useAppCtx;

  const [newGoal, setNewGoal] = useState({weightLoss: 0, weightGain: 0, bmi: 0, totalCalorieGoal: 0, userID: user._id})

  // will need to add validators at some point (unless MVP gets dicey)
  async function createGoal(event){
    event.preventDefault()

    try {
      const query = await fetch(`/api/goals`, {
        method: "POST",
        body: JSON.stringify(newGoal),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const response = await query.json()
      console.log(response)
      if( response.result === "success" ){
        // "/private" is our "profile" at the moment
        // alternatively, instead of the window.location.href method, we can set up a useEffect to trigger a reload of the rendering of the component
        window.location.href = "/private"
      }
    } catch(err){
      console.log(err.message)
    }
  }

  function handleInputChange(event){
    setNewGoal({...newGoal, [event.target.name]: event.target.value})
  }

  return(
    <>
    <form onSubmit={createGoal}>
        <label>Weight Loss?: </label>
        <input type='number' name='weightLoss' value={newGoal.weightLoss} onChange={handleInputChange}/>
        <div></div>
        <label>Weight Gain?: </label>
        <input type='number' name='weightGain' value={newGoal.weightGain} onChange={handleInputChange}/>
        <div></div>
        <label>BMI?: </label>
        <input type='number' name='bmi' value={newGoal.bmi} onChange={handleInputChange}/>
        <div></div>
        <label>Total Calories?: </label>
        <input type='number' name='totalCalorieGoal' value={newGoal.totalCalorieGoal} onChange={handleInputChange}/>
        <div></div>
        <button>Confirm</button>
    </form>
    </>
  )
}