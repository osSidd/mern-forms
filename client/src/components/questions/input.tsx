import React from "react"
import { getSize } from "../../utils/ui"
import { InputBox } from "src/types"

export default function Input({label, type, name, placeholder, textSize, value, handleChange}: InputBox){

    const {size, padd} = getSize(textSize)

    return(
        <div>
            <label 
                aria-label={label} 
                htmlFor={label} 
                className="hidden"
            >
                {label}
            </label>

            <input
                type={type}
                className={`block mx-auto w-full ${size} ${padd} outline-none border-gray-500 border-b border-x-0 border-t-0 rounded-none focus:border-b-2`}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}