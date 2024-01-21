function getSize(textSize: string){
    const sizeArr = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']
    
    const size =  sizeArr.includes(textSize) ? `text-${textSize}` : 'text-lg'
    const padd = sizeArr.indexOf(textSize) >= 5 ? 'p-2' : 'p-1'

    return {size, padd}
}

export {getSize}