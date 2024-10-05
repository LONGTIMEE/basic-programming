// ยาก
function covertToArrayString(arr: number[]) {
    
    
    const newArray: string[] = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(arr[i].toString());
    }
    return newArray
}

// ยากที่สุด
function covertToArrayString2(arr: number[]) {
    
    
    const newArray: string[] = [];
    let i = 0;
    while (i < arr.length) {
        newArray.push(arr[i].toString());
        i++
    }
    return newArray
}

// ง่าย
function covertToArrayStringWithMap(arr: number[]) {
    return arr.map(function(element, index) {
        return element.toString();
    })
}    


console.log(covertToArrayString([1,2,3,4,5]))
console.log(covertToArrayString2([1,2,3,4,5]))
console.log(covertToArrayStringWithMap([1,2,3,4,5]))