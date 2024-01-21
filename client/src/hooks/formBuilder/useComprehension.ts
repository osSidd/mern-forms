import { useRef, useState } from "react"

import { addField, addQuestion, removeQuestion, removeField, handleInput } from "../../utils/functions"
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

    const passageRef = useRef({})
    
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

    //handle input
    function handleInputChange(e, qId, field, fId, fKey){
        const {value} = e.target
        setComprehensionQues(prev => handleInput(prev, qId, field, fId, fKey, value))
    }

    return {
        comprehensionQues,
        passageRef,
        addComprehensionQuestions,
        removeComprehensionQuestion,
        addMcq,
        removeMcq,
        handleInputChange,
    }
}