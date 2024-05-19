import { useEffect, useReducer } from "react"
import { useFetch } from "./useFetch";
export const ACTIONS = {
    HANDLE_SET_SURVEYS:'HANDLE_SET_SURVEYS',
}
const surveyReducer = (state,action)=>{
    switch(action.type){
        case ACTIONS.HANDLE_SET_SURVEYS :
            return {...state ,surveys : action.payload};
        default :
            throw new Error("Invalid Action");
    }
}
export function useSurvey() {
    const {data, isLoading } = useFetch();
    const [state,dispatch] = useReducer(surveyReducer,{surveys : data});
    useEffect(() => {
        if (data) {
            dispatch({ type: ACTIONS.HANDLE_SET_SURVEYS, payload: data });
        }
    }, [data]);
    return {useSurveyState : state , useSurveyDispatch :  dispatch };
}