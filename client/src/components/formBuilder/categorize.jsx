import { useState } from 'react'
import Input from './input'
import Select from './select'


export default function Categorize(){

    let itemObj = {
        name: '',
        belongsTo: ''
    }

    let categoryObj = {
        name: ''
    }
    
    let catObj = {
        text: '',
        categories: [categoryObj],
        items: [itemObj]
    }

    const [categories, setCategories] = useState([{
        text: '',
        categories: [{name: ''}],
        items: [{name: '', belongsTo: ''}]
    }])

    function addCategoryQuestion(e){
        setCategories(prev => ([...prev, catObj]))
    }

    function handleQuestionChange(e){
        const {id, value} = e.target
        setCategories(prev => {
            return prev.map(item => {
                return prev.indexOf(item) === parseInt(id) ? {...item, text: value } : item 
            })
        })
    }

    function addCategory(e){
        const id = e.target.id
        setCategories(prev => {
            return prev.map(item => ({
              ...item,
              categories: prev.indexOf(item) === parseInt(id) ? [...item.categories, categoryObj] : item.categories
            }))
        })
    }

    function handleFieldChange(e){
        const {value, dataset} = e.target
        const index = parseInt(dataset.index)
        const id = parseInt(dataset.id)
        const field = dataset.field
        const key = dataset.key
        setCategories(prev => {
            return prev.map(item => {
                return {
                    ...item,
                    [field]: prev.indexOf(item) === id ? mapField(index, item[field], value, key) : item
                }
            })
        })
    }

    function mapField(index, arr, value, key){
        return arr.map(item => {
            return arr.indexOf(item) === index ? {...item, [key]: value} : item
        })
    }

    function addItem(e){
        const id = e.target.id
        setCategories(prev => {
            return prev.map(item => ({
                ...item,
                items: prev.indexOf(item) === parseInt(id) ? [...item.items, itemObj] : item.items
            }))
        })
    }

    console.log(categories)
    return (
        <div className='my-24 px-32 py-8 rounded-lg'>
            <h2 className='text-2xl font-semibold mb-8'>Categorize</h2>
            {
                categories.map(cat => {
                    const id = categories.indexOf(cat)
                    return (
                        <div className='mb-16'>
                            <div className='flex items-center mb-4'>
                                <input 
                                    type="text" 
                                    name="text"
                                    className='p-2'
                                    placeholder='Categorize the following' 
                                    id={id}
                                    value={cat.text}
                                    onChange={handleQuestionChange} 
                                />
                                <span 
                                    className='text-gray-500 text-4xl -mt-1 ml-8 cursor-pointer' 
                                    onClick={addCategoryQuestion}
                                >
                                    &#43;
                                </span>
                            </div>
                            <div className='mt-4 mb-4'>
                                <div className='flex items-center mb-4'>
                                    <h3 className='text-lg '>Categories</h3>
                                    <span
                                        id={id}
                                        className='text-gray-500 text-4xl -mt-1 ml-8 cursor-pointer' 
                                        onClick={addCategory}
                                    >
                                        &#43;
                                    </span>
                                </div>
                                {
                                    cat.categories.map(category => {
                                        const index = cat.categories.indexOf(category)
                                        return (
                                            <div className='flex items-center mb-4'>
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    data-id={id}
                                                    data-index={index}
                                                    data-field='categories'
                                                    data-key='name'
                                                    placeholder='Category name'
                                                    value={category.name}
                                                    onChange={handleFieldChange}
                                                    className='border border-gray-400 p-2 w-6/12' 
                                                />
                                                <span 
                                                    className='text-red-500 text-4xl -mt-1 ml-8 cursor-pointer' 
                                                    
                                                >
                                                    &#215;
                                                </span>
                                            </div>
                                        )
                                    })
                                }
                                <div className='flex items-center mt-4 mb-4'>
                                    <h3 className='text-lg '>Items</h3>
                                    <span
                                        id={id}
                                        className='text-gray-500 text-4xl -mt-1 ml-8 cursor-pointer' 
                                        onClick={addItem}
                                    >
                                        &#43;
                                    </span>
                                    <h3 className='text-lg ml-auto'>Belongs to</h3>
                                </div>
                                {
                                    cat.items.map(item => {
                                        const itemId = cat.items.indexOf(item)
                                        return (
                                            <div className='flex items-center mb-4'>
                                                <input 
                                                    type="text"
                                                    name='item'
                                                    placeholder='Item'
                                                    data-id={id}
                                                    data-index={itemId}
                                                    data-field='items'
                                                    data-key='name'
                                                    value={item.name}
                                                    onChange={handleFieldChange}
                                                    className='border border-gray-400 p-2 w-4/12' 
                                                />
                                                <span
                                                    className='text-red-500 text-4xl -mt-1 ml-8 cursor-pointer' 
                                                >
                                                    &#215;
                                                </span>
                                                <select
                                                    className='ml-auto rounded-md border border-gray-400 p-2 w-4/12'
                                                    value={item.belongsTo}
                                                    data-id={id}
                                                    data-index={itemId}
                                                    data-field='items'
                                                    data-key='belongsTo'
                                                    onChange={handleFieldChange}
                                                >
                                                    <option disabled>Select item</option>
                                                    {
                                                        cat.categories.map(item => (
                                                            <option>{item.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                                    
                    )
                })
            }
        </div>
    )
}
