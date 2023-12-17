import Icon from "./icon"
import Input from './input'

export default function Comprehension({comprehension}){

    const {
        comprehensionQues,
        passageRef,
        addComprehensionQuestions,
        removeComprehensionQuestion,
        addMcq,
        removeMcq,
        handleInputChange,
    } = comprehension

    return(
        <div className="my-24 px-32 py-8 rounded-lg">
            <h2 className="text-2xl font-semibold">Comprehension</h2>
            {
                comprehensionQues.map((passage, index) => {
                    return (
                    <div key={passage.id} className="my-8">
                        <div className="flex items-start">
                            <textarea 
                                className="p-2" 
                                rows={6} 
                                id={index} 
                                name='text' 
                                placeholder='Enter comprehension passage' 
                                ref={el => passageRef.current[passage.id] = el}
                            ></textarea>
                            <Icon
                                handleClick={addComprehensionQuestions}
                                icon='&#43;'
                            />
                            {index > 0 && <Icon id={index} handleClick={() => removeComprehensionQuestion(index)} icon='&#215;' color='red'/>}    
                        </div>
                        
                        <div>
                            {
                                passage.ques.map((item, id) => {
                                    return (
                                        <div key={`${passage.id}-${id}`}>
                                            <div className="flex items-center mb-5 mt-6">
                                                <Input
                                                    name="text"
                                                    placeholder="Enter comprehension question"
                                                    val={item.text} 
                                                    onChange={e => handleInputChange(e, index, 'ques', id, 'text')}
                                                />
                                                <Icon
                                                    handleClick={() => addMcq(index)}
                                                    icon='&#43;'
                                                />
                                                {id > 0 && <Icon
                                                    handleClick={() => removeMcq(index, id)}
                                                    icon='&#215;'
                                                />}
                                            </div>
                                           <div className="grid grid-cols-2 gap-4">
                                                <Input
                                                    name="text"
                                                    placeholder="Option a"
                                                    val={item.a}
                                                    onChange={e => handleInputChange(e, index, 'ques', id, 'a')}
                                                />
                                                <Input
                                                    name="text"
                                                    placeholder="Option b"
                                                    val={item.b} 
                                                    onChange={e => handleInputChange(e, index, 'ques', id, 'b')}
                                                />
                                                <Input
                                                    name="text"
                                                    placeholder="Option c"
                                                    val={item.c} 
                                                    onChange={e => handleInputChange(e, index, 'ques', id, 'c')}
                                                />
                                                <Input
                                                    name="text"
                                                    placeholder="Option d"
                                                    val={item.d} 
                                                    onChange={e => handleInputChange(e, index, 'ques', id, 'd')}
                                                />
                                           </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )})
            }
        </div>
    )
}