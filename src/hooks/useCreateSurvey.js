import { useReducer } from "react"
import { v4 as uuid } from 'uuid'

export const CREATE_SURVEY_ACTIONS = {
    ADD_OPTION:'ADD_OPTION',
    ADD_QUESTION:'ADD_QUESTION',
    HANDLE_QUESTION : 'HANDLE_QUESTION',
    HANDLE_OPTION:'HANDLE_OPTIONS',
    DELETE_QUESTION : 'DELETE_QUESTION',
    DELETE_OPTION : 'DELETE_OPTION'
}
const createSurveyReducer = (state,action)=>{
    switch(action.type){
        case CREATE_SURVEY_ACTIONS.ADD_QUESTION :
            return {...state , survey : [...state.survey , {id:Date.now(),qs:'',options:[{id : uuid(),op : "", count : 0},{id : uuid(),op : "", count : 0}]}]};
        case CREATE_SURVEY_ACTIONS.ADD_OPTION :
            return {...state , survey : state.survey.map((e,i)=>{
                if(i === action.payload && e.options.length < 4){
                    return {...e,options : [...e.options , {id:uuid(),op:'',count:0}]}
                }return e
            })};
        case CREATE_SURVEY_ACTIONS.DELETE_OPTION :
            return {...state , survey : state.survey.map((e,i)=>{
                if(i=== action.payload.qsIndex && e.options.length > 2){
                    return {...e , options : e.options.filter(option=> option.id !== action.payload.optionId)}
                }return e;
            })};
        case CREATE_SURVEY_ACTIONS.HANDLE_QUESTION :
            console.log(state.survey);
            return {...state, survey : state.survey.map(e=>{
                if(e.id === action.payload.id){
                    return {...e,qs : action.payload.value}
                }return e;
            })}
        case CREATE_SURVEY_ACTIONS.HANDLE_OPTION :
            console.log(state.survey);
            return {...state,survey : state.survey.map((e,index)=>{
                if(index === action.payload.qsIndex){
                    console.log(action.payload);
                    return {...e,options : e.options.map(option=>{
                        if(option.id === action.payload.opId){
                            return {...option, op : action.payload.value};
                        }return option;
                    })}
                }return e;
            })};
        case CREATE_SURVEY_ACTIONS.DELETE_QUESTION :
            if(state.survey.length === 1 ){
                return state;
            }return {...state,survey : state.survey.filter(e=>e.id !== action.payload)}
        default :
            throw new Error("Invalid Action");
    }
}
export function useCreateSurvey() {
    const [state,dispatch] = useReducer(createSurveyReducer,{survey : [{id:uuid(), qs:'',options:[{id : uuid(),op : "", count : 0},{id : uuid(),op : "", count : 0}]}]})
    return { useCreateSurveyState : state, useCreateSurveyDispatch : dispatch}
}