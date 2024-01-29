import React, { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import './formBuilder.css'

// import Categorize from "../components/formBuilder/categorize";
// import Cloze from "../components/formBuilder/cloze";
// import Comprehension from "../components/formBuilder/comprehension";
import Header from "../components/header";

// import useCategorize from "../hooks/formBuilder/useCategorize";
// import useCloze from "../hooks/formBuilder/useCloze";
// import useComprehension from "../hooks/formBuilder/useComprehension";
import FormHeading from "../components/formHeading";
import QuestionBox from "../components/questionBox";
import Icon from "../components/icon";
import Toolbar from "../components/toolbar";
import { QuestionType } from "src/types";

interface formContentType{
    id: number
    label: string
    icon: string
}

export default function FormBuilder(){
    const [formContent, setFormContent] = useState<formContentType[]>([])
    // const categorize = useCategorize()
    // const cloze = useCloze()
    // const comprehension = useComprehension()

    // const [heading, setHeading] = useState('')

    // async function submitForm(){
    //     const clozeRef = cloze.clozeRef
    //     const compRef = comprehension.passageRef

    //     const categorizeQues = categorize.categorizeQues
    //     const clozeQues = cloze.clozeQues.map((ques) => ({...ques, question: clozeRef.current[ques.id].innerHTML}))
    //     const comprehensionQues = comprehension.comprehensionQues.map((ques) => ({...ques, text: compRef.current[ques.id].value}))

    //     const formData = new FormData()
    //     formData.append('categorize', categorizeQues)
    //     formData.append('cloze', clozeQues)
    //     formData.append('comprehension', comprehensionQues)

    //     console.log(categorizeQues, clozeQues, comprehensionQues)
    //     try{
    //         const response = await fetch(`${import.meta.env.VITE_URL}/api/forms`, {
    //             method: 'POST',
    //             // body: JSON.stringify({heading, categorize: categorizeQues, cloze: clozeQues, comprehension: comprehensionQues}),
    //             body: JSON.stringify({categorize: categorizeQues, cloze: clozeQues, comprehension: comprehensionQues}),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })

    //         if(!response.ok) return

    //         const data = await response.json()
    //         console.log(data)
    //     }catch(err){
    //         console.log(err.message)
    //     }
    // }

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
        setFormContent(prev => ([...prev, {id: prev.length, label: 'Multiple choice', icon: 'dot-circle-o'}]))
    }

    function removeQuestion(id: number){
        setFormContent(prev => (prev.filter(ques => ques.id !== id)))
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

    return (
        <>
            <header className=" shadow-md fixed top-0 left-0 w-full bg-white z-10">
                <div className="py-4 px-8 flex items-center">
                    <Header/>
                    <div className="ml-auto mr-2">
                        <Link className="p-4 hover:bg-gray-50 rounded-full" title="preview" to='preview' target="_blank" rel="noreferrer"><Icon icon='eye'/></Link>
                    </div>
                    <button title="save form" onClick={() => {}} className='hidden sm:block bg-purple-700 text-white capitalize py-2 px-4'>save form</button>
                </div>
                <div className="text-center mt-2 pb-2">
                    <NavLink className='mx-4 pb-2 font-semibold' to='/forms/questions'>Questions</NavLink>
                    <NavLink className='mx-4 text-gray-400 pointer-events-none' to='/forms/responses'>Responses</NavLink>
                    <NavLink className='mx-4 text-gray-400 pointer-events-none' to='/forms/settings'>Settings</NavLink>
                </div>
            </header>
            <main className="pt-36 bg-main min-h-screen">
                <FormHeading/>
                <div className="">
                    <div className="flex-1">
                        {
                            formContent.map(content => (
                                <QuestionBox
                                    key={content.id}
                                    content={content}
                                    selectQuestion={selectQuestion}
                                    removeQuestion={removeQuestion}
                                    duplicateQuestion={duplicateQuestion}
                                />
                            ))
                        }
                    </div>
                    <div style={{top: '25rem'}} className="fixed right-48">
                        <Toolbar handleClick={toggleFormContent}/>
                    </div>
                </div>
                {/* <Categorize categorize={categorize}/> */}
                {/* <Cloze cloze={cloze}/> */}
                {/* <Comprehension comprehension={comprehension}/> */}
            </main>
        </>
    )
}