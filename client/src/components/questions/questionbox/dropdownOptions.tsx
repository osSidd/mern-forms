import React from "react"
import Input from "../input"

export default function DropdownOptions():{[index:string]:React.JSX.Element}{
    return {
        'Short answer': <ShortAnswer/>,
        'Paragraph': <Paragraph/>,
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