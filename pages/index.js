import React from 'react'
import Login from '../components/login'
import ProductsPage from '../components/Products'
import {useSession} from 'next-auth/react'


export default function IndexPage() {
  const session = useSession()

  if (session.data === null){
      return ( <Login/> )
  }
  return( <ProductsPage/>  )
  
} 
 


