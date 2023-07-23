import { useSelector } from 'react-redux'
import {Navigate,Outlet} from 'react-router-dom'
const PrivetRoute = () => {
    const {user}=useSelector((state)=>state.auth)
    return user ? <Outlet/> :  <Navigate to='/login' replace/>
}
 
export default PrivetRoute;