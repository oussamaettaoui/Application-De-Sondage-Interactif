import React from 'react'
import { useSurveys } from '../hooks/useSurveys'
import '../styles/surveys.scss'
import Loading from './Loading';
import { Link } from 'react-router-dom';
function Surveys() {
    const {state,dispatch} = useSurveys();
    return (
        <div className='SurveysContainer'>
            <h1 className='SurveysTitle'>All Surveys</h1>
            {!state.isLoading ? <div className='SurveyCards'>
                {state.surveys.map((survey,i)=>{
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
            </div> : <Loading/>}
        </div>
    )
}

export default Surveys