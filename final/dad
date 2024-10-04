for loop

for (let i = 0; i < 12; i++) {//i < 12 หมุนกี่รอบ i++ เพิ่มจำนวนรอบ ขึ้นที่ละ1
    console.log(i)
}
let i = 0 //ตัวเเปร
while (i <= 10) {
    console.log('while', i)
}

while loop

// arry เอามาเรียงต่อกัน เก็บ string ได้ง่ายกว่า เช่น ['honda','yamaha'] ควรเป็นสมาชิกเดียวกันทั้งหมด

const cars = ['toyota','bmw','honda']

cars.length // มีจำนวนสมาชิกกี่ตัว

cars[1] = 'Suzuki'

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]) // i คือตัวนับจำนวนรอบ
}

let i = 0
while (i < cars.length) {
    console.log("while", cars[i]);
    i++;
}

//Arry method

const cars = ['toyota','bmw','honda']; //

//เล่นสมาชิกตัวหลัง

cars.pop() // ['toyota','bmw',]

cars.push('Benz')

cars.shift() // ['bmw','honda']

cars.unshift('BMX')

cars.sort() // A-Z

cars.reverse() // Z-A


const person = {
    firstname: 'john',
    lastname: 'Doe',
    age: 15,
    isMale: true,
    sister: {
        firstname: 'Jane',
        lastname: 'Doe',
        age: 12,
        isMale: false

    },
};

person.sister.lastname = "smith"


const person = [{
    firstname: 'john',
    lastname: 'Doe',
    age: 15,
    isMale: true,
    sister: {
        firstname: 'Jane',
        lastname: 'Doe',
        age: 12,
        isMale: false

    },
},]
const friend = [{
    firstname: 'john',
    lastname: 'Doe',
    age: 15,
    isMale: true,
    sister: {
        firstname: 'Jane',
        lastname: 'Doe',
        age: 12,
        isMale: false
        },   
    },
];

const productsData = [
    {price: 100},
    {price: 200},
    {price: 150},
    {price: 300},
    {price: 250},
];

function updatePriceWithForLoop(
    products: {
        price: number;
    }[]
)   {
    const m: {
        price: number;
    } []  = [];
    for(let i = 0; i < products.length; i++) {
        if (products[i].price > 150) {
            m.push(products[i])
        }
    }
    
    
    for(let i = 0; i < m.length; i++) {
        m[i].price = m[i].price * 1.1;
    }
    return m;
}

function updatePrice(products: {
    price: number;
}[]) {
    return products.filter(function (element, index){
        return element.price >150;
    })
    .map(function (element, index) {
        return {
            price: element.price * 1.1,
        };
    });
}


console.log(updatePriceWithForLoop(productsData))
// console.log(updatePrice(productsData))



const array:number[] = [1, 2, 3, 4, 5, 6, 7 ,8]

function coverToArryString(arry: number[]) {
    const result: string[] = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i].toString())
    }
    return result
}

function coverToArryStringWithMap(array: number[]) {
    return array.map(function(element, index) {
        return element.toString()
    })
}

console.log(coverToArryString(number))


const names = ["John Doe", "Jane Smith","Jack Brown"];

function cutNameWithMap(array: string[]) {
    return array.map(function(element, index) {
        const cutName = element.split(" ") //['John'0,'Doe'1]
        return {
            firstName: cutName[0],
            lastName: cutName[1]
        }
    })
}

console.log(cutNameWithMap(names))


const account = {
    name: 'ออมกับเทอออ',
    balance: 0,
    deposit: function(amount: number) {
        if (amount < 0) {
            console.log('กรุราระบุจำนวนเงิน')
            return
        }
        this.balance = this.balance + amount
        console.log('ฝากเงินจำนวน ' + amount + ' ยอดคงเหลือ ' + this.balance)
    },
    withdraw: function(amount: number) {
        if (amount > this.balance) {
        console.log('เงินไม่พอ คุณมียอดเงินคงเหลือ ' + this.balance)
        return
    }
    this.balance = this.balance
    console.log('ถอนเงิน ' + amount + ' ยอดเงินคงเหลือ' + this.balance)
    }
}

  account.deposit(699)
 account.withdraw(799)