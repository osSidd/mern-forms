import React from "react";
import Divider from "./divider";
import Dropdown from "./dropdown";
import Icon from "./icon";
import Input from "./input";
import QuestionWrapper from "./questionWrapper";

export default function QuestionBox(){
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
                    />
                </div>
                <div className="col-span-1">
                    <Icon icon='photo' size="xl"/>
                </div>
                <div className="col-span-4">
                    <Dropdown/>
                </div>
            </div>
            <Divider/>
            <div className="flex items-center justify-between w-2/12 ml-auto mr-8 mt-4">
                <Icon icon='clone' size="xl"/>
                <Icon icon='trash-o' size="2xl"/>
                <Icon icon='ellipsis-v' size="xl"/>
            </div>
        </QuestionWrapper>
    )
}