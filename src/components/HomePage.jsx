import { Link } from 'react-router-dom';
import '../styles/home_page.scss'
import { useContext } from 'react';
import { AppContext } from '../context/ContextProvider';
import { info } from '../data/homeInfo';
import Loading from './Loading';
function HomePage() {
  const {useSurveyState} = useContext(AppContext);
  console.log(useSurveyState)
  return (
    <div className='HomePageContainer'>
      <div className='Introduction'>
        <div className='IntroInfo'>
          <h3 className='IntroInfoTitle'>{info.title}</h3>
          <div className='IntroInfoDescription'>{info.description}</div>
          <div className='IntroInfoButtons'>
            <Link to='/Surveys'><div className='CreateSurveyBtn BtnAnimation'>Views Surveys</div></Link>
            <Link to='/CreateSurvey'><div className='ViewSurveysBtn BtnAnimation'>Create A Survey</div></Link>
          </div>
        </div>
        <div className='imgContainer'><img src="../../survey.png" alt="" /></div>
      </div>
      <h1 className='LatestSurveyTitle'>Latest Surveys</h1>
      {!useSurveyState.isLoading ? <div className='SurveyCards'>
        {useSurveyState.surveys.map((survey,i)=>{
          return (
            <div className='SurveyCard' key={i}>
              <div className='SurveyImgContainer'><img src={survey.img} alt="" /></div>
              <div className='SurveyInfoContainer'>
                <h1 className='SurveyTitle'>{survey.title.substr(0,15)}...</h1>
                <div className='SurveyDescription'>{survey.description.substr(0,30)}...</div>
                <div className='SurveyBtnContainer'>
                  <Link to={'/SurveyReport/'+survey.id}><div className='SurveyReportBtn'>Survey Report</div></Link>
                  <Link to={'/SurveyForm/'+survey.id}><div className='AnswerSurveyBtn'>Answer Survey</div></Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>  : <Loading/>}  
      <div className='SeeMoreWrapper'>
          <Link to='/Surveys'><button className='SeeMoreBtn'>See More Survey...</button></Link>
        </div>
    </div>
  )
}

export default HomePage