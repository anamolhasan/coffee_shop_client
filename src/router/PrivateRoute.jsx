import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router'
import Loading from '../components/Loading'

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)
    const location = useLocation()

    if(loading) return <Loading />


// ---------------------------------------------------------------------
  //   if(!user) {
  //       return <Navigate state={location?.pathname} to={'/signIn'}/>
  //   }
  // return children
  
  // --------- or ---------------

  if(user && user?.email){
    return children
  }
  return <Navigate state={location.pathname} to={'/signIn'}/>
// ---------------------------------------------------------------------

}

export default PrivateRoute