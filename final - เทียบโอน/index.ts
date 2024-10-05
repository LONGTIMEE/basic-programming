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
