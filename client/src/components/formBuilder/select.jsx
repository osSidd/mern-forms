export default function Select({arr, val, onChange}){
    return(
     <select
        className='ml-auto rounded-md border border-gray-400 p-2 w-4/12'
        value={val}
        onChange={onChange}
     >
         <option className='pointer-events-none'>Select category</option>
         {
            arr.map((op, index) => {
                return op.name && <option key={`${op.name}-${index}`} value={op.name}>{op.name}</option>
            })
         }
     </select>
    )
 }