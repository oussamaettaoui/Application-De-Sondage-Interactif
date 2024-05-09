import React, { useMemo, useState } from 'react'
import { demo } from '../../data/data';
function HomePage() {
  const [data,setData] = useState(demo);
  const [search,setSearch] = useState('')
  const surveys = useMemo(()=>{
    return data.filter(e=>e.title.toLowerCase().includes(search.toLowerCase()))
  },[search])
  return (
    <div className='w-full h-max'>
      <h1 className='font-bold text-7xl text-center my-8'>Survey Page</h1>
      <div className='w-[35rem] h-max mx-auto my-12'><input type="text" value={search} onChange={e=>setSearch(e.target.value.trimStart())} placeholder='Look for a survey' className='w-[35rem] text-black py-2 px-4 rounded' /></div>
      <div className='flexBox'>
        {surveys.map((survey,i)=>{
          return (
            <div className='' key={i}>
              <div className=''>
                <h1 className=''>{survey.title}</h1>
                <div className=''>{survey.description}</div>
              </div>
              <div className=''><img src={survey.img} alt={survey.title} /></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage