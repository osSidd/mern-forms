import React, { useState } from "react";
import Icon from "../icon";
import { QuestionType, formContentType } from "src/types";

interface DropdownProps{
    question: formContentType, 
    selectQuestion: (q:QuestionType) => void
}

interface OptionsProps{
    question: formContentType
    selectQuestion: (q:QuestionType) => void
    toggleOptions: (e:React.SyntheticEvent) => void
}

export default function Dropdown({question, selectQuestion}: DropdownProps){
    const [displayOptions, setDisplayOptions] = useState(false)
    
    function toggleOptions(e:React.SyntheticEvent){
        setDisplayOptions(prev => !prev)
    }
   
    return(
        <div className="" tabIndex={-1} onBlur={() => setDisplayOptions(false)}>
            <div onClick={toggleOptions} className="border border-gray-300 rounded-md py-3 px-4 flex items-center cursor-pointer">
                <div className="mr-2"><Icon icon={question.options.icon} size="2xl"/></div>
                <div className="mr-auto">{question.options.label}</div>
                <div className="-mt-2"><Icon icon='sort-down' size="md"/></div>
            </div>
            <div className={`${displayOptions ? 'block': 'hidden'}`}>
                <DropdownOptions question={question} selectQuestion={selectQuestion} toggleOptions={toggleOptions}/>
            </div>
        </div>
    )
}

function DropdownOptions({question, selectQuestion, toggleOptions}: OptionsProps){
    return (
        <div style={{top: '2.5rem'}} className={`fixed w-56 cursor-pointer bg-white shadow-md rounded-md z-50`}>
            {
                options.map((group, index) => (
                    <ul className="border-b border-gray-300" key={index}>
                        {
                            group.map(option => (
                                <li onClick={e => {selectQuestion({...option, id: question.id}); toggleOptions(e)}} className={`my-2 py-1.5 px-4 flex items-center ${question.options.label === option.label ? 'bg-blue-50' : ''} hover:bg-gray-200`} key={option.label}>
                                    <Icon icon={option.icon} size="2xl"/>
                                    <span className='ml-3 text-sm'>{option.label}</span>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </div>
    )
}

const options = [
    [
        {
            label: 'Short answer',
            icon: 'align-left'
        },
        {
            label: 'Paragraph',
            icon: 'paragraph'
        }
    ],
    [
        {
            label: 'Multiple choice',
            icon: 'dot-circle-o'
        },
        {
            label: 'Checkboxes',
            icon: 'check-square'
        },
        {
            label: 'Dropdown',
            icon: 'chevron-circle-down'
        }
    ],
    [
        {
            label: 'File upload',
            icon: 'cloud-upload'
        },
    ],
    [
        {
            label: 'Linear scale',
            icon: 'ellipsis-h'
        },
        {
            label: 'Multiple choice grid',
            icon: 'braille'
        },
        {
            label: 'Checkbox grid',
            icon: 'th'
        }
    ],
    [
        {
            label: 'Date',
            icon: 'calendar'
        },
        {
            label: 'Time',
            icon: 'clock-o'
        },
    ],
]
