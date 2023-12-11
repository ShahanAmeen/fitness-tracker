import { useState, useEffect } from "react"
import Auth from "../components/Auth"
import Signup from "../components/Signup"

export default function AuthPage(){


  return (
    <div className="d-flex gap-5">
      <div>
        <Signup />
      </div>

      <div>
        <Auth usage="login" />
      </div>
    </div>
  )
}