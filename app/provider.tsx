'use client'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { UserDetailContext } from '@/context/UserDetailContext'

function Provider({children}:any) {

  const [userData, setUserData] = useState()

  const CreateNewUser = async ()=>{
    const result = await axios.post('/api/user', {})
    
    console.log(result.data)
    setUserData(result?.data)
  }

  useEffect(()=>{
    CreateNewUser()
  }, [])
  return (
   <UserDetailContext.Provider value={{userData, setUserData}}>
     <div>{children}</div>
   </UserDetailContext.Provider>
  )
}

export default Provider