
import React, { useEffect, useMemo, useState } from 'react'
import HomePage from '../components/HomePage'
import {demo} from '../data/data'
function HomePageContainer() {
    const [data,setData] = useState(demo);
    const [search,setSearch] = useState('')
    useEffect(()=>{},[])
    // for filtering the surveys
    const surveys = useMemo(()=>{
        return data.filter(e=>e.title.toLowerCase().includes(search.toLowerCase()))
    },[search])
    return (
        <HomePage surveys={surveys} setSearch={setSearch} search={search} />
    )
}

export default HomePageContainer