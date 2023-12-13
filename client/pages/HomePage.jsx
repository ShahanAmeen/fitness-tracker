
import { useAppCtx } from "../utils/AppProvider";
import "bootstrap/dist/css/bootstrap.css";

export default function HomePage() {

  const { user } = useAppCtx();

  if (!user?._id) {
    return (
      <>
        <h1 className="text-center">Hey there!</h1>
        <p>Thanks for stopping by to enjoy the scenery and, perhaps, use this wonderful application made entirely for working out, making goals, and check how you're doing along the way!</p>
      </>
    )
  }
  return (
    <>
      <h1 className="text-center">Welcome back, {user.firstname}!</h1>
    </>
  )
}