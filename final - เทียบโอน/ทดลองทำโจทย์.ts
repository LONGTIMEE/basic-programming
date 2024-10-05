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


const item = [
    { products: "Pen", price: 15},
    { products: "Notebook", price: 50},
    { products: "Eraser", price: 5},
];

const checkItem = item.filter(function(element, index) {
    return element.price > 10
}).map(function (element, index) {
    return ({
        name: element.products
    })
})

console.log(checkItem)


const fruits = ["apple","banana","cherry","date"];

const longFruits = fruits.filter(function (element, index) {
    return element.length > 5
}).map(function (element, index) {
    return element.toUpperCase()
}).reverse() // เรียง ตัว A-Z ขึ้นก่อน

console.log(longFruits)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//ท่าง่าย

const incrementedNumbers = numbers.map(function (element, index) {
    return element + 1
})

console.log(incrementedNumbers)

// ท่ายาก

const incrementedNumbersWithForLoop: number []= []

for(let i = 0; i < numbers.length; i++) {
    incrementedNumbersWithForLoop.push(numbers[i] + 1)
}

console.log(incrementedNumbersWithForLoop)

// phase อื่น

const names = ["John Doe","jane Smith","Jack Brown"];

// ท่าโครตยาก
function cutNameWithWhileLoops(names: string []) {
    const fullNAmeArray: {
        firstName: string;
        LastName:  string;
    } [] = [];
    
    
    
    for (let i = 0; i < names.length; i++) {
        const cutName = names [i].split(" ")  // ตัวอย่าง ["John", "Doe"]
        const fullName = {
            firstName: cutName[0],
            LastName: cutName[1],
        };
        fullNAmeArray.push(fullName);
    }
    return fullNAmeArray;
}

// ง่าย

function cutNameWithMap(name: string []) {
    return names.map(function (element, index) {
        const cutName = element.split(" ") // ["John", "Doe"]
        return ({
           fristName: cutName[0] ,
           lastName: cutName[1],
        })
    })
}

console.log(cutNameWithWhileLoops(names))
console.log(cutNameWithMap(names))

// phase อื่น


const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

const updatePeople = people.map(function (element, index) {
    return {
        name: element.name,
        age: element.age,
        isAdult: element.age > 18
    }
})

console.log(updatePeople)
