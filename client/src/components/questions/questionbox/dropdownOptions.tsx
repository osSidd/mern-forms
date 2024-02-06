import React from "react"
import Input from "../input"
import Icon from "../icon"
import Multiple from "./multiple"

export default function DropdownOptions(quesId: number, arr:string[], addOption:(quesId:number) => void, removeOption: (quesId:number, optionId:number) => void, handleOptionChange: (quesId:number, optionId:number, value:string) => void):{[index:string]:React.JSX.Element}{
    return {
        'Short answer': <ShortAnswer/>,
        'Paragraph': <Paragraph/>,
        'Date': <Date/>,
        'Time': <Time/>,
        'File upload': <File/>,
        'Multiple choice': <Multiple 
                                type='radio' 
                                quesId={quesId} 
                                arr={arr} 
                                addOption={addOption}
                                removeOption={removeOption} 
                                handleOptionChange={handleOptionChange}
                            />,
        'Checkboxes':  <Multiple 
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

function ShortAnswer(){
    return (
        <div className="border-b border-gray-500 pb-1 mt-4 text-gray-400">
            <p>Short answer text</p>            
        </div>
    )
}

function Paragraph(){
    return (
        <div className="border-b border-gray-500 pb-1 mt-4 text-gray-400">
            <p>Long answer text</p>            
        </div> 
    )
}

function Date(){
    return (
        <div className="border-b border-gray-500 pb-1 mt-4 text-gray-400 w-48 flex items-center justify-between">
            <p>Month, day, year</p>
            <span><Icon icon='calendar'/></span>            
        </div>
    )
}

function Time(){
    return (
        <div className="border-b border-gray-500 pb-1 mt-4 text-gray-400 w-48 flex items-center justify-between">
            <p>Time</p>
            <span><Icon icon='clock-o'/></span>            
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
