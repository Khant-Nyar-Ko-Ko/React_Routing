import { Nav } from '../components'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default UserLayout