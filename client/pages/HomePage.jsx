
import { useAppCtx } from "../utils/AppProvider";
import "bootstrap/dist/css/bootstrap.css";

export default function HomePage() {

  const { user } = useAppCtx();

  if( !user?._id ){
    return (
      <>
        <h1 className="text-center">Hello there, person!</h1>
        <p className="text-center">Welcome to our application, the Fitness Tracker! First and foremost, if you are a returning user, feel free to click that friendly "Login" button at the top left corner there, and go about your business! If you're someone new, I'll let you know a little bit about what we have going on in this neat little thing. Really, the goal of this application is to help keep you going in terms of motivation to workout and further improve yourself physically as your fitness journey progresses. Our application helps track height, weight, BMI, the workouts that you've done, and how far along you are in your goals that YOU make! </p>
      </>
    )
  } 
  return (
    <>
      <h1 className="text-center">Welcome back, {user.firstname}!</h1>
    </>
  )
}