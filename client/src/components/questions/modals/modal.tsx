import React from "react"

export default function Modal({modal}:{modal:{display: boolean, text: string}}){
    return(
        <div className={`${modal.display ? 'block' : 'hidden'} fixed bottom-8 left-8 bg-gray-800 text-white w-56 px-8 py-3 shadow-xl`}>
            {modal.text}
        </div>
    )
}