import { useEffect, useState, createContext, useContext } from "react"
import { useAppCtx } from "../utils/AppProvider"


export default function Auth(){

  const appCtx = useAppCtx()

  const [ userData, setUserData ] = useState({ email: "", password: "", firstname: '', lastname: '', height: 0, weight: 0, gender: '', totalCalories: 0, bmi: 0.0})

  function handleInputChange(e){
    setUserData({...userData, [e.target.name]: e.target.value })
  }

  // need to make sure no fields are blank when submitting form (add checks later)
  async function handleFormSubmit(e){
    e.preventDefault()
    const finalPath = `/api/users`

    const calcBMI = (720*userData.weight)/(userData.height)
    setUserData({...userData, bmi: calcBMI})    

    try {
      const query = await fetch(finalPath, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const response = await query.json()
      setUserData(response.payload)
      console.log(response)
      if( response.result === "success" ){
        // clarify what the homepage or '/' is later with group
        // window.location.href = "/"
        console.log('success')
      }
    } catch(err){
      console.log(err.message)
    }
  }

  useEffect(() => {
    setUserData({...userData, email: appCtx.user.email || "" })
  },[appCtx])


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h2>Signup</h2>
          <div>
            <div>
              <label className="d-block">Email Address</label>
              <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
            </div>

            <div>
              <label className="d-block">Password</label>
              <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
            </div>

            <div>
              <label className="d-block">First Name</label>
              <input type="text" name="firstname" value={userData.firstname} onChange={handleInputChange} />
            </div>
            
            <div>
              <label className="d-block">Last Name</label>
              <input type="text" name="lastname" value={userData.lastname} onChange={handleInputChange} />
            </div>

            <div>
              <label className="d-block">Height (in inches)</label>
              <input type="number" name="height" value={userData.height} onChange={handleInputChange} />
            </div>

            <div>
              <label className="d-block">Weight (in pounds)</label>
              <input type="number" name="weight" value={userData.weight} onChange={handleInputChange} />
            </div>

            <div>
              <label className="d-block">Gender</label>
              <input type="text" name="gender" value={userData.gender} onChange={handleInputChange} />
            </div>
          </div>

          <button className="mt-2">Submit Info</button>
        </div>
      </form>

      {/* <a href='/login' class='button-style'>Already signed-up? Log in here</a> */}
    </div>
  )

}