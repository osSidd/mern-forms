import React from "react"
import Icon from "../icon"

export default function Multiple({type, quesId, arr, addOption}:{type:string, quesId:number, arr:string[], addOption:(quesId:number) => void}){

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
                        <span>{icon ? <Icon size="2xl" icon={icon}/> : `${index+1}.`}</span>
                        <span className="ml-4">{option} {index+1}</span>
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