import React from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";

import './questions.css'

import Header from "../components/questions/header";
import FormHeading from "../components/questions/formHeading";
import QuestionBox from "../components/questions/questionbox/questionBox";
import Icon from "../components/questions/icon";
import Toolbar from "../components/questions/toolbar";
import Modal from "../components/questions/modals/modal";
import ImgModal from "../components/questions/modals/imgModal";
import useQuestions from "../hooks/questions/useQuestions";

export default function Questions(){

    const {
        formContent,
        modal,
        imgModal,
        duplicateQuestion,
        removeQuestion,
        toggleFormContent,
        selectQuestion,
        handleQuestionChange,
        addOption,
        removeOption,
        handleOptionChange,
        showImgModal,   
    } = useQuestions()
    
    return (
        <>
            <header className=" shadow-md fixed top-0 left-0 w-full bg-white z-10">
                <CustomHeader/>
                <div className="text-center mt-2 pb-2">
                    <CustomNavLink navLabel="Questions" path='/forms/questions' disabled={false}/>
                    <CustomNavLink navLabel="Responses" path='/forms/responses' disabled={true}/>
                    <CustomNavLink navLabel="Settings" path='/forms/settings' disabled={true}/>
                </div>
            </header>
            <main className="pt-36 pb-24 md:pb-12 bg-main min-h-screen">
                <FormHeading/>
                <div className="">
                    <div className="flex-1">
                        {
                            formContent.map(content => (
                                <QuestionBox
                                    key={content.id}
                                    content={content}
                                    showImgModal={showImgModal}
                                    selectQuestion={selectQuestion}
                                    removeQuestion={removeQuestion}
                                    duplicateQuestion={duplicateQuestion}
                                    handleQuestionChange={handleQuestionChange}
                                    addOption={addOption}
                                    removeOption={removeOption}
                                    handleOptionChange={handleOptionChange}
                                />
                            ))
                        }
                    </div>
                    <div className="fixed bottom-4 md:bottom-auto md:top-2/4 right-8 left-8 md:left-auto md:right-16 lg:right-48">
                        <Toolbar showImgModal={showImgModal} handleClick={toggleFormContent}/>
                    </div>
                </div>
                { createPortal(<Modal modal={modal}/>, document.getElementById('modal') as HTMLElement) }
                { createPortal(<ImgModal modal={imgModal} showModal={showImgModal}/>, document.getElementById('img-modal') as HTMLElement) }
            </main>
        </>
    )
}

function CustomHeader(){
    return (
        <div className="py-4 px-8 flex items-center">
            <Header/>
            <div className="ml-auto mr-2">
                <Link className="p-4 hover:bg-gray-50 rounded-full" title="preview" to='preview' target="_blank" rel="noreferrer"><Icon icon='eye'/></Link>
            </div>
            <button title="save form" onClick={() => {}} className='hidden sm:block bg-purple-700 text-white capitalize py-2 px-4'>save form</button>
        </div>
    )
}

function CustomNavLink({navLabel, path, disabled=true}: {navLabel: string, path: string, disabled: boolean}){
    return(
        <NavLink className={`mx-4 ${disabled? 'pointer-events-none text-gray-400' : 'pb-2'} font-semibold`} to={path}>{navLabel}</NavLink>
    )
}