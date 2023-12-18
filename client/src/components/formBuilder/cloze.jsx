import Icon from './icon'
import Input from './input'

export default function Cloze({cloze}){

    const { 
        clozeQues,
        clozeRef,
        addClozeQuestions,
        removeClozeQuestion,
        addOption,
        removeOption,
        handleInputChange,
        makeSelection,
    } = cloze

    return(
        <div className="px-32">
            <h2 className="text-2xl font-semibold mb-8">Cloze</h2>
            {
                clozeQues.map((ques, qIndex) => {
                    return (
                        <div className="mb-8" key={ques.id}>
                            <button onClick={() => makeSelection(qIndex)} className="py-1 px-4">U</button>
                            <div className="flex items-start mb-6">
                                <div 
                                    ref={el => clozeRef.current[ques.id] = el}
                                    contentEditable={true} 
                                    className="border border-gray-400 w-full h-60 rounded-md p-2 bg-white"
                                ></div>
                                <Icon icon='&#43;' handleClick={addClozeQuestions}/>
                                {qIndex > 0 && <Icon icon='&#215;' handleClick={() => removeClozeQuestion(qIndex)}/>}
                            </div>
                            <div className="mb-4 flex items-center">
                                <Icon icon='&#43;' handleClick={() => addOption(qIndex)}/>
                                <h3 className='ml-4'>Add more options</h3>
                            </div>
                            <div>
                                {
                                    ques.options.map((opt, opIndex) => {
                                        return (
                                            <div key={`${ques.id}-${opIndex}`}>
                                                {opt.underlined ? <div className='bg-gray-100 w-4/12 p-2 rounded-md mt-2'>{opt.name}</div> : 
                                                <div>
                                                    <Input
                                                        name="name"
                                                        placeholder="Add option"
                                                        val={opt.name}
                                                        onChange={e => handleInputChange(e, qIndex, 'options', opIndex, 'name')}
                                                    />
                                                    {opIndex>0 && <Icon icon='&#215;' handleClick={() => removeOption(qIndex, opIndex)}/>}
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