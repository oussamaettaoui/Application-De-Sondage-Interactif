
import { getFirestore ,addDoc, collection, getDocs} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../data/data";

export function useFetch() {
    const [data, setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const surveyRef = collection(db, "surveys");
    useEffect(() => {
        const getSurvey = async () => {
            try {
                const dt = await getDocs(surveyRef);
                setData(dt.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error("Error fetching surveys: ", error);
            } finally {
                setIsLoading(false);
            }
    };
        getSurvey();
    },[]);
    return {data,isLoading};
}
