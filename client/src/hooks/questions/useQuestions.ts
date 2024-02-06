import { useState } from "react"
import { debounce } from "../../utils/functions"
import { QuestionType, formContentType } from "../../types"

export default function useQuestions(){

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
        setFormContent(prev => ([...prev, {
            id: prev.length, 
            question: '', 
            label: 'Multiple choice', 
            icon: 'dot-circle-o',
            options:{label:'Multiple choice', icon:'dot-circle-o', arr:['Option 1']}
        }]))
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
                options: option.id === item.id ? {...item.options, label:option.label, icon: option.icon} : item.options
            }
        )))
    }

    function handleQuestionChange(id:number, value:string){
        setFormContent(prev => prev.map(ques => ({
            ...ques,
            question: id === ques.id ? value : ques.question
        })))
    }

    function addOption(quesId:number){
        setFormContent(prev => prev.map(item => {
            let arr = item.options.arr
            return {
                ...item,
                options: quesId === item.id ? {...item.options, arr: [...arr, 'Option '+ (arr.length+1)]} : item.options
            }
        }))
    }

    function removeOption(quesId:number, optionId:number){
        setFormContent(prev => prev.map(item => {
            let arr = item.options.arr
            return {
                ...item,
                options: quesId === item.id ? {...item.options, arr: filterOptions(arr, optionId)} : item.options
            }
        }))
    }

    function filterOptions(arr: string[], optionId:number){
        let temp: string[] = []
        for(let i in arr){
            if(parseInt(i) !== optionId){
                if(arr[i].split(' ')[0] === 'Option') temp.push('Option ' + (temp.length+1))
                else temp.push(arr[i])
            }
        }
        return temp
    }

    function handleOptionChange(quesId:number, optionId:number, value:string){
        setFormContent(prev => prev.map(item => {
            let optionArr = item.options.arr
            return {
                ...item,
                options: quesId === item.id ? {...item.options, arr: optionArr.map((opt, index) => (index === optionId ? value : opt))} : item.options
            }
        }))
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
        addOption,
        removeOption,
        handleOptionChange,
        showImgModal,
    }
}