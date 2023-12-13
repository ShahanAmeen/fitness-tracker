import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useAppCtx } from "../utils/AppProvider";
import { useEffect, useState, useContext } from "react"

export default function LineChartDisplay(props) {

  const {user} = useAppCtx();

  const [data, setData] = useState([]);


  async function fixData() {
    for(let x=0; x<props.graph.length; x++){
      console.log(props.graph[x].afterWorkoutWeight)
      const input = {name: `Workout ${x+1}`, uv: props.graph[x].afterWorkoutWeight, pv: 2400, amt: 2400}

      setData([...data, input])
    }
  }

  async function renderData(){
    if (props.graph.length !== 0){
      console.log(props)
      await fixData()
      console.log(data)
    }
  }
  
  useEffect(() => {
    renderData()
  },[props])

  const dataTest = [{name: 'Page A', uv: 148, pv: 2400, amt: 2400}, {name: 'Page B', uv: 140, pv: 2400, amt: 2400}, {name: 'Page C', uv: 142, pv: 2400, amt: 2400}];

  if( !user?._id ) return <><p>waiting for info...</p></>
  return (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  )
};