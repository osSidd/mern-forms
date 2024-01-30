function addQuestion(quesArr, quesObj){
    
    return [...quesArr, {...quesObj, id: quesArr.length > 1 ? quesArr.length : 1}]
}

function removeQuestion(quesArr, id){
    return quesArr.filter((ques, index) => index !== id)
}

function addField(arr, arrId, field, fieldObj){
    return arr.map((item, index) => {
        if(index !== arrId) return item
        return {
            ...item,
            [field] : [...item[field], fieldObj]
        }
    })
}

function removeField(arr, arrayId, field, fieldId){
    return arr.map((item, index) => {
        if(arrayId !== index) return item
        else{
            return {
                ...item,
                [field] : item[field].filter((fieldItem, id) => id !== fieldId)
            }
        }
    })
}

function handleInput(arr,  arrayId, field, fId, fKey, value){
    const qId = parseInt(arrayId)
    const fieldId = parseInt(fId)
    
    if(field){
        return arr.map((ques, quesId) => {
            if(quesId !== qId ) return ques
            
            return {
                ...ques,
                [field] : mapField(ques[field], fieldId, value, fKey)
            }
        })
    }

    return arr.map((ques) => ({...ques, question: qId === ques.id ? value : ques.question}))
}

function mapField(arr, index, value, key){
    return arr.map((item, id) => {
        return id === index ? {...item, [key]: value} : item
    })
}

function debounce(fn, delay=3000){
    let id
    return function(){
        clearTimeout(id)
        id = setTimeout(() => fn.apply(this, arguments), delay)
    }
}

// /////////////////
// function filterField(arr, index){
//     return arr.filter(item => arr.indexOf(item) !== index)
// }



export {
    addQuestion,
    removeQuestion,
    addField,
    removeField,
    handleInput,
    debounce,
}