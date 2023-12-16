const categorizeObj = {
    question: {
        id: null,
        question: '',
        categories: [{name: ''}],
        items: [{name: '', belongsTo: ''}]
    },
    categories: {name: ''},
    items: {name: '', belongsTo: ''},
}

const clozeObj = {
    question: {
        id: null,
        question: '', 
        options:[{
            name:'', 
            underlined:false
        }],
    },
    options: {
        name: '',
        underlined: false,
    }
    
}

const comprehensionObj = {
    question: {
        id: null,
        text: '', 
        ques: [{
            text: '', 
            a:'', 
            b:'', 
            c:'', 
            d:''}]
    },
    ques: {
        text: '', 
        a:'', 
        b:'', 
        c:'', 
        d:'',
    },
}




export {
    categorizeObj,
    clozeObj,
    comprehensionObj,
}