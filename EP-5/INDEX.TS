//ทบทวน
const prefix:string = 'พณ.ท่าน ร้อยตำรวจตรวจตลาด'
const fname:string = 'พชรพล'
const lname:string = 'คนหล่อ'

console.log(prefix.concat(" ",fname, " " , lname)) //ต่อstring

console.log(prefix + " " + fname + " " + lname) //ต่อstringไปเเบบเรื่อยๆ


const str:string = 'นายธภัทร เเดงอ่อน'

console.log(str.includes('นาย'))


//เริ่มเรียน

const str:string = 'นายธภัทร ทดสอบ'

console.log(str.slice(3,8))

const str:string = 'นายอชิตพล เลิศวิไลนริศ'

console.log(str.slice(3,9))


const str:string = 'นายธนภัทร รักวินัย ใฝ่เรียนรู้ เชิดชูคุณธรรม ค้ำจุนโลก โบกสะบัด คลัสเสีย เกียร์หลุด'

console.log(str.slice(str.indexOf('ค้ำจุนโลก'),str.indexOf('ค้ำจุนโลก') + "ค้ำจุนโลก".length,))


const str:string = 'นายณัฐกานต์,เด็กติดเกม,roblox,aka,ทิวคุง'

console.log(str.split(",")) //ตัดคำ


const str:string = 'นางสาวอัญชลี ทดสอบ'

console.log(str.replace('ทดสอบ','ไม่ทราบนามสกุล')) //เอาคำไปเเทนที่ ตรงนั้นเเทน


const str:string = 'ยายเเล่ม เมื่อตอนสาว ๆ ผิวขาว ตาคม ยายเเล่ม'

console.log(str.replace('ยายเเล่ม','โรนัลโด้')) 


function getPrefix(fullName:string) {
    if (fullName.includes('นาย')) {
        return 'นาย'
    }   else if (fullName.includes('นางสาว')) {
        return 'นางสาว'
    }   else {
        return '-'
    }
}

console.log(getPrefix('นายอชิตพล เลิศวิไลนริศ'))




const x: number = 5 

let y: string = 'hi'


var t:boolean = true

y = 'hello'

t = false

var t: boolean = false