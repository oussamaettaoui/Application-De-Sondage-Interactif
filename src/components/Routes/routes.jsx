import React from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import Survey from '../Home/Survey'
import HomePage from "../Home/HomePage"
import SurveyForm from '../Home/SurveyForm'
import CreateSurvey from '../Home/CreateSurvey'




function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/CreateSurvey" element={<CreateSurvey/>}/>
      <Route path="/Survey/{id}" element={<Survey  />} />
      <Route path="/SurveyForm" element={<SurveyForm/>}/>
    </RouterRoutes>
  )
}

export default Routes