import { Route, Routes as RouterRoutes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import CreateSurvey from '../components/create-survey/CreateSurvey'
import SurveyForm from '../components/survey-form/SurveyForm'
import SurveyReport from '../components/SurveyReport'
import Surveys from '../components/Surveys'

function Routing() {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/CreateSurvey" element={<CreateSurvey />}/>
      <Route path="/SurveyReport/:id" element={<SurveyReport/>} />
      <Route path="/SurveyForm/:id" element={<SurveyForm/>}/>
      <Route path='/Surveys' element={<Surveys/>}></Route>
    </RouterRoutes>
  )
}

export default Routing