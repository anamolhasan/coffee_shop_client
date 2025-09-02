import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const AuthProvider = ({children}) => {
      const [user, setUsers] = useState(null)
      const [loading, setLoading] = useState(true)

      const googleProvider = new GoogleAuthProvider();


      // create User with email and password
    const createUser = (email, password) => {
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin user with email and password
    const signInUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const googleSignIn = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    // signOut user
    const signOutUser = () => {
      setLoading(true)
      return signOut(auth)
    }

    // delete account for myself
    const deleteAccountUser = () => {
         if (auth.currentUser) {
            return deleteUser(auth.currentUser)
         }
         return Promise.reject(new Error('No user login'))
    }


    // observe
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
              setUsers(currentUser)
              setLoading(false)
      })
      return ()=> unSubscribe()
    },[])

    const userInfo = {
          user,
          loading,
          createUser,
          signInUser,
          googleSignIn,
          signOutUser,
          deleteAccountUser
    }
  return (
    <AuthContext value={userInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider