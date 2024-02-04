import React from "react"
import Input from "../input"

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
        <div>
            <Input
                label="short answer"
                type="text"
                name="short_answer"
                placeholder="short answer text"
                value=""
                textSize="md"
                handleChange={() =>  {}}
            />
        </div>
    )
}

function Paragraph(){
    return (
        <div>
            <Input
                label="Paragraph"
                type="text"
                name="paragraph"
                placeholder="long answer text"
                value=""
                textSize="md"
                handleChange={() =>  {}}
            />
        </div>
    )
}

function Date(){
    return (
        <div>
            <Input
                label="Date"
                type="date"
                name="date"
                placeholder="Month, day, year"
                value=""
                textSize="md"
                handleChange={() =>  {}}
            />
        </div>
    )
}

function Time(){
    return (
        <div>
            <Input
                label="Time"
                type="text"
                name="time"
                placeholder="Time"
                value=""
                textSize="md"
                handleChange={() =>  {}}
            />
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
