export default function Input({name, placeholder, val, onChange}){
   
    return (
        <>
            <input 
                type="text"
                name={name}
                placeholder={placeholder}
                value={val}
                onChange={onChange}
                className='border border-gray-400 p-2 w-4/12' 
            />
        </>
    )
}