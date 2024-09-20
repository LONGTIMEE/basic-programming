console.log("1")
console.log("2")
console.log("3")
setTimeout(() => {      //เป็นการทำให้เป็นเเบบพิมพ์ช้าเลยทำให้4 เป็นเลขตัวสุดท้าย
    console.log("4")
})
console.log("5")

const database = [
    {
        email: 'user@gmail.com',
        password: 'Bobo789'
    }
]

function signUP(email:string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password            //ซ้าย คือ key ขวา คือ varlon
            }
            database.push(userObject)
            alert('สมัครสมาชิกเเล้ว ยินดีต้อนรับ')
        } else{
            alert('รหัสผ่านต้องมากกว่า 8 ตัว เเละไม่เกิน16')
        }
    }   else {
        alert('Email ไม่ถูกต้อง')
    }
}

signUP('boy@gmail.com', '8978455784')


//กฎการเข้ารหัส
// เปลี่ยน u เป็น +
// เปลี่ยน 6 เป็น *
// เปลี่ยน 0 เป็น ^

const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYo+3^^^'
    },
    {
        email: 'max@gmail.com',
        password: '12345*7เเปด'
    }
]
function decryptPassword(password: string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}

function lockin(email: string, password: string){
    const user = database.filter(function(element, index){
        return element.email === email
    })
    if (user.length > 0) {
        if (user[0].password === password) {       //เปลี่ยนเป็นมาใช้อย่างนี้ก็ได้เหมือนกัน  
            alert('เข้าสุ่ระบบสำเร็จ')                   // const realPassword = decryptPassword(user[0].password)
        } else {                                    // if (realPassWord === password)
        alert('รหัสผ่านไม่ถุกต้อง ')
    }
} else {
    alert('ไม่พบผุ้ใช้งาน')
    }
}

lockin('user@gmail.com', 'Bobo789')
lockin('use.com', 'Bo789')





//เปลี่ยนเป็นมาใช้อย่างนี้ก็ได้เหมือนกัน
// const realPassword = decryptPassword(user[0].password)
// if (realPassWord === password)

//กฎการเข้ารหัส
// เปลี่ยน u เป็น +
// เปลี่ยน 6 เป็น *
// เปลี่ยน 0 เป็น ^

//+u*60^ --> ++**^^ --> uu6600
const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYo+3^^^'
    },
    {
        email: 'max@gmail.com',
        password: '12345*7เเปด'
    }
]
function decryptPassword(password: string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}

function lockin(email: string, password: string){
    const user = database.filter(function(element, index){
        return element.email === email
    })
    if (user.length > 0) {
        const realPassword = decryptPassword(user[0].password)
        if (realPassword === password) {
            alert('เข้าสุ่ระบบสำเร็จ') 
        } else {
        alert('รหัสผ่านไม่ถุกต้อง ')
    }
} else {
    alert('ไม่พบผุ้ใช้งาน')
    }
}

lockin('user@gmail.com', 'Bobo789')
lockin('use.com', 'Bo789')


// const realPassword = decryptPassword(user[0].password)









