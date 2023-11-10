import { useState } from 'react'

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

    function addInput(e){
        const {id, dataset} = e.target
        const field = dataset.field
        const obj = field === 'categories' ? categoryObj : itemObj
        setCategories(prev => {
            return prev.map(item => ({
              ...item,
              [field]: prev.indexOf(item) === parseInt(id) ? [...item[field], obj] : item[field]
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

    function removeQuestion(e){
        const id = e.target.id
        setCategories(prev => prev.filter(item => prev.indexOf(item) !== parseInt(id)))
    }

    function removeField(e){
        const {dataset} = e.target
        const id = parseInt(dataset.id)
        const index = parseInt(dataset.index)
        const field = dataset.field
        console.log(id, index, field, dataset)
        setCategories(prev => {
            return prev.map(item => ({
                ...item,
                [field]: prev.indexOf(item) === id ? filterField(item[field], index) : item 

            }))
        })
    }

    function filterField(arr, index){
        return arr.filter(item => arr.indexOf(item) !== index)
    }

    console.log(categories)
    return (
        <div className='my-24 px-32 py-8 rounded-lg'>
            <h2 className='text-2xl font-semibold mb-8'>Categorize</h2>
            {
                categories.map(cat => {
                    const id = categories.indexOf(cat)
                    return (
                        <div className='mb-16' key={id}>
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
                                {id > 0 && <span
                                    id={id} 
                                    className='text-red-500 text-4xl -mt-1 ml-8 cursor-pointer' 
                                    onClick={removeQuestion}
                                >
                                    &#215;
                                </span>}
                            </div>
                            <div className='mt-4 mb-4'>
                                <div className='flex items-center mb-4'>
                                    <h3 className='text-lg '>Categories</h3>
                                    <span
                                        id={id}
                                        data-field='categories'
                                        className='text-gray-500 text-4xl -mt-1 ml-8 cursor-pointer' 
                                        onClick={addInput}
                                    >
                                        &#43;
                                    </span>
                                </div>
                                {
                                    cat.categories.map(category => {
                                        const index = cat.categories.indexOf(category)
                                        return (
                                            <div className='flex items-center mb-4' key={index}>
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
                                                {index > 0 && <span 
                                                    className='text-red-500 text-4xl -mt-1 ml-8 cursor-pointer' 
                                                    data-id={id}
                                                    data-index={index}
                                                    data-field='categories'
                                                    onClick={removeField}
                                                >
                                                    &#215;
                                                </span>}
                                            </div>
                                        )
                                    })
                                }
                                <div className='flex items-center mt-4 mb-4'>
                                    <h3 className='text-lg '>Items</h3>
                                    <span
                                        id={id}
                                        data-field='items'
                                        className='text-gray-500 text-4xl -mt-1 ml-8 cursor-pointer' 
                                        onClick={addInput}
                                    >
                                        &#43;
                                    </span>
                                    <h3 className='text-lg ml-auto'>Belongs to</h3>
                                </div>
                                {
                                    cat.items.map(item => {
                                        const itemId = cat.items.indexOf(item)
                                        return (
                                            <div className='flex items-center mb-4' key={itemId}>
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
                                                {itemId > 0 && <span
                                                    data-id={id}
                                                    data-index={itemId}
                                                    data-field='items'
                                                    onClick={removeField}
                                                    className='text-red-500 text-4xl -mt-1 ml-8 cursor-pointer' 
                                                >
                                                    &#215;
                                                </span>}
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
                                                            <option key={itemId}>{item.name}</option>
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
