import React from "react"
import Icon from "./icon"
export default function Toolbar({handleClick, showImgModal}:{handleClick: (action:string) => void, showImgModal: (display: boolean) => void}){
    return(
        <div className="flex justify-between md:justify-start items-center md:items-start md:flex-col bg-white shadow-md px-4 py-2 rounded-lg md:[&>span+span]:mt-2">
            <span title="Add question" className='' onClick={e => handleClick('ADD_QUESTION')}>
                <Icon icon='plus-circle' size="2xl"/>    
            </span>
            <span title="import question" className=''>
                <Icon icon='file' size="xl"/>    
            </span>
            <span title="Add title description">
                <Icon icon='header' size="xl"/>    
            </span>
            <span onClick={e => showImgModal(true)} title="Add image">
                <Icon icon='image' size="xl"/>    
            </span>
            <span onClick={e => showImgModal(true)} title="Add video">
                <Icon icon='video-camera' size="xl"/>    
            </span>
            <span title="Add section">
                <Icon icon='square' size="xl"/>    
            </span>
        </div>
    )
}