
import { useAppCtx } from "../utils/AppProvider";
import "bootstrap/dist/css/bootstrap.css";

export default function HomePage() {

  const { user } = useAppCtx();

  if( !user?._id ){
    return (
      <>
        <p>hmmmge</p>
      </>
    )
  } 
  return (
    <>
      <h1 className="text-center">Welcome back, {user.firstname}!</h1>
    </>
  )
}