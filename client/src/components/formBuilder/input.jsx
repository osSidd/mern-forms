
export default function Input({label, type, name, id, value, placeholder, handleChange}){
    return (
        <input className=' border border-gray-400 outline-none p-2 rounded-md w-full text-gray-500 flex-1' type={type} name={name} value={value} id={id} onChange={handleChange} placeholder={placeholder}/>
    )
}