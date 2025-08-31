import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

const AuthProvider = ({children}) => {
      const [user, setUsers] = useState(null)


      // create User with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin user with email and password
    const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    // delete account for myself
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
          signInUser,
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