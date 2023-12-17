import Input from './input'
import Select from './select'
import Icon from './icon'

export default function Categorize({categorize}){
    const {
        categorizeQues,
        addCategorizeQues,
        removeCategorizeQues,
        addCategory,
        removeCategory,
        addItem,
        removeItem,
        handleInputChange,
    } = categorize
        
    return (
        <div className='my-24 px-32 py-8 rounded-lg'>
            <h2 className='text-2xl font-semibold mb-8'>Categorize</h2>
            
            {
                categorizeQues.map((cat, qId) => {   
                    return (
                        <div className='mb-16' key={cat.id}>
                            
                            <div className='flex items-center mb-4'>
                                
                                <input 
                                    type="text" 
                                    name="text"
                                    className='p-2'
                                    placeholder='Categorize the following' 
                                    id={qId}
                                    value={cat.question}
                                    onChange={e => handleInputChange(e, qId, null, null, null)}
                                />
                                
                                <Icon handleClick={addCategorizeQues} icon='&#43;'/>
                                {qId > 0 && <Icon id={qId} handleClick={() => removeCategorizeQues(qId)} icon='&#215;' color='red'/>}
                            
                            </div>
                            
                            <div className='mt-4 mb-4'>
                                
                                <div className='flex items-center mb-4'>
                                    <SubHeading title='Categories' />
                                    <Icon
                                        handleClick={() => addCategory(qId)}
                                        icon='&#43;'
                                    />
                                </div>
                                
                                {
                                    cat.categories?.map((category, catId) => {
                                        return (
                                            <div className='flex items-center mb-4' key={`${qId}-${catId}`}>
                                                <Input
                                                    name='category'
                                                    placeholder='Category'
                                                    val={category.name}
                                                    onChange={e => handleInputChange(e, qId, 'categories', catId, 'name')}
                                                />
                                                {catId > 0 && <Icon handleClick={() => removeCategory(qId, catId)} icon='&#215;'/>}
                                            </div>
                                        )
                                    })
                                }
                                
                                <div className='flex items-center mt-4 mb-4'>
                                    <SubHeading title='Items' />
                                    <Icon
                                        handleClick={() => addItem(qId)}
                                        icon='&#43;'
                                    />
                                    <SubHeading title='Belongs to' cn='ml-auto'/>
                                </div>
                                
                                {
                                    cat.items?.map((item, itemId) => {
                                        return (
                                            <div className='flex items-center mb-4' key={`${qId}-${itemId}`}>
                                                <Input
                                                    name='item'
                                                    placeholder='Item'
                                                    val={item.name}
                                                    onChange={e => handleInputChange(e, qId, 'items', itemId, 'name')}
                                                />
                                                {itemId > 0 && <Icon handleClick={() => removeItem(qId, itemId)} icon='&#215;'/>}
                                                <Select
                                                    val={item.belongsTo}
                                                    onChange={e => handleInputChange(e, qId, 'items', itemId, 'belongsTo')}
                                                    arr={cat.categories}
                                                />
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

function SubHeading({title, cn}){
    return(
        <>
            <h3 className={`text-lg ${cn}`}>{title}</h3>
        </>
    )
}