export default function Input({name, placeholder, qId, itemId, field, refe, remove}){
   
    return (
        <>
            <input 
                type="text"
                name={name}
                defaultValue={refe.current?.[qId]?.[field]?.[itemId]?.value}
                id={`${qId}-${field}-${itemId}`}
                placeholder={placeholder}
                ref={el => { 
                    if(refe.current[qId]) 
                        refe.current[qId][field][itemId] = el; 
                    else 
                        refe.current[qId] = {[field]: [el]}
                }}
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