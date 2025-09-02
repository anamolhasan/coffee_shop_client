import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router'
import Loading from '../components/Loading'

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

    if(loading) return <Loading />

    if(!user) {
        return <Navigate to={'/signIn'}/>
    }

  return children
}

export default PrivateRoute