export default function Input({name, placeholder, qId, itemId, field, keyVal, val, handleChange, ref, remove}){
    return (
        <>
            <input 
                type="text"
                name={name}
                placeholder={placeholder}
                data-id={qId}
                data-index={itemId}
                data-field={field}
                data-key={keyVal}
                // value={val}
                // ref={el => ref.current[qId][field][keyVal] = el}
                // onChange={handleChange}
                className='border border-gray-400 p-2 w-4/12' 
            />
            {itemId > 0 && 
            <span
                data-id={qId}
                data-index={itemId}
                data-field={field}
                onClick={remove}
                className='text-red-500 text-4xl -mt-1 ml-8 cursor-pointer' 
            >
                &#215;
            </span>}
        </>
    )
}