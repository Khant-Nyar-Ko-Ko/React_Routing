import { Nav } from '../components'
import { Outlet } from 'react-router-dom'

const ExpertLayout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default ExpertLayout