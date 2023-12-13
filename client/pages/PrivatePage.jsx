import { useEffect, useState, useContext } from "react"
import { useAppCtx } from "../utils/AppProvider";
import LineChartDisplay from '../components/LineChart'
import GoalDisplay from "../components/GoalDisplay";



export default function PrivatePage(){

  const {user} = useAppCtx();

  const [goalDisplay, setGoalDisplay] = useState([])
  
  const [graphDisplay, setGraphDisplay] = useState([])

  async function getGoals(){

    try {
      const query = await fetch(`api/users/${user?._id}/goals`)
      const response = await query.json()
      if( response.result === "success" ){
        console.log(response.payload)
        setGoalDisplay(response.payload)
      }
    } catch(err){
      console.log(err.message)
    }
  }

  async function getWorkouts(){

    try {
      const query = await fetch(`api/users/${user?._id}/workouts`)
      const response = await query.json()
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
      <LineChartDisplay graph={graphDisplay}/>
      <GoalDisplay />
    </>
  )
}