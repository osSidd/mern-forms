import {v4 as uuid} from 'uuid'

export default function Select({val, qId, itemId, field, keyVal, handleChange, arr}){
    return(
     <select
         className='ml-auto rounded-md border border-gray-400 p-2 w-4/12'
        //  value={val}
         data-id={qId}
         data-index={itemId}
         data-field={field}
         data-key={keyVal}
        //  onChange={handleChange}
     >
         <option className='pointer-events-none'>Select item</option>
         {
             arr.map(item => (
                 <option key={uuid()}>{item.name}</option>
             ))
         }
     </select>
    )
 }