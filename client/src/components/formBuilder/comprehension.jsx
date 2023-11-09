import { useState } from "react"

export default function Comprehension(){

    const quesObj = {            
        text: '',
        a:'',
        b:'',
        c:'',
        d:'',
    }

    const textObj = {
        text: '',
        ques:[quesObj],
    }

    const [questions, setQuestions] = useState([{text: '', ques: [quesObj]}])

    function addQuestion(e){
        const id = e.target.id
        setQuestions(prev => {
            return prev.map(item => {
                return parseInt(prev.indexOf(item)) === parseInt(id) ?  {...item, ques: [...item.ques, quesObj]} : item
            })
        })
    }

    function addPassage(e){
        setQuestions(prev => ([...prev, textObj]))
    }

    function handlePassage(e){
        const {id, value} = e.target
        setQuestions(prev => {
            return prev.map(item => {
                return prev.indexOf(item) === parseInt(id) ? {...item, text: value} : item
            })
        })
    }

    function handleChange(e){
        setQuestions(prev => {
            return mapPrev(prev, e)
        })
    }

    function mapPrev(prev, e){
        return prev.map(item => {
            return prev.indexOf(item) === parseInt(e.target.dataset.index) ? {...item, ques: mapQues(item.ques, e)} : item
        })
    }

    function mapQues(ques, e){
        const {name, value, dataset} = e.target 
        return ques.map(item => {
            return ques.indexOf(item) === parseInt(dataset.id) ? {...item, [name] : value} : item
        })
    }

    return(
        <div className="my-24 px-32 py-8 rounded-lg">
            <h2 className="text-2xl font-semibold">Comprehension</h2>
            {
                questions.map(passage => {

                    const index = questions.indexOf(passage)

                    return (
                    <div key={index} className="my-8">
                        <div className="flex items-start">
                            <textarea 
                                className="p-2" 
                                rows={6} 
                                id={questions.indexOf(passage)} 
                                name='text' 
                                placeholder='Enter comprehension passage' 
                                value= {passage.text} 
                                onChange={handlePassage}
                            ></textarea>
                            <span
                                onClick={addPassage}
                                className="-mt-3 ml-8 text-4xl text-gray-500 cursor-pointer"
                            >
                                &#43;
                            </span>    
                        </div>
                        
                        <div>
                            {
                                passage.ques.map(item => {

                                    let id = passage.ques.indexOf(item)

                                    return (
                                        <div key={id}>
                                            <div className="flex items-center mb-5 mt-6">
                                                <input 
                                                    className="p-2" 
                                                    type="text" 
                                                    name="text" 
                                                    data-id={id} 
                                                    data-index={index} 
                                                    value={item.text} 
                                                    onChange={handleChange}
                                                    placeholder="Enter comprehension question"
                                                />
                                                 <span
                                                    id={index}
                                                    onClick={addQuestion}
                                                    className="ml-8 text-4xl text-gray-500 -mt-4 cursor-pointer"
                                                >
                                                    &#43;
                                                </span>
                                                <span
                                                    id={index}
                                                    className="ml-8 text-4xl text-red-500 -mt-4"
                                                >
                                                    &#215;
                                                </span>
                                            </div>
                                           <div className="grid grid-cols-2 gap-4">
                                                <input 
                                                    className="p-2 w-full" 
                                                    type="text" 
                                                    name="a" 
                                                    data-id={id} 
                                                    data-index={index} 
                                                    value={item.a} 
                                                    onChange={handleChange}
                                                    placeholder="Option a"
                                                />
                                                <input 
                                                    className="p-2 w-full" 
                                                    type="text" 
                                                    name="b" 
                                                    data-id={id} 
                                                    data-index={index} 
                                                    value={item.b} 
                                                    onChange={handleChange}
                                                    placeholder="Option b"
                                                />
                                                <input 
                                                    className="p-2 w-full" 
                                                    type="text" 
                                                    name="c" 
                                                    data-id={id} 
                                                    data-index={index} 
                                                    value={item.c} 
                                                    onChange={handleChange}
                                                    placeholder="Option c"
                                                />
                                                <input 
                                                    className="p-2 w-full" 
                                                    type="text" 
                                                    name="d" 
                                                    data-id={id} 
                                                    data-index={index} 
                                                    value={item.d} 
                                                    onChange={handleChange}
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