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



function filterField(arr, index){
    return arr.filter(item => arr.indexOf(item) !== index)
}

function mapField(index, arr, value, key){
    return arr.map(item => {
        return arr.indexOf(item) === index ? {...item, [key]: value} : item
    })
}

export {
    filterField,
    mapField,
    addQuestion,
    removeQuestion,
    addField,
    removeField,
}