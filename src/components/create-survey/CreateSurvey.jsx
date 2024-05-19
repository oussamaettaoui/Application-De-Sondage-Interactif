import QuestionBox from './QuestionBox';
import AddQuestion from './AddQuestion';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import '../../styles/create-survey.scss'

function CreateSurvey() {
  const {useCreateSurveyState,titleRef,descriptionRef,handleImg,handleCreateSurveySubmit} = useContext(AppContext);
  return (
    <div className='CreateSurveyContainer'>
      <h1 className='CreateSurveyTitle'>Create Survey</h1>
      <div className="FormContainer">
        <form onSubmit={handleCreateSurveySubmit}>
          <input name='title' className="SurveyInput" placeholder="Enter Survey Title" type="text" ref={titleRef} />
          <textarea name ='description' className="SurveyInput" placeholder="Survey Description" rows="4" ref={descriptionRef}></textarea>
          <div className='InputFileWrapper'>
            <input type="file" name="file" id="file" onChange={handleImg} className="inputFile" />
          </div>
          {useCreateSurveyState.survey.map((e,index)=>{
            return(
              <div key={index}><QuestionBox question={e} qsIndex={index} /></div>
            )
          })}
          <AddQuestion/>
          <button type='submit' className='CreateSurveySubmit'>Add Survey</button>
        </form>
      </div>
      
    </div>
  )
}

export default CreateSurvey