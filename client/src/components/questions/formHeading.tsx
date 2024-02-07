import React from "react";
import Input from "./input";
import QuestionWrapper from "./questionWrapper";

export default function FormHeading(){
    return (
        <QuestionWrapper heading={true}>
            <Input
                name='heading'
                type='text'
                placeholder='Form title'
                label='form title'
                textSize='3xl'
                value=""
                handleChange={() => {}}
            />
            <Input
                name='description'
                type='text'
                placeholder='Form description'
                label='form description'
                textSize='lg'
                value=""
                handleChange={() => {}}
            />
        </QuestionWrapper>
    )
}