import { Route, Routes } from "react-router-dom"
import Signin from "../Autharisation/Signin"
import Signup from "../Autharisation/Signup";
import Home from '../Home/Home';
import ProtectedRoute from "../Autharisation/ProtectedRoute";
const Router = ()=>{
    return(
        <Routes>
            <Route index exact path="/" element={<Signin/>}/>
            <Route path="/login" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        </Routes>
    )
}
export default Router;