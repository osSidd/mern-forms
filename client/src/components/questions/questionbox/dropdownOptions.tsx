import React from "react"
import Input from "../input"
import Icon from "../icon"

export default function DropdownOptions():{[index:string]:React.JSX.Element}{
    return {
        'Short answer': <ShortAnswer/>,
        'Paragraph': <Paragraph/>,
        'Date': <Date/>,
        'Time': <Time/>,
        'File upload': <File/>,
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
