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
                    <NavLink className='mx-4 text-gray-400 pointer-events-none' to='/forms/responses'>Responses</NavLink>
                    <NavLink className='mx-4 text-gray-400 pointer-events-none' to='/forms/settings'>Settings</NavLink>
                </div>
            </header>
            <main className="pt-24 bg-amber-50">
                <div className="rounded-xl overflow-hidden shadow-md w-7/12 mx-auto mt-32">
                <div className="px-4  py-6 w-full mx-auto bg-white border-t-gray-700 border-t-8">
                    <label aria-label="form-title" className='hidden' htmlFor="heading">Form title</label>
                    <input className='block mx-auto w-full p-2 text-3xl outline-none border-gray-500 border-b border-x-0 border-t-0 rounded-none focus:border-b-2' placeholder="Form title" type="text" name="heading" value={heading} onChange={e => setHeading(e.target.value)}/>

                    <label aria-label="form-description" htmlFor="description" className="hidden">description</label>
                    <input type="text" placeholder="Form description" className='block mt-3 mx-auto p-1 w-full text-lg outline-none border-gray-500 border-b border-x-0 border-t-0 rounded-none focus:border-b-2'/>
                </div>
                </div>
                <Categorize categorize={categorize}/>
                <Cloze cloze={cloze}/>
                <Comprehension comprehension={comprehension}/>
            </main>
        </>
    )
}