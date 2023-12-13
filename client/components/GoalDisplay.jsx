import { useState } from "react"
import { useAppCtx } from "../utils/AppProvider";

export default function GoalForm() {

  const {user} = useAppCtx;

  const [newGoal, displayNewGoal] = useState({weightLoss: 0, weightGain: 0, bmi: 0, totalCalorieGoal: 0, userID: user._id})

  return(
    <>
    <form onSubmit={displayNewGoal}>
        <label>Weight Loss?: </label>
        <input type='number' name='weightLoss' value={displayNewGoal.weightLoss} onChange={handleInputChange}/>
        <div></div>
        <label>Weight Gain?: </label>
        <input type='number' name='weightGain' value={displayNewGoal.weightGain} onChange={handleInputChange}/>
        <div></div>
        <label>BMI?: </label>
        <input type='number' name='bmi' value={displayNewGoal.bmi} onChange={handleInputChange}/>
        <div></div>
        <label>Total Calories Goals: </label>
        <input type='number' name='totalCalorieGoal' value={displayNewGoal.totalCalorieGoal} onChange={handleInputChange}/>
        <div></div>
        <button>Confirm</button>
    </form>
    </>
  )
}