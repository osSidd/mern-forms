import React from "react"
import Icon from "../icon"
import Input from "../input"

interface MultipleProps{
    type:string
    quesId:number
    arr:string[]
    addOption:(quesId:number) => void
    removeOption: (quesId:number, optionId:number) => void
    handleOptionChange: (quesId:number, optionId:number, value:string) => void
}

export default function Multiple(props:MultipleProps){
    const {type, quesId, arr, addOption, removeOption, handleOptionChange} = props

    let icon : string | undefined
    switch(type){
        case 'radio':
            icon = 'circle-o'
            break
        case 'checkbox':
            icon = 'square-o'
            break
        default:
            icon = undefined
    }

    return(
        <div>
            {
                arr.map((option, index) => (
                    <div key={index} className="flex items-center mt-2">
                        <span className="mr-4">{icon ? <Icon size="2xl" icon={icon}/> : `${index+1}.`}</span>
                        <Input 
                            type="text" 
                            textSize="md" 
                            name="option" 
                            label="option" 
                            value={option} 
                            handleChange={(e:React.ChangeEvent) => handleOptionChange(quesId, index, (e.target as HTMLInputElement).value)} 
                            placeholder={`Option ${index+1}`}
                        />
                        <span onClick={e => removeOption(quesId, index)} className={`${arr.length > 1 ? 'block' : 'hidden' } ml-3`}><Icon icon='times'/></span>
                    </div>
                ))
            }
             <div className="mt-4 flex items-center">
                <span>{icon ? <Icon size="2xl" icon={icon}/> : `${arr.length+1}.`}</span>
                <p className=" ml-4 text-gray-500" onClick={e => addOption(quesId)}>Add option</p>
            </div>
        </div>
    )
}