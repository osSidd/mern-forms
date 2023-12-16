import {v4 as uuid} from 'uuid'

export default function Cloze({cloze}){

    const { 
        clozeQues,
        addClozeQuestions,
        removeClozeQuestion,
        addOption,
        removeOption,
    } = cloze

    return(
        <div className="px-32">
            <h2 className="text-2xl font-semibold mb-8">Cloze</h2>
            {
                clozeQues.map((ques, qIndex) => {
                    return (
                        <div className="mb-8" key={uuid()}>
                            <button
                                id={qIndex} 
                                onClick={undefined} 
                                className="py-1 px-4"
                            >U</button>
                            <div className="flex items-start mb-6">
                                <div 
                                    contentEditable={true} 
                                    className="border border-gray-400 w-full h-60 rounded-md p-2"
                                ></div>
                                <span
                                    onClick={addClozeQuestions}
                                    className="-mt-3 ml-8 text-4xl text-gray-500 cursor-pointer"                                
                                >
                                    &#43;
                                </span>
                                {qIndex > 0 && <span
                                    id={qIndex}
                                    onClick={() => removeClozeQuestion(qIndex)}
                                    className="-mt-3 ml-8 text-4xl text-red-500 cursor-pointer"                                
                                >
                                    &#215;
                                </span>}
                            </div>
                            <div className="mb-4 flex">
                                <span
                                    onClick={() => addOption(qIndex)}
                                    className="-mt-3 mr-8 text-4xl text-gray-500 cursor-pointer"                                
                                >
                                    &#43;
                                </span>
                                <h3>Add more options</h3>
                            </div>
                            <div>
                                {
                                    ques.options.map((opt, opIndex) => {
                                        return (
                                            <div key={uuid()}>
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
                                                        onChange={undefined}
                                                    />
                                                    {opIndex>0 && <span
                                                        data-q={qIndex}
                                                        data-op={opIndex}
                                                        onClick={() => removeOption(qIndex, opIndex)}
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