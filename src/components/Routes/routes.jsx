import { Route, Routes as RouterRoutes } from 'react-router-dom'
import Survey from '../Home/Survey'
import HomePage from "../Home/HomePage"
import App from "../App/App"



const Routes = () => {

  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Survey" element={<Survey  />} />
      <Route path="/App" element={<App  />} />
      <Route path="*" element={<PageNotFound />} />
    </RouterRoutes>
  )
}

export default Routes