import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import './formBuilder.css'

import Categorize from "../components/formBuilder/categorize";
import Cloze from "../components/formBuilder/cloze";
import Comprehension from "../components/formBuilder/comprehension";
import Header from "../components/header";

import useCategorize from "../hooks/formBuilder/useCategorize";
import useCloze from "../hooks/formBuilder/useCloze";
import useComprehension from "../hooks/formBuilder/useComprehension";

export default function FormBuilder(){

    const categorize = useCategorize()
    const cloze = useCloze()
    const comprehension = useComprehension()

    const [heading, setHeading] = useState('')

    async function submitForm(){
        const clozeRef = cloze.clozeRef
        const compRef = comprehension.passageRef

        const categorizeQues = categorize.categorizeQues
        const clozeQues = cloze.clozeQues.map((ques) => ({...ques, question: clozeRef.current[ques.id].innerHTML}))
        const comprehensionQues = comprehension.comprehensionQues.map((ques) => ({...ques, text: compRef.current[ques.id].value}))

        const formData = new FormData()
        formData.append('categorize', categorizeQues)
        formData.append('cloze', clozeQues)
        formData.append('comprehension', comprehensionQues)

        console.log(categorizeQues, clozeQues, comprehensionQues)
        try{
            const response = await fetch(`${import.meta.env.VITE_URL}/api/forms`, {
                method: 'POST',
                body: JSON.stringify({heading, categorize: categorizeQues, cloze: clozeQues, comprehension: comprehensionQues}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if(!response.ok) return

            const data = await response.json()
            console.log(data)
        }catch(err){
            console.log(err.message)
        }
    }

    return (
        <>
            <header className=" shadow-md fixed top-0 left-0 w-full bg-white">
                <div className="py-4 px-8 flex items-center">
                    <Header/>
                    <div className="ml-auto mr-2">
                        <Link className="p-4 hover:bg-gray-50 rounded-full" title="preview" to='preview' target="_blank" rel="noreferrer"><i className="fa fa-eye text-xl text-gray-600"></i></Link>
                    </div>
                    <button title="save form" onClick={submitForm} className='bg-purple-700 text-white capitalize py-2 px-4'>save form</button>
                </div>
                <div className="text-center mt-4 pb-2">
                    <NavLink className='mx-4 pb-2 font-semibold' to='/forms/questions'>Questions</NavLink>
                    <NavLink className='mx-4 text-gray-400' to='/forms/responses'>Responses</NavLink>
                    <NavLink className='mx-4 text-gray-400' to='/forms/settings'>Settings</NavLink>
                </div>
            </header>
            <label className='mt-8 mx-auto block' htmlFor="heading">Form heading:</label>
            <input className='w-5/12 p-2' placeholder="Enter form heading" type="text" name="heading" value={heading} onChange={e => setHeading(e.target.value)}/>
            <Categorize categorize={categorize}/>
            <Cloze cloze={cloze}/>
            <Comprehension comprehension={comprehension}/>
        </>
    )
}