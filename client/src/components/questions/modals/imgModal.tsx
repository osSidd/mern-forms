import React from "react";
import Icon from "../icon";

export default function ImgModal({modal, showModal}: {modal: {display: boolean}, showModal: (display: boolean) => void}){
    return (
        <div className={`${modal.display ? 'block' : 'hidden'} fixed top-14 bottom-14 left-32 right-32 p-4 z-50 bg-white shadow-2xl`}>
            <div onClick={e => showModal(false)} className="ml-auto mr-4 w-fit"><Icon icon='times' size="2xl"/></div>
        </div>
    )
}