import Icon from './icon'
import Input from './input'

export default function Cloze({cloze}){

    const { 
        clozeQues,
        addClozeQuestions,
        removeClozeQuestion,
        addOption,
        removeOption,
        handleInputChange,
    } = cloze

    console.log(clozeQues)

    return(
        <div className="px-32">
            <h2 className="text-2xl font-semibold mb-8">Cloze</h2>
            {
                clozeQues.map((ques, qIndex) => {
                    return (
                        <div className="mb-8" key={ques.id}>
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
                                <Icon
                                    icon='&#43;'
                                    handleClick={addClozeQuestions}
                                />
                                {qIndex > 0 && <Icon
                                    icon='&#215;'
                                    handleClick={() => removeClozeQuestion(qIndex)}
                                />}
                            </div>
                            <div className="mb-4 flex items-center">
                                <Icon
                                    icon='&#43;'
                                    handleClick={() => addOption(qIndex)}
                                />
                                <h3 className='ml-4'>Add more options</h3>
                            </div>
                            <div>
                                {
                                    ques.options.map((opt, opIndex) => {
                                        return (
                                            <div key={`${ques.id}-${opIndex}`}>
                                                {opt.underlined ? <div>{opt.name}</div> : 
                                                <div>
                                                    <Input
                                                        name="name"
                                                        placeholder="Add option"
                                                        val={opt.name}
                                                        onChange={e => handleInputChange(e, qIndex, 'options', opIndex, 'name')}
                                                    />
                                                    {opIndex>0 && <Icon
                                                        icon='&#215;'
                                                        handleClick={() => removeOption(qIndex, opIndex)}
                                                    />}
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