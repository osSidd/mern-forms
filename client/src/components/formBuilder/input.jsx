export default function Input({name, placeholder, itemId, remove,val, onChange}){
   
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
            {itemId > 0 && 
            <span
                onClick={remove}
                className='text-red-500 text-4xl -mt-1 ml-8 cursor-pointer' 
            >
                &#215;
            </span>}
        </>
    )
}