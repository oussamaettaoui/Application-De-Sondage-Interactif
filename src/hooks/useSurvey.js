import { useEffect, useReducer } from "react"
import { useFetch } from "./useFetch";
export const ACTIONS = {
    HANDLE_SET_SURVEYS:'HANDLE_SET_SURVEYS',
}
const surveyReducer = (state,action)=>{
    switch(action.type){
        case ACTIONS.HANDLE_SET_SURVEYS :
            return {...state , isLoading : action.payload.isLoading,surveys : action.payload.data};
        default :
            throw new Error("Invalid Action");
    }
}
export function useSurvey() {
    const {data, isLoading } = useFetch();
    const [state,dispatch] = useReducer(surveyReducer,{isLoading : true , surveys : data});
    useEffect(() => {
        if (data) {
            dispatch({ type: ACTIONS.HANDLE_SET_SURVEYS, payload: {data , isLoading} });
        }
    }, [data]);
    return {useSurveyState : state , useSurveyDispatch :  dispatch };
}