import { useState } from 'react'
import Input from './input'
import Select from './select'


export default function Categorize(){

    const [categories, setCategories] = useState({})
    const [categoryBox, setCategoryBox] = useState([])

    const [items, setItems] = useState({})
    const [itemBox, setItemBox] = useState([])

    function addCategory(e){
        setCategoryBox(prev => {
            return [
                ...prev, 
                <InputBox 
                    name={getName('cat', prev.length)} 
                    value={categories[getName('cat', prev.length)]} 
                    change={handleChange} 
                    id={getName('cat', prev.length)}
                    placeholder='Category name'
            />]
        })
    }

    function addItems(e){
        setItemBox(prev => {
            return [
                ...prev,
                {
                    inp: <InputBox name={getName('item', prev.length)} placeholder='Item name'  
                     change={handleItemChange}/>,
                    sel: <Select options={getOptions()} />
                }
            ]
        })
    }

    function getOptions(){
        return Object.values(categories)
    }

    function getName(field, len){
        return `${field}-${len}`
    }

    function handleChange(e){
        const {name, value} = e.target
        setCategories(prev => ({
            ...prev,
            [name] : value
        }))
    }

    function handleItemChange(e){
        const {name, value} = e.target
        setItems(prev => ({
            ...prev,
            [name] : {
                value: value,
                belongsTo: ''
            }
        }))
    }

    console.log(items)

    return (
        <div className='mt-8 shadow-md px-6 py-8 rounded-lg'>
            <h2 className='text-2xl font-semibold mb-4'>Question heading</h2>
            <Input
                label='Categorize the following'
                name='category'
                id='category'
                type='text'
                placeholder='Categorize the following'
            />
            <div className='flex items-center mt-12'>
                <h3 className='mr-8 text-lg font-semibold'>Categories</h3>
                <button className='border border-blue-400 text-blue-400 px-4 py-1 rounded-md capitalize font-semibold' onClick={addCategory}>
                    add category
                    {/* <i className=" text-xl fa fa-plus"></i> */}
                </button>
                
            </div>
            <div>
                {categoryBox}
            </div>

            <div>
                <div className='relative flex items-center mt-12'>
                    <h3 className='mr-8 text-lg font-semibold'>Items</h3>
                    <button className='border border-blue-400 text-blue-400 px-4 py-1 rounded-md capitalize font-semibold' onClick={addItems}>
                        add item
                        {/* <i className=" text-xl fa fa-plus"></i> */}
                    </button>
                    <h3 className='ml-auto text-lg font-semibold'>Belongs to</h3>
                </div>
            </div>
            <div>
                {
                    itemBox.map(item => (
                        <div className='flex items-center'>
                            {item.inp}
                            {item.sel}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

function InputBox({name,change, value, id, placeholder}){
    return (
        <div key={id} className='my-4 flex items-center'>
            <Input name={name} handleChange={change} value={value} placeholder={placeholder}/>
            <button className='border border-red-500 text-red-500 px-4 py-1 ml-4 rounded-md capitalize text-sm font-semibold'>
                delete
            </button>
        </div>
    )
}