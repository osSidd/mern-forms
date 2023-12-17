import Input from './input'
import Select from './select'
import Icon from './icon'

import {v4 as uuid} from 'uuid'
import { useRef } from 'react'

export default function Categorize({categorize}){
    const {
        categorizeQues,
        questionRef,
        categoryRef,
        itemRef,
        addCategorizeQues,
        removeCategorizeQues,
        addCategory,
        removeCategory,
        addItem,
        removeItem,
    } = categorize
    
    console.log(questionRef, categoryRef, itemRef)
    
    return (
        <div className='my-24 px-32 py-8 rounded-lg'>
            <h2 className='text-2xl font-semibold mb-8'>Categorize</h2>
            
            {
                categorizeQues.map((cat, qId) => {            
                    return (
                        <div className='mb-16' key={uuid()}>
                            
                            <div className='flex items-center mb-4'>
                                
                                <input 
                                    type="text" 
                                    name="text"
                                    className='p-2'
                                    placeholder='Categorize the following' 
                                    id={qId}
                                    ref={e => { questionRef.current[qId] = e}}
                                />
                                
                                <Icon handleClick={addCategorizeQues} icon='&#43;'/>
                                
                                {qId > 0 && <Icon id={qId} handleClick={() => removeCategorizeQues(qId)} icon='&#215;' color='red'/>}
                            
                            </div>
                            
                            <div className='mt-4 mb-4'>
                                
                                <div className='flex items-center mb-4'>
                                    <SubHeading title='Categories' />
                                    <Icon
                                        id={qId}
                                        field='categories'
                                        handleClick={() => addCategory(qId)}
                                        icon='&#43;'
                                    />
                                </div>
                                
                                {
                                    cat.categories?.map((category, catId) => {
                                                                              
                                        return (
                                            <div className='flex items-center mb-4' key={uuid()}>
                                                <Input
                                                    name='name'
                                                    placeholder='Category'
                                                    qId={qId}
                                                    itemId={catId}
                                                    field='categories'
                                                    keyVal='name'
                                                    refe={categoryRef}
                                                    remove={() => removeCategory(qId, catId)}
                                                />
                                            </div>
                                        )
                                    })
                                }
                                
                                <div className='flex items-center mt-4 mb-4'>
                                    <SubHeading title='Items' />
                                    <Icon
                                        id={qId}
                                        field='items'
                                        handleClick={() => addItem(qId)}
                                        icon='&#43;'
                                    />
                                    <SubHeading title='Belongs to' cn='ml-auto'/>
                                </div>
                                
                                {
                                    cat.items?.map((item, itemId) => {
                                                                              
                                        return (
                                            <div className='flex items-center mb-4' key={uuid()}>
                                                <Input
                                                    name='name'
                                                    placeholder='Item'
                                                    qId={qId}
                                                    itemId={itemId}
                                                    field='items'
                                                    keyVal='name'
                                                    refe={itemRef}
                                                    remove={() => removeItem(qId, itemId)}
                                                />
                                                <Select
                                                    val={item.belongsTo}
                                                    qId={qId}
                                                    itemId={itemId}
                                                    field='items'
                                                    keyVal='belongsTo'
                                                    handleChange={undefined}
                                                    arr={categoryRef.current}
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