import { useState } from 'react'
import {v4 as uuid} from 'uuid'

export default function Select({val, qId, itemId, field, keyVal, handleChange, arr}){
    const [opt, setOpt] = useState([])
    function getOptions(arr){
        let temp = []
        arr.forEach(i => {
            if(i) temp.push(i.value)
        })
        return temp
    }
    return(
     <select
         className='ml-auto rounded-md border border-gray-400 p-2 w-4/12'
        onClick={() => setOpt(prev => getOptions(arr[qId].categories))}
     >
         <option className='pointer-events-none'>Select category</option>
         {
            opt.length && opt.map((op, index) => (
                <option key={op} value={op}>{op}</option>
            ))
         }
     </select>
    )
 }