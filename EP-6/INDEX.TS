
// loop มี3 ประเภท
// the for loop
// the while loop
// the do while loop

// loop คือ การส่งค่าออกมาเเบบหลายครั้งๆ

for (let i = 0; i <=10 ; i++) {              //let i = 0 คือloopที่จะเริ่มต้น  //i <=10 คือloopที่จะจบหรือให้สิ้นสุดที่เท่าไหร่
    console.log(i)  
}




let sum: number = 0           //เริ่มเก็บ ที่0

for(let i = 1; i<=365; i++) {   //เก็บตั้งเเต่1 ต่อไป ก็เก็บ 2 1+2+3+4 เเต่ไม่เกิน 365 ตรง i
    sum = sum + i             // total = 66795
}


console.log('total: ', sum)


let sum: number = 0

for(let i = 1; i<=31; i++) {        //วิธีการเพิ่มตัวเเปรเก็บรอบ
    sum = sum + i
}


console.log('total: ', sum)

let sum:number = 0  //
let i: number = 1 //เก็บจาก1ไป2ไป3-nan

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

console.log(cars[1]) //ดึงประโยคจากในกลุ่มของ arry ข้างในของarry คือ ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']

const str:string = 'ชอบก็จัด ประหยัดทำไม' 

console.log(str[2]) //ดึงตัวอักษร

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']

console.log(cars.length) // ให้นับว่าคำในarry มีกี่ประโยค

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']

cars[2] = 'Isuzu' //เพราะว่ามีข้อยกเว้น

console.log(cars[2])


const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']

for (let i = 0; i < 5; i++) {
  console.log(cars[i]) // เอ่ยประโยคทั้งหมด ในarry หรือจะใช้เป็นเเบบอันล่างก็ได้
}

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada','ฺBaBaGa']

for (let i = 0; i < cars.length; i++) { //อันนี้ใช้คล้ายๆ กับอันบนได้
  console.log(cars[i])
}

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada']

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === 'YaMaHa') {         //ถ้าเจอคำว่า 'YaMaHa' จะตอบเป็น 'รถซื้อเเกงจะไปเเรงได้ไง' โดยที่ไม่ตอบคำอื่นรวมด้วย
    console.log('รถซื้อเเกงจะไปเเรงได้ไง')
  }
}
//  อันล่างนี้ก้อีกรูปเเบบนึง
const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada']

while (i < cars.length) {
  if (cars[i] === 'YaMaHa') {  //ถ้าเจอคำว่า YaMaHa จะเเทนด้วย รถซื้อเเกงจะไปเเรงได้ไง
    console.log('รถซื้อเเกงจะไปเเรงได้ไง')
  }
}

const cars:string[] = ['Toyota','Honda','Suzuki','YaMaHa','Mazada']

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === 'YaMaHa') {         //ถ้าเจอคำว่า 'YaMaHa'
    cars [i] = ('รถซื้อเเกงจะไปเเรงได้ไง')   //จะเเทนด้วยคำว่า 'รถซื้อเเกงจะไปเเรงได้ไง' เเละ จะตอบพร้อมดวย ยี่ห้อ อื่นๆ 
    console.log (cars)                  //อย่างเช่น ["Toyota", "Honda", "Suzuki", "รถซื้อเเกงจะไปเเรงได้ไง", "Mazada"]
  }
}


const number:number[] = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i <=10; i++) { // เรียกประโยคทั้งหมดจาก arry
  if (number[i] === 3 || number[i] === 5 || number[i] === 7) { // เเต่ถ้าเจอเลข 3 5 7
    number [i] = (0) //จะเปลี่ยนเป็นเลข 0
    
  }      
}
console.log(number)