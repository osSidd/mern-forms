import { useState } from "react"
import { debounce } from "../../utils/functions"
import { QuestionType } from "../../types"

export default function useQuestions(){
    
    interface formContentType{
        id: number
        label: string
        icon: string
        question: string
    }

    const [formContent, setFormContent] = useState<formContentType[]>([])
    const [modal, setModal] = useState({display: false, text: ''})
    const [imgModal, setImgModal] = useState({display: false})
    
    function toggleFormContent(action:string){
        switch(action){
            case 'ADD_QUESTION':
                addQuestion()
                return
        }
    }

    function duplicateQuestion(id: number){
        setFormContent(prev => {
            let arr = [...prev]
            
            let content = prev.find(item => item.id === id) as formContentType
    
            arr.splice(id+1, 0, {...content, id: content.id + 1})
            return arr.map((item, index) => ({...item, id: index}))
        })
    }

    function addQuestion(){
        setFormContent(prev => ([...prev, {id: prev.length, question: '', label: 'Multiple choice', icon: 'dot-circle-o'}]))
    }

    function removeQuestion(id: number){
        setModal({display:true, text:'Item deleted'})
        setFormContent(prev => (prev.filter(ques => ques.id !== id)))
        debounce(() => {setModal({display: false, text: ''})})()
    }

    function selectQuestion(option: QuestionType){
        setFormContent(prev => prev.map(item => (
            {
                ...item, 
                label: option.id === item.id ? option.label : item.label,
                icon: option.id === item.id ? option.icon : item.icon
            }
        )))
    }

    function handleQuestionChange(id:number, value:string){
        setFormContent(prev => prev.map(ques => ({
            ...ques,
            question: id === ques.id ? value : ques.question
        })))
    }

    function showImgModal(display=false){
        setImgModal({display})
    }

    return {
        formContent,
        modal,
        imgModal,
        toggleFormContent,
        duplicateQuestion,
        removeQuestion,
        selectQuestion,
        handleQuestionChange,
        showImgModal,
    }
}