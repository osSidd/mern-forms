import { useState } from "react"

export default function Cloze(){

    const [clozeQues, setCloseQues] = useState([{text: '', options:[{name:''}]}])

    function underlineText(e){
        const id = e.target.id
        const str = window.getSelection()
        const rng = str.getRangeAt(0)
        const span = document.createElement('span')
        span.style.textDecoration='underline'
        rng.surroundContents(span)

        setCloseQues(prev => prev.map(item => ({
            ...item,
            options: prev.indexOf(item) === parseInt(id) ? [...item.options, {name: str.toString()}] : item.options
        })))
    }
    console.log(clozeQues)
    return(
        <div className="px-32">
            <h1 className="text-2xl font-semibold mb-8">Cloze</h1>
            {
                clozeQues.map(ques => {
                    const qIndex = clozeQues.indexOf(ques)
                    return (
                        <div>
                            <button
                                id={qIndex} 
                                onClick={underlineText} 
                                className="py-1 px-4"
                            >U</button>
                            <div 
                                contentEditable={true} 
                                className="border border-gray-400 w-full h-60 rounded-md p-2"
                            ></div>
                            <div>
                                {
                                    ques.options.map(opt => {
                                        const opIndex = ques.options.indexOf(opt)
                                        return (
                                            <div>
                                                <div>{opt.name}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}