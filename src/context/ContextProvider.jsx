import React, { createContext, useRef, useState } from "react";
import { useSurvey } from "../hooks/useSurvey";
import { useCreateSurvey } from "../hooks/useCreateSurvey";
import { getFirestore ,addDoc, collection, getDocs} from "@firebase/firestore";
import { v4 as uuid } from 'uuid'
import { db } from "../data/data";
import { useNavigate } from "react-router-dom";


//
export const AppContext = createContext();
//
export const ContextProvider = ({children})=>{
    const {useSurveyState,useSurveyDispatch} = useSurvey();
    const {useCreateSurveyState,useCreateSurveyDispatch} = useCreateSurvey();
    const navigate = useNavigate();
    const [image,setImg] = useState("../1.jpg")
    const handleImg= (e)=>{
        setImg(e.target.files[0])
    }
    //
    const titleRef = useRef();
    const descriptionRef = useRef();
    //
    const surveyRef = collection(db, "surveys");
    const handleCreateSurveySubmit =async(e)=>{
        e.preventDefault();
        if (!titleRef.current.value || !descriptionRef.current.value) {
            alert("Title and Description are required");
            return;
        }
        const survey = {
            id : uuid(),
            title : titleRef.current.value ,
            description : descriptionRef.current.value ,
            questions : useCreateSurveyState.survey,
            img: image,
            time : Date.now(),
            totalCount: 0,
            femaleCount: 0,
            maleCount: 0
        }
        try {
            await addDoc(surveyRef, survey);
            e.target.reset();
            navigate("/");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
    return (
        <AppContext.Provider value={{useSurveyState,useSurveyDispatch,useCreateSurveyState,useCreateSurveyDispatch,titleRef,descriptionRef,handleCreateSurveySubmit,handleImg}}>
            {children}
        </AppContext.Provider>
    )
}