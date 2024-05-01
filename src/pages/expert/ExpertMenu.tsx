import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Nav } from '../../components';
import One from './One';

const ExpertMenu = () => {
    const languages = ['JavaScript Course', 'Python Course', 'Java Course', 'C# Course', 'C++ Course', 'Ruby Course', 'Swift Course'];
    const navigate = useNavigate();

  return (
    <div className=' grid grid-cols-5'>
        <div className=' col-span-1 bg-slate-900 h-screen flex justify-center'>
        <ul>
        {languages.map((language, index) => (
          <li className=' text-white my-5 border-b-2 border-slate-400 pb-3 w-[250px]' key={index}>{language}</li>
        ))}
      </ul>
        </div>
        <div className=' col-span-4 bg-slate-200'>
          <button onClick={() => navigate(-1)} className=' bg-slate-950 text-white m-5 p-2 rounded'>Back</button>
          <button onClick={() => navigate(0)} className=' bg-slate-950 text-white m-5 p-2 rounded'>Refresh</button>
           <div className=' flex items-center gap-10 p-5'>
            <article onClick={() => navigate('one')} className='w-full h-60 p-4 bg-white rounded-md'>
                card one 
            </article>
            <article onClick={() => navigate('two')} className='w-full h-60 p-4 bg-white rounded-md'>
                card two 
            </article>
            <article onClick={() => navigate('three')} className=' w-full h-60 p-4 bg-white rounded-md'>
                card three 
            </article>
           </div>
           <main>
            <Outlet/>
           </main>
        </div>
    </div>
  )
}

export default ExpertMenu