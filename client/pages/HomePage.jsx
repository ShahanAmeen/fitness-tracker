
import { useAppCtx } from "../utils/AppProvider";

export default function HomePage(){

  const {user} = useAppCtx();

  if( !user?._id ){
    return (
      <>
        <p>hmmmge</p>
      </>
    )
  } 
  return (
    <>
      <h1>Home Page</h1>
      <p>The home page can be accessed by everyone.</p>
      <p>The user is: {user.email} right here</p>
    </>
  )
}