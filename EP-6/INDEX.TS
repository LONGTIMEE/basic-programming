
// loop มี3 ประเภท
// the for loop
// the while loop
// the do while loop



for (let i = 0; i <=10 ; i++) {              //
    console.log(i)  
}

let sum: number = 0

for(let i = 1; i<=365; i++) {
    sum = sum + i
}


console.log('total: ', sum)


let sum: number = 0

for(let i = 1; i<=31; i++) {        //วิธีการเพิ่มตัวเเปรเก็บรอบ
    sum = sum + i
}


console.log('total: ', sum)

let sum:number = 0
let i: number = 1

while (i<=31) {     //i<=31เงื่อนไข
    sum= sum+ i
    i++
}

console.log('total: ', sum)

// the do while loop ทำก่อนเช็ค เช็คก่อนค่อยทำ

let sum: number = 0
let i: number = 1

do {
  sum = sum + i  
  i++
} while (i<=31)

console.log('total: ', sum)

// while (true) { //ทำให้พัง
//     console.log("โสด")
//   }

let count: number = 0

while (true) {
  console.log("โสด")
  count++
  if (count === 10) {
    break
  }
}

// เเบบทดสอบ
// let count: number = 0

// while (true) {
//   console.log("ฉันอายุ ...รอบ...ปีเเล้ว")
//   count++
//   if (count === 2) {
//     break
//   }
// }
// ทั้ง3รูปเเบบ
for (let i = 1; i<= 13; i++) {
    console.log('ฉันอายุ ' + i + 'ปี')
  }
  
  let x:number = 1
  while (x <=13) {
    console.log('ฉันอายุ ' + x + 'ปี')
    x++
  }
  
  let y:number = 1
  do {
    console.log('ฉันอายุ ' + y +'ปี')
    y++
  }while (y <=13)

// เริ่มเข้า Arry

let car1 : string = 'Toyota'
let car2 : string = 'Honda'
let car3 : string = 'Suzuki'
let car4 : string = 'YaMaHa'
let car5 : string = 'Mazada'
let car6 : string = 'ฺBaBaGa'

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']
const num:number = [1,2,3,4,5]
const bool:boolean = [True,True,false,false]

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']

console.log(cars[1])

const str:string = 'ชอบก็จัด ประหยัดทำไม'

console.log(str[2])

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']

console.log(cars.length)

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']

cars[2] = 'Isuzu' //เพราะว่ามีข้อยกเว้น

console.log(cars[2])


const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']

for (let i = 0; i < 5; i++) {
  console.log(cars[i])
}

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
}

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada']

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === 'YaMaHa') {
    console.log('รถซื้อเเกงจะไปเเรงได้ไง')
  }
}

let i: number = 0

while (i < cars.length) {
  if (cars[i] === 'YaMaHa') {
    console.log('รถซื้อเเกงจะไปเเรงได้ไง')
  }
}

const number:number[] = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i <=10; i++) {
  if (number[i] === 3 || number[i] === 5 || number[i] === 7) {
    number [i] = (0)
    
  }      
}
console.log(number)