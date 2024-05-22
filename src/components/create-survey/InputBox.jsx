
import { FcFullTrash } from "react-icons/fc";
import '../../styles/input-box.scss'
import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import { CREATE_SURVEY_ACTIONS } from "../../hooks/useCreateSurvey";
function InputBox(props) {
    const {useCreateSurveyDispatch} = useContext(AppContext);
    const {options,qsIndex} = props;
    return (
        <div className='InputBoxWrapper'>
            {options.map((e,i)=>{
                return (
                    <div className="InputBoxContainer" key={i}>
                        <input className='InputBox' value={e.op} type="text" placeholder='Add Option'  onChange={event=>useCreateSurveyDispatch({type : CREATE_SURVEY_ACTIONS.HANDLE_OPTION,payload : {value:event.target.value,qsIndex,opId : e.id}})}/>
                        <FcFullTrash onClick={()=>useCreateSurveyDispatch({type : CREATE_SURVEY_ACTIONS.DELETE_OPTION, payload : {qsIndex, optionId : e.id}})} className="TrashIcon" />
                    </div>
                )
            })}
            <button type='button' className='InputBoxButton' onClick={()=>useCreateSurveyDispatch({type : CREATE_SURVEY_ACTIONS.ADD_OPTION , payload: qsIndex})}>+ Add</button>
        </div>
    )
}

export default InputBox