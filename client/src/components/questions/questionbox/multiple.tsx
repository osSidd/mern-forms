import React from "react"
import Icon from "../icon"

export default function Multiple({quesId, arr, addOption}:{quesId:number, arr:string[], addOption:(quesId:number) => void}){
    return(
        <div>
            {
                arr.map((option, index) => (
                    <div key={index}>
                        <span><Icon icon='circle-o'/></span>
                        <span className="ml-4">{option} {index+1}</span>
                    </div>
                ))
            }
            <p onClick={e => addOption(quesId)}>Add option</p>
        </div>
    )
}