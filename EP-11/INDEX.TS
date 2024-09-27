const database = [
    {
        email: 'max@utk.ac.th' ,
        password: 'bWF4aUB1dGsxMjM0' //รหัสที่ไปเเปลงมา

    }
]

function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
        return element.email === email
    }) 
    
    //    
 //   email: 'max@utk.ac.th' ,
 //       password: 'maxi@utk1234' //รหัสต้นฉบับ
// }] || []

if (user.length > 0) {
    if (atob(user[0].password) === password) {  //atob ฟังก์ชันเข้ารหัส 
        console.log('เข้าสู่ระบบ')
    } else {
        console.log('รหัสผ่านไม่ถุกต้อง')
    }
} else {
    alert('ไม่มีผู้ใช้งานในระบบ')
    }
}   
login('max@utk.ac.th', 'maxi@utk1234')

// phane2

const database = [
    {
        email: 'max@utk.ac.th' ,
        password: 'bWF4aUB1dGsxMjM0' //รหัสที่ไปเเปลงมา

    }
]

// function login(email: string, password: string) {
//     const user = database.filter(function (element, index) {
//         return element.email === email
//     }) 
// if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1 ) {
//     if (user.length > 0) {
//         if (atob(user[0].password) === password) {
//         alert('เข้าสู่ระบบ')
//         }   else {
//         alert('รหัสผ่านไม่ถุกต้อง')
//         }
//     }  else {
//     alert('ไม่มีผู้ใช้งานในระบบ')
//     }
// } else {
//     alert('Mail ไม่ถูกต้อง')
//     }
  
// login('max@utk.ac.th', 'maxi@utk1234')

function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
         return element.email === email 
    })

if (!(email.includes('@') && email.lastIndexOf('@') !== email.length - 1 )) {
    alert('Mail ไม่ถูกต้อง')
    return
    }

if (user.length === 0)
    alert('รหัสผ่านไม่ถุกต้อง')
    return
    }
if (!(atob(user[0].password) === password)) {
    alert('รหัสผ่านไม่ถุกต้อง')
    return
}
    alert('เข้าสู่ระบบ')






















