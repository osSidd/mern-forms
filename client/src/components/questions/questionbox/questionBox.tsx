import React from "react";
import Divider from "../divider";
import Dropdown from "./dropdown";
import Icon from "../icon";
import Input from "../input";
import QuestionWrapper from "../questionWrapper";
import { QuestionType, formContentType } from "src/types";
import DropdownOptions from "./dropdownOptions";

interface questionBoxType{
    content: formContentType
    removeQuestion: (id: number) => void
    duplicateQuestion: (id: number) => void
    selectQuestion: (q: QuestionType) => void
    handleQuestionChange: (id:number, value:string) => void
    addOption:(quesId:number) => void
    removeOption: (quesId:number, optionId:number) => void
    handleOptionChange: (quesId:number, optionId:number, value:string) => void
    showImgModal: (display: boolean) => void
}

export default function QuestionBox(props: questionBoxType){
    const {
        content, 
        removeQuestion, 
        duplicateQuestion, 
        selectQuestion, 
        handleQuestionChange, 
        addOption,
        removeOption,
        handleOptionChange,
        showImgModal
    } = props
    
    const optionsObj = DropdownOptions({quesId:content.id, arr:content.options.arr, addOption, removeOption, handleOptionChange})
    return (
        <QuestionWrapper heading={false}>
            <div className="grid grid-cols-12 gap-y-4 lg:gap-y-0 lg:gap-x-4 items-center mb-6 lg:mb-2">
                <div className="col-start-1 col-span-12 lg:col-span-7">
                    <Input
                        label="question1"
                        type='text'
                        name='question1'
                        placeholder='Question'
                        textSize='xl'
                        value={content.question}
                        handleChange={(e:React.ChangeEvent) => handleQuestionChange(content.id, (e.target as HTMLInputElement).value)}
                    />
                </div>
                <div className="col-span-2 lg:col-span-1" onClick={e => showImgModal(true)}>
                    <Icon icon='photo' size="xl"/>
                </div>
                <div className="col-span-9 md:col-span-6 lg:col-span-4">
                    <Dropdown question={content} selectQuestion={selectQuestion}/>
                </div>
            </div>
            <div className="w-8/12">
                {optionsObj[content.options.label]}
            </div>
            <div className="mt-8">
                <Divider/>
            </div>
            <div className="flex items-center justify-between w-6/12 md:w-4/12 lg:w-2/12 ml-auto mr-8 mt-4">
                <span onClick={e => duplicateQuestion(content.id)}>
                    <Icon icon='clone' size="xl"/>
                </span>
                <span onClick={e => removeQuestion(content.id)}>
                    <Icon icon='trash-o' size="2xl"/>
                </span>
                <Icon icon='ellipsis-v' size="xl"/>
            </div>
        </QuestionWrapper>
    )
}