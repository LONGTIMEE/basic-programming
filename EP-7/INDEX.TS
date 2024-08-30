const score = [10,23,26,30,33]

 let sum: number = 0

for (let i = 0; i < score.length; i++) { //เเบบเอาผลรวมทั้งหมดมาบวกเอามาบวก
    sum = sum + score[i]
}
console.log("Total: ", sum)

let avg = sum / score.length //เเบบหาค่าเฉลี่ย
console.log("Total: ", avg)

const myStydents: string = "เซน,เเทน,เวฟ,รุ้ง,เเท็ค,สร" //เป็นstring

const myStydentsArry:string[] = myStydents.split(',') //

console.log(myStydents)
console.log(myStydentsArry)

const fullName: string = 'สุดสวย สวยสุด'

console.log(fullName.split(' ')[1])

console.log(fullName.slice(0, fullName.indexOf(' ')))

//ทดลองทำ

const nameAnimals: string = "หมา*ควาย*เเรด*ปู*ไก่"

const nameAnimalsArry:string[] = nameAnimals.split('*')

console.log(nameAnimals)
console.log(nameAnimalsArry)

const nameAnimals: string = "หมา*ควาย*เเรด*ปูผัดผง*ไก่"

const nameAnimalsArry:string[] = nameAnimals.split('*')

console.log("ตั้งต้น: ", nameAnimalsArry)

nameAnimalsArry.pop() //.popเอาตัวสุดท้ายออก //เอาตัวสุดท้ายออกออกตลอดไป

console.log("เอาตัวสุดท้ายออก: ", nameAnimalsArry)

nameAnimalsArry.push('ม้าลาย') //.pushใส่ต่อท้าย

console.log("ใส่ต่อท้าย: ", nameAnimalsArry)

nameAnimalsArry.shift() //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ", nameAnimalsArry)

nameAnimalsArry.unshift('ปลาร้า') //ใส่ตัวหน้า

console.log("ใส่ตัวหน้า: ", nameAnimalsArry)

const furits = ["Banana","Orange","Apple","Mango"]

furits.sort() //เรียง A-z

console.log(furits)

furits.reverse() //เรียงย้อนกลับ Z-A

console.log(furits)

const furitsname = furits.slice(0,2) //ตัด

console.log(furits)

//ทดลอง

const names : string = "บอย,จอย,กอย,ออย"

const nameArry: string[] = names.split (',')


names.sort()

console.log(nameArry)

names.reverse()

console.log(nameArry)

//โค้ดในชีวิตจริง

const me = {
    firstname: 'Achitphol' ,
    LastName : 'Lervilnareis',
    age : 20,
    phonenumber : 112,
    sex : 'male'
}

// ประวัติส่วนตัว

// ชื่อ : Achitphol
// นามสกุล : Lervilnareis
// อายุ : 20
//เบอร์โทร : 112
//เพศ : ชาย

//0936285567