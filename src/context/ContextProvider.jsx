import React, { createContext, useRef, useState } from "react";
import { useSurvey } from "../hooks/useSurvey";
import { useCreateSurvey } from "../hooks/useCreateSurvey";
import { getFirestore ,addDoc, collection, getDocs} from "@firebase/firestore";
import { v4 as uuid } from 'uuid'
import { db } from "../data/data";

//
export const AppContext = createContext();
//
export const ContextProvider = ({children})=>{
    const {useSurveyState,useSurveyDispatch} = useSurvey();
    const {useCreateSurveyState,useCreateSurveyDispatch} = useCreateSurvey();
    const [image,setImg] = useState("../1.jpg")
    const handleImg= (e)=>{
        setImg(e.target.files[0])
    }
    //
    const titleRef = useRef();
    const descriptionRef = useRef();
    //
    const surveyRef = collection(db, "surveys");
    const handleCreateSurveySubmit = (e)=>{
        e.preventDefault();
        const survey = {
            id : uuid(),
            title : titleRef.current.value ,
            description : descriptionRef.current.value ,
            questions : useSurveyState,
            img: image,
        }
        const docRef = addDoc(surveyRef, survey);
        e.target.reset();
    }
    return (
        <AppContext.Provider value={{useSurveyState,useSurveyDispatch,useCreateSurveyState,useCreateSurveyDispatch,titleRef,descriptionRef,handleCreateSurveySubmit,handleImg}}>
            {children}
        </AppContext.Provider>
    )
}