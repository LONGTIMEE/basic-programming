console.log(1)                
console.log(2)
console.log(3)                
console.log(4)
console.log(5)                
console.log(6)
console.log(7)                
console.log(8)
console.log(9)                
console.log(10)

the for loop
the while loop
the do while loop



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