Arry // คือ การเอา string หรือ Number มาต่อกัน เช่น
const cars = ['Saab', 'Volvo', 'BMW']

cars .length // หาความยาว string หรือ จำนวน สมาชิก ใน Array

cars[0] = 'Yamaha' // access array คือการเเทนที่ค่าจากเดิม ให้้เป็นอันอื่น เช่นดึง cars [0] คือ ควรได้ เป็น 'Saab' เเต่เรา access array เลยกลายเป็น 'Yamaha' เเทน

// เข้าเรื่อง loop

for (let i = 0; i <= 10; i++ ) {    // LOOP จะประกอบ ไปด้วย 3 ส่วน
// นับรอบเริ่มต้นที่0 || นับรอบน้อยกว่าหรือเท่ากับ10 || i = i + 1 เอาตัวเเปร ค่าอัน เก่า มาใส่ บวก 1 เข้าไปใหม่
    console.log(i)
}

WHILE LOOP // เช็คก่อนทำ

let i = 0
while (i < 10) { 
    i++
    console.log(i)
}

DO WHILE LOOP // ทำก่อน เช็ค

let i = 0

do {
    console.log(i)
    i++
} while (i < 10) 

// test

for (let i =0; i < cars.length; i++)
    console.log(cars[i])
}

let i = 0
while (i < cars.length) {
    i++
    console.log(cars[i])
}

// Methood Array เล่นกับ ตัวสุดท้าย ของ Array

cars.pop() // ['Saab', 'Volvo'] // ลบสมาชิกตัวสุดท้ายออก

cars.push('Benz') // ['Saab', 'Volvo', 'Benz'] // เเทนที่ตัวหลังสุด

// เล่นกับตัวหน้า

cars.shift() // [ 'Volvo', 'Benz'] // เอาตัวหน้าออก

cars.unshift() // ['BMW', 'Volvo', 'Benz'] // ใส่สมาชิกตัวใหม่ เข้าไปหน้าสุด

// ซ้ายเรียกว่า key || ทางขวาเรียกว่า value

const person = {    //objects ที่1
    firstName: 'xxxx',
    lastName: 'xxx',
    age: 12,
    tel: 'xxxx',
        sister: {   // objects ที่2 
        firstName: 'xxxx',
        lastName: 'xxx',
        age: 12,
        tel: 'xxxx' 
        }
}

// เข้าถึง objects ตาม ด้วย key ที่ต้องการ (person.age) สามารถเปลี่ยน ค่าใหม่ ได้โดยใช้ = ก่อน อย่างเช่น person.age = 13 

person.sister.firstName

// Array ตัวข้างล่างนี้ มีสมาชิก 3ตัว

const friends = [
    {   
    firstName: 'xxxx',
    lastName: 'xxx',
    age: 12,
    tel: 'xxxx',
        sister: {   // objects ที่2 
        firstName: 'xxxx',
        lastName: 'xxx',
        age: 12,
        tel: 'xxxx',
        },
    },
        {   
    firstName: 'xxxx',
    lastName: 'xxx',
    age: 12,
    tel: 'xxxx',
        sister: {   // objects ที่2 
        firstName: 'xxxx',
        lastName: 'xxx',
        age: 12,
        tel: 'xxxx',
        },
    },
        {   
    firstName: 'xxxx',
    lastName: 'xxx',
    age: 12,
    tel: 'xxxx',
        sister: {   // objects ที่2 
        firstName: 'xxxx',
        lastName: 'xxx',
        age: 12,
        tel: 'xxxx',
        },
    },
];

for (let i =0; i < cars.length; i++) {
    console.log(friends[i].firstName)
}


.map()  // คือ Array Methood เข้ามาใช้กับ object with Array ได้ ต้องถูกคลุม ด้วย Array ก่อน ถึงจะใช้ได้
.filter // กรองค่า