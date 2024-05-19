import { Route, Routes as RouterRoutes } from 'react-router-dom'
import SurveyReportContainer from '../containers/SurveyReportContainer'
import HomePage from '../components/HomePage'
import CreateSurvey from '../components/create-survey/CreateSurvey'
import SurveyForm from '../components/survey-form/SurveyForm'

function Routing() {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/CreateSurvey" element={<CreateSurvey />}/>
      <Route path="/SurveyReport/:id" element={<SurveyReportContainer/>} />
      <Route path="/SurveyForm/:id" element={<SurveyForm/>}/>
    </RouterRoutes>
  )
}

export default Routing