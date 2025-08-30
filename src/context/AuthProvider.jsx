import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged } from 'firebase/auth'

const AuthProvider = ({children}) => {
      const [user, setUsers] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const deleteAccountUser = () => {
         return deleteUser(user)
    }


    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
              setUsers(currentUser)
      })
      return ()=> unSubscribe()
    },[])

    const userInfo = {
          createUser,
          user
    }
  return (
    <AuthContext value={userInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider