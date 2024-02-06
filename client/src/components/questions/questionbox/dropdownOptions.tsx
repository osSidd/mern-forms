import React from "react"
import Input from "../input"
import Icon from "../icon"
import Multiple from "./multiple"

interface DropdownOptionsProps{
    quesId: number
    arr:string[]
    addOption:(quesId:number) => void
    removeOption: (quesId:number, optionId:number) => void
    handleOptionChange: (quesId:number, optionId:number, value:string) => void
}

export default function DropdownOptions(obj:DropdownOptionsProps):{[index:string]:React.JSX.Element}{
    const {
        quesId, 
        arr, 
        addOption, 
        removeOption, 
        handleOptionChange
    } = obj
    return {
        'Short answer': <Answer type="Short answer type"/>,
        'Paragraph': <Answer type="Long answer type"/>,
        'Date': <DateTime type="Month, day, year" icon="calendar"/>,
        'Time': <DateTime type="Time" icon="clock-o"/>,
        'File upload': <File/>,
        'Multiple choice':  <Multiple 
                                type='radio' 
                                quesId={quesId} 
                                arr={arr} 
                                addOption={addOption}
                                removeOption={removeOption} 
                                handleOptionChange={handleOptionChange}
                            />,
        'Checkboxes':   <Multiple 
                            type='checkbox' 
                            quesId={quesId} 
                            arr={arr} 
                            addOption={addOption} 
                            removeOption={removeOption}
                            handleOptionChange={handleOptionChange}
                        />,
        'Dropdown': <Multiple 
                        type='dropdown' 
                        quesId={quesId} 
                        arr={arr} 
                        addOption={addOption}
                        removeOption={removeOption} 
                        handleOptionChange={handleOptionChange}
                    />,
    }
}

function Answer({type}:{type:string}){
    return (
        <div className="border-b border-gray-500 pb-1 mt-4 text-gray-400">
            <p>{type}</p>            
        </div>
    )
}

function DateTime({type, icon}:{type:string, icon:string}){
    return (
        <div className="border-b border-gray-500 pb-1 mt-4 text-gray-400 w-48 flex items-center justify-between">
            <p>{type}</p>
            <span><Icon icon={icon}/></span>            
        </div>
    )
}

function File(){
    return (
        <div>
            <Input
                label="File"
                type="file"
                name="file"
                placeholder="Upload file"
                value=""
                textSize="md"
                handleChange={() =>  {}}
            />
        </div>
    )
}
