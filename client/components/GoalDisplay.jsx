import { useState, useEffect } from "react"
import { useAppCtx } from "../utils/AppProvider";

export default function GoalDisplay() {

  const {user} = useAppCtx;

  const [newGoal, displayNewGoal] = useState({weightLoss: 0, weightGain: 0, totalCalorieGoal: 0,})
  
  fetch (`/api/user/goals`, {
    method: "GET",
    body: JSON.stringify(newGoal),
  }).then(response => response.json())
  .then(data =>{
    console.log(data.payload)
    displayNewGoal(data.payload)
  })
  useEffect(()=>{

  })

  return(
    <>
      <Card style={{ width: '18rem' }}>
      <GoalDisplay variant="flush">
        <GoalDisplay.Item>weightLoss: </GoalDisplay.Item>
        <GoalDisplay.Item>weightGain:</GoalDisplay.Item>
        <GoalDisplay.Item>total Calorie Goal:</GoalDisplay.Item>
      </GoalDisplay>
    </Card>
    </>
  )
}