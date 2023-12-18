import Categorize from "../components/formBuilder/categorize";
import Cloze from "../components/formBuilder/cloze";
import Comprehension from "../components/formBuilder/comprehension";

import useCategorize from "../hooks/formBuilder/useCategorize";
import useCloze from "../hooks/formBuilder/useCloze";
import useComprehension from "../hooks/formBuilder/useComprehension";

export default function FormBuilder(){

    const categorize = useCategorize()
    const cloze = useCloze()
    const comprehension = useComprehension()

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
                body: JSON.stringify({categorize: categorizeQues, cloze: clozeQues, comprehension: comprehensionQues}),
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
        <div className="mx-8 py-8">
            <h1 className="text-5xl font-bold">Form Builder</h1>
            <Categorize categorize={categorize}/>
            <Cloze cloze={cloze}/>
            <Comprehension comprehension={comprehension}/>
            <button onClick={submitForm} className='bg-orange-200 py-2 px-4'>Submit</button>
        </div>
    )
}