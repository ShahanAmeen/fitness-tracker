import { useState, useEffect } from "react"
import { useAppCtx } from "../utils/AppProvider";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export default function GoalDisplay() {

  const {user} = useAppCtx;

  const [newGoal, displayNewGoal] = useState({weightLoss: 0, weightGain: 0, totalCalorieGoal: 0,});
  
  fetch (`/api/user/goals`, {
    method: "GET",
    body: JSON.stringify(newGoal), // 
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
      <ListGroup variant="flush">
        <ListGroup.Item>weightLoss: </ListGroup.Item>
        <ListGroup.Item>weightGain:</ListGroup.Item>
        <ListGroup.Item>total Calorie Goal:</ListGroup.Item>
      </ListGroup>
    </Card>
    </>
  )
}