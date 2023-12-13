import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useAppCtx } from "../utils/AppProvider";
import { useEffect, useState, useContext } from "react"

export default function LineChartDisplay(props) {

  const {user} = useAppCtx();

  const [data, setData] = useState([]);
  let dataHolder = []


  async function fixData() {
    for(let x=0; x<props.graph.length; x++){
      const input = {name: `Workout ${x+1}`, weight: props.graph[x].afterWorkoutWeight, pv: 2400, amt: 2400}

      dataHolder.push(input)
    }
    setData(dataHolder)
  }

  async function renderData(){
    if (props.graph.length !== 0){

      await fixData()

    }
  }
  
  useEffect(() => {

    renderData()
  },[props])

  // const dataTest = [{name: 'Page A', uv: 148, pv: 2400, amt: 2400}, {name: 'Page B', uv: 140, pv: 2400, amt: 2400}, {name: 'Page C', uv: 142, pv: 2400, amt: 2400}];

  if( !props?.graph ) return <><p>waiting for info...</p></>
  return (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="weight" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
  )
};