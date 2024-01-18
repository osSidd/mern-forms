import { getSize } from "../utils/ui"

export default function Input({label, type, name, placeholder, textSize}){

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
                className={`block mx-auto mt-2 w-full ${size} ${padd} outline-none border-gray-500 border-b border-x-0 border-t-0 rounded-none focus:border-b-2`}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}