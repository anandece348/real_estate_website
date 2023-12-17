import { Navigate } from "react-router-dom"
import { isLoggedin } from "./auth"

const ProtectedRoute = ({children})=>{
      return (
        <>
         {isLoggedin() ? children : <Navigate to="/login"/>}
        </>
      )
}

export default ProtectedRoute;