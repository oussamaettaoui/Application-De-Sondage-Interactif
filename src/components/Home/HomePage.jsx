import React, { useEffect, useMemo, useState } from 'react'
import { demo } from '../../data/data';
import { Link } from 'react-router-dom';
function HomePage() {
  const [data,setData] = useState(demo);
  const [search,setSearch] = useState('')
  useEffect(()=>{},[])
  const surveys = useMemo(()=>{
    return data.filter(e=>e.title.toLowerCase().includes(search.toLowerCase()))
  },[search])
  return (
    <div className='w-full h-max'>
      <h1 className='font-bold text-7xl text-center my-8'>Survey Page</h1>
      <div className='w-[35rem] h-max mx-auto my-12'><input type="text" value={search} onChange={e=>setSearch(e.target.value.trimStart())} placeholder='Look for a survey' className='w-[35rem] text-black py-2 px-4 rounded' /></div>
      <div className='flexBox flex-col'>
        {surveys.map((survey,i)=>{
          return (
            <div className='flex odd:flex-row-reverse justify-center gap-12 px-4 py-2 my-5' key={i}>
              <div className='w-1/2'>
                <h1 className='text-2xl font-bold'>{survey.title}</h1>
                <div className='pt-4 '>{survey.description}</div>
                <div className='flexBox gap-16 mt-14'>
                  <Link to=''><div className='primaryEmeraldBtn animationBtn'>Survey Report</div></Link>
                  <Link to=''><div className='primaryGreenBtn animationBtn'>Answer Survey</div></Link>
                </div>
              </div>
              <div className='w-96 h-64'><img className='w-full h-full' src={survey.img} alt={survey.title} /></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage