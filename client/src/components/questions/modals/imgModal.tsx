import React from "react";
import Icon from "../icon";

export default function ImgModal({modal, showModal}: {modal: {display: boolean}, showModal: (display: boolean) => void}){
    return (
        <div className={`${modal.display ? 'block' : 'hidden'} fixed top-24 md:top-48 lg:top-14 bottom-24 md:bottom-48 lg:bottom-14 left-8 md:left-32 right-8 md:right-32 p-4 z-50 bg-white shadow-2xl`}>
            <div onClick={e => showModal(false)} className="ml-auto mr-4 w-fit"><Icon icon='times' size="2xl"/></div>
        </div>
    )
}