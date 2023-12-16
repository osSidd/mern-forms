import {v4 as uuid} from 'uuid'
import Icon from "./icon"

export default function Comprehension({comprehension}){

    const {
        comprehensionQues,
        addComprehensionQuestions,
        removeComprehensionQuestion,
        addMcq,
        removeMcq,
    } = comprehension

    return(
        <div className="my-24 px-32 py-8 rounded-lg">
            <h2 className="text-2xl font-semibold">Comprehension</h2>
            {
                comprehensionQues.map((passage, index) => {

                    return (
                    <div key={uuid()} className="my-8">
                        <div className="flex items-start">
                            <textarea 
                                className="p-2" 
                                rows={6} 
                                id={index} 
                                name='text' 
                                placeholder='Enter comprehension passage' 
                                value= {passage.text} 
                                onChange={undefined}
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
                                        <div key={uuid()}>
                                            <div className="flex items-center mb-5 mt-6">
                                                <input 
                                                    className="p-2" 
                                                    type="text" 
                                                    name="text" 
                                                    data-id={id} 
                                                    data-index={index} 
                                                    value={item.text} 
                                                    onChange={undefined}
                                                    placeholder="Enter comprehension question"
                                                />
                                                <Icon
                                                    id={index}
                                                    handleClick={() => addMcq(index)}
                                                    icon='&#43;'
                                                />
                                                {id>0 && <span
                                                    data-index={index}
                                                    data-id={id}
                                                    onClick={() => removeMcq(index, id)}
                                                    className="ml-8 text-4xl text-red-500 -mt-4 cursor-pointer"
                                                >
                                                    &#215;
                                                </span>}
                                            </div>
                                           <div className="grid grid-cols-2 gap-4">
                                                <input 
                                                    className="p-2 w-full" 
                                                    type="text" 
                                                    name="a" 
                                                    data-id={id} 
                                                    data-index={index} 
                                                    value={item.a} 
                                                    onChange={undefined}
                                                    placeholder="Option a"
                                                />
                                                <input 
                                                    className="p-2 w-full" 
                                                    type="text" 
                                                    name="b" 
                                                    data-id={id} 
                                                    data-index={index} 
                                                    value={item.b} 
                                                    onChange={undefined}
                                                    placeholder="Option b"
                                                />
                                                <input 
                                                    className="p-2 w-full" 
                                                    type="text" 
                                                    name="c" 
                                                    data-id={id} 
                                                    data-index={index} 
                                                    value={item.c} 
                                                    onChange={undefined}
                                                    placeholder="Option c"
                                                />
                                                <input 
                                                    className="p-2 w-full" 
                                                    type="text" 
                                                    name="d" 
                                                    data-id={id} 
                                                    data-index={index} 
                                                    value={item.d} 
                                                    onChange={undefined}
                                                    placeholder="Option d"
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