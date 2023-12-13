import { useEffect, useState, useContext } from "react"
import { useAppCtx } from "../utils/AppProvider";
import LineChartDisplay from '../components/LineChart'



export default function PrivatePage(){

  const {user} = useAppCtx();

  let popCheck = false;

  const [goalDisplay, setGoalDisplay] = useState({weightLoss: 0, weightGain: 0, bmi: 20.0, totalCalorieGoal: 0})
  
  const [graphDisplay, setGraphDisplay] = useState([])

  async function getGoals(){

    try {
      console.log(user)
      const query = await fetch(`api/users/${user?._id}/goals`)
      const response = await query.json()
      console.log(response)
      if( response.result === "success" ){
        setGoalDisplay({
          weightGain: response.weightGain, 
          weightLoss: response.weightLoss,
          bmi: response.bmi,
          totalCalorieGoal: response.totalCalorieGoal
        })
      }
      popCheck = true
    } catch(err){
      console.log(err.message)
    }
  }

  async function getWorkouts(){

    try {
      console.log(user)
      const query = await fetch(`api/users/${user?._id}/workouts`)
      const response = await query.json()
      console.log(response)
      if( response.result === "success" ){
        setGraphDisplay(response.payload)
      }
    } catch(err){
      console.log(err.message)
    }
  }

  useEffect(() => {
    getGoals()
    getWorkouts()
  },[user._id])



  if( !user?._id) return <></>
  return (
    <>
      <h1>Goal Page</h1>
      <p>My BMI goal is {goalDisplay.bmi}</p>
      <LineChartDisplay graph={graphDisplay}/>
    </>
  )
}