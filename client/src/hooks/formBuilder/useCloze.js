import { useState } from "react"

import { addField, addQuestion, removeQuestion, removeField, handleInput } from "../../utils/functions"
import { clozeObj } from "../../utils/formBuilderUtils"

export default function useCloze(){
    //cloze questions
    const [clozeQues, setClozeQues] = useState([{
        id: 0,
        question: '', 
        options:[{
            name:'', 
            underlined:false
        }]
    }])

    //add cloze question
    function addClozeQuestions(){
        setClozeQues(prev => addQuestion(prev, clozeObj.question))
    }

    //remove a cloze question
    function removeClozeQuestion(id){
        const index = parseInt(id)
        setClozeQues(prev => removeQuestion(prev, index))
    }

    //add a cloze option
    function addOption(id){
        const quesId = parseInt(id)
        setClozeQues(prev => addField(prev, quesId, 'options', clozeObj.options))
    }

    //remove a cloze option
    function removeOption(quesIndex, optionIndex){
        const quesId = parseInt(quesIndex)
        const optionId = parseInt(optionIndex)

        setClozeQues(prev => removeField(prev, quesId, 'options', optionId))
    }

    //handle input
    function handleInputChange(e, qId, field, fId, fKey){
        setClozeQues(prev => handleInput(e, prev, qId, field, fId, fKey))
    }
    

    return {
            clozeQues,
            addClozeQuestions,
            removeClozeQuestion,
            addOption,
            removeOption,
            handleInputChange,
    }
}