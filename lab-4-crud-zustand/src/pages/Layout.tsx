import React from 'react'
import Heade from '../components/Heade'
import { Outlet } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className="container max-w-full">
        <Heade/>
      <main className="max-w-2xl mx-auto h-[80vh]">
        <Outlet /> 
        </main>
    </div>
  )
}

export default Layout