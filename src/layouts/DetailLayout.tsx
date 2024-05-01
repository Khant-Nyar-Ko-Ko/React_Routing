import React from 'react'
import { Nav } from '../components'
import { Outlet } from 'react-router-dom'

const DetailLayout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default DetailLayout