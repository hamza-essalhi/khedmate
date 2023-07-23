import { useSelector } from 'react-redux'
import {Navigate,Outlet} from 'react-router-dom'
const AuthRoute = () => {
    const {user}=useSelector((state)=>state.auth)
    return user ? <Navigate to='/' replace/> : <Outlet/>
}
 
export default AuthRoute;