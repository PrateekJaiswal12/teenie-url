import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen container'>
        <Header/>
        {/* body */}
      <Outlet/>  
      </main>

      {/* footer */}
      <div className="p-10 text-center bg-gray-800 mt-10">
      © 2024 Teenie Url . All rights reserved | Contact us: prateekjaiswalpj07@gmail.com | +919079625292
      </div>
    </div>
  )
}

export default AppLayout
