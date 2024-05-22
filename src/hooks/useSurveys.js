import { useEffect, useReducer } from "react";
import { useFetch } from "./useFetch";


export const SURVEYS_ACTIONS = {
    HANDLE_SET_SURVEYS:'HANDLE_SET_SURVEYS',
}
const surveyReducer = (state,action)=>{
    switch(action.type){
        case SURVEYS_ACTIONS.HANDLE_SET_SURVEYS :
            const sortedSurveys = action.payload.data.sort((a,b) => b.time - a.time);
            return {...state , isLoading : action.payload.isLoading,surveys : sortedSurveys};
        default :
            throw new Error("Invalid Action");
    }
}
export function useSurveys() {
    const {data, isLoading } = useFetch();
    const [state,dispatch] = useReducer(surveyReducer,{isLoading : true , surveys : data});
    useEffect(() => {
        if (data) {
            dispatch({ type: SURVEYS_ACTIONS.HANDLE_SET_SURVEYS, payload: {data , isLoading} });
        }
    }, [data]);
    return {state ,dispatch };
}
