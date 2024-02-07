export interface InputBox{
    label: string
    type: string
    name: string
    placeholder: string
    textSize: string
    value: string
    handleChange: (e:React.ChangeEvent) => void
}

export interface QuestionType{
    id: number
    label: string
    icon: string
}

export interface HeadingDescription{
    id: number
    type: string
    title: string
    description: string
}

export interface formContentType{
    id: number
    type: string
    question: string
    options: {label:string, icon:string, arr: string[]}
}

export type FormQuestion = formContentType | HeadingDescription