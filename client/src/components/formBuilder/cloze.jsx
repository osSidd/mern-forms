import { useState } from "react"

export default function Cloze(){

    const [clozeQues, setCloseQues] = useState([{text: '', options:[{name:'', underlined:false}]}])

    function underlineText(e){
        const id = e.target.id

        const span = document.createElement('span')
        span.style.textDecoration='underline'
        
        const str = window.getSelection()
        const rng = str.getRangeAt(0)
        rng.surroundContents(span)        
        
        addOption(id, str.toString(), true)
    }
    console.log(clozeQues)

    function addQuestion(e){
        setCloseQues(prev => ([...prev, {text:'', options:[{name: ''}]}]))
    }

    function removeQuestion(e){
        const id = parseInt(e.target.id)
        setCloseQues(prev => prev.filter(item => prev.indexOf(item) !== id))
    }

    function addOption(id, str, bool){
        setCloseQues(prev => prev.map(item => ({
            ...item,
            options: prev.indexOf(item) === parseInt(id) ? [...item.options, {name: str, underlined:bool}] : item.options
        })))
    }

    function handleOptionChange(e){
        const {value, dataset} = e.target
        const qId = parseInt(dataset.q)
        const opId = parseInt(dataset.op)

        setCloseQues(prev => prev.map(item => ({
            ...item,
            options: prev.indexOf(item) === qId ? mapField(item.options, value, opId) : item.options 
        })))
    }

    function mapField(arr, value, id){
        return arr.map(item => ({
            ...item,
            name: arr.indexOf(item) === id ? value: item.name
        }))
    }

    function removeOption(e){
        const {dataset} = e.target
        const qId = parseInt(dataset.q)
        const opId = parseInt(dataset.op)
        setCloseQues(prev => prev.map(item => ({
            ...item,
            options: prev.indexOf(item) === qId ? filterOptions(item.options, opId) : item.options
        })))
    }

    function filterOptions(arr, id){
        return arr.filter(op => arr.indexOf(op) !== id)
    }

    return(
        <div className="px-32">
            <h2 className="text-2xl font-semibold mb-8">Cloze</h2>
            {
                clozeQues.map(ques => {
                    const qIndex = clozeQues.indexOf(ques)
                    return (
                        <div className="mb-8">
                            <button
                                id={qIndex} 
                                onClick={underlineText} 
                                className="py-1 px-4"
                            >U</button>
                            <div className="flex items-start mb-6">
                                <div 
                                    contentEditable={true} 
                                    className="border border-gray-400 w-full h-60 rounded-md p-2"
                                ></div>
                                <span
                                    onClick={addQuestion}
                                    className="-mt-3 ml-8 text-4xl text-gray-500 cursor-pointer"                                
                                >
                                    &#43;
                                </span>
                                {qIndex > 0 && <span
                                    id={qIndex}
                                    onClick={removeQuestion}
                                    className="-mt-3 ml-8 text-4xl text-red-500 cursor-pointer"                                
                                >
                                    &#215;
                                </span>}
                            </div>
                            <div className="mb-4 flex">
                                <span
                                    onClick={(e) => {addOption(qIndex, '', false)}}
                                    className="-mt-3 mr-8 text-4xl text-gray-500 cursor-pointer"                                
                                >
                                    &#43;
                                </span>
                                <h3>Add more options</h3>
                            </div>
                            <div>
                                {
                                    ques.options.map(opt => {
                                        const opIndex = ques.options.indexOf(opt)
                                        return (
                                            <div>
                                                {opt.underlined ? <div>{opt.name}</div> : 
                                                <div>
                                                    <input 
                                                        type="text"
                                                        name="name"
                                                        data-q={qIndex}
                                                        data-op={opIndex} 
                                                        className="w-4/12 p-2 mb-2" 
                                                        placeholder="Add option"
                                                        value={opt.name}
                                                        onChange={handleOptionChange}
                                                    />
                                                    {opIndex>0 && <span
                                                        data-q={qIndex}
                                                        data-op={opIndex}
                                                        onClick={removeOption}
                                                        className="-mt-3 ml-4 text-4xl text-red-500 cursor-pointer"                                
                                                    >
                                                        &#215;
                                                    </span>}
                                                </div>
                                                }
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