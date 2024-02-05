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

export interface formContentType{
    id: number
    label: string
    icon: string
    question: string
    options: {label:string, icon:string, arr: string[]}
}