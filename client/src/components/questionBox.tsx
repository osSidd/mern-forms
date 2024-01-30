import React, { useState } from "react";
import Divider from "./divider";
import Dropdown from "./dropdown";
import Icon from "./icon";
import Input from "./input";
import QuestionWrapper from "./questionWrapper";
import { QuestionType } from "src/types";

interface questionBoxType{
    content:{id: number, label: string, icon:string, question: string}
    removeQuestion: (id: number) => void
    duplicateQuestion: (id: number) => void
    selectQuestion: (q: QuestionType) => void
    handleQuestionChange: (id:number, value:string) => void
}

export default function QuestionBox({content, removeQuestion, duplicateQuestion, selectQuestion, handleQuestionChange}: questionBoxType){

    return (
        <QuestionWrapper heading={false}>
            <div className="grid grid-cols-12 gap-x-4 items-center mb-12">
                <div className="col-start-1 col-span-7">
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
                <div className="col-span-1">
                    <Icon icon='photo' size="xl"/>
                </div>
                <div className="col-span-4">
                    <Dropdown question={content} selectQuestion={selectQuestion}/>
                </div>
            </div>
            <Divider/>
            <div className="flex items-center justify-between w-2/12 ml-auto mr-8 mt-4">
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