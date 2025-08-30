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
         if (auth.currentUser) {
            return deleteUser(auth.currentUser)
         }
         return Promise.reject(new Error('No user login'))
    }


    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
              setUsers(currentUser)
      })
      return ()=> unSubscribe()
    },[])

    const userInfo = {
          createUser,
          user,
          deleteAccountUser
    }
  return (
    <AuthContext value={userInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider