import _ from 'lodash';

export function paginate(items, currentpage, pageSize){
    // console.log(items.length)
    const startIndex = (currentpage - 1) * pageSize;
    // console.log(startIndex, pageSize)
    // console.log(_(items).slice(0).take(20).value())
    
    return _(items).slice(startIndex).take(pageSize).value();
}

export function getMaxPageNum(items, pageSize){
    // console.log(items.length)
    return Math.ceil(items.length /pageSize);
}