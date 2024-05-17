import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/header.scss'

function NavBar() {
  const location = useLocation()
  const navList = [
    {name : 'Home', path : '/'},
    {name : 'Surveys', path : '/Surveys'},
    {name : 'Reports', path : '/Reports'},
  ]
  
  return (
    <div className='NavbarContainer'>
      <div className='Header FlexBetween Sticky'>
        <h1 className='HeaderTitle'><Link to={'/'}>SurveyApp</Link></h1>
        <ul className='navList'>
          {navList.map((item,i)=>{
            return (
              <li key={i}><Link className={location.pathname === item.path && 'activeLink'} to={item.path}>{item.name}</Link></li>
            )
          })}
        </ul>
      </div>
      <div className='Introduction'>
        <div className='IntroInfo'>
          <h3 className='IntroInfoTitle'>Survey Feedback</h3>
          <div className='IntroInfoDescription'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste aliquam quibusdam aperiam commodi nostrum. Aliquid magni tempore quo voluptatibus exercitationem voluptate voluptates vel tenetur, quaerat veniam sed possimus enim et?</div>
          <div className='IntroInfoButtons'>
            <button className=''>Get Started</button>
            <button className=''>View Surveys</button>
          </div>
        </div>
        <div className='imgContainer'><img src="../../survey.png" alt="" /></div>
      </div>
    </div>
  )
}

export default NavBar