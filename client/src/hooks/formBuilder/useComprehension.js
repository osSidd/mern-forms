import { useState } from "react"

import { addField, addQuestion, removeQuestion, removeField } from "../../utils/functions"
import { comprehensionObj } from "../../utils/formBuilderUtils"

export default function useComprehension(){
     //comprehension questions
     const [comprehensionQues, setComprehensionQues] = useState([{
        id: 0,
        text: '', 
        ques: [{
            text: '', 
            a:'', 
            b:'', 
            c:'', 
            d:''}]
    }])
    
    //add a comprehension question
    function addComprehensionQuestions(){
        setComprehensionQues(prev => addQuestion(prev, comprehensionObj.question))
    }

    //remove a comprehension question
    function removeComprehensionQuestion(id){
        const index = parseInt(id)
        setComprehensionQues(prev => removeQuestion(prev, index))
    }

    //add a comprehension option
    function addMcq(id){
        const quesId = parseInt(id)
        setComprehensionQues(prev => addField(prev, quesId, 'ques', comprehensionObj.ques))
    }

    //remove a comprehension option
    function removeMcq(quesIndex, mcqIndex){
        const quesId = parseInt(quesIndex)
        const mcqId = parseInt(mcqIndex)

        setComprehensionQues(prev => removeField(prev, quesId, 'ques', mcqId))
    }

    return {
        comprehensionQues,
        addComprehensionQuestions,
        removeComprehensionQuestion,
        addMcq,
        removeMcq,
    }
}