import React from "react"
import Icon from "./icon"
export default function Toolbar(){
    return(
        <div className="flex flex-col shadow-md px-4 py-2 rounded-md [&>span+span]:mt-2">
            <span>
                <Icon icon='plus-circle' size="2xl"/>    
            </span>
            <span>
                <Icon icon='file' size="xl"/>    
            </span>
            <span>
                <Icon icon='header' size="xl"/>    
            </span>
            <span>
                <Icon icon='image' size="xl"/>    
            </span>
            <span>
                <Icon icon='video-camera' size="xl"/>    
            </span>
            <span>
                <Icon icon='square' size="xl"/>    
            </span>
        </div>
    )
}