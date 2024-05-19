import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/header.scss'

function NavBar() {
  const location = useLocation()
  const navList = [
    {name : 'Home', path : '/'},
    {name : 'Surveys', path : '/Surveys'},
    {name : 'Create Survey', path : '/CreateSurvey'},
  ]
  
  return (
    <div className='NavbarContainer'>
      <div className='Header FlexBetween Sticky'>
        <Link to='/' className='logoContainer'>
          <div className='iconContainer'><img src="../../surveyIcon.png" alt="survey-icon" /></div>
          <h2>SurveyApp</h2>
        </Link>
        <ul className='navList'>
          {navList.map((item,i)=>{
            return (
              <li key={i}><Link className={location.pathname === item.path && 'activeLink'} to={item.path}>{item.name}</Link></li>
            )
          })}
        </ul>
      </div>
      
    </div>
  )
}

export default NavBar