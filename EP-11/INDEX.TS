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
    if (atob(user[0].password) === password) {
        console.log('เข้าสู่ระบบ')
    } else {
        console.log('รหัสผ่านไม่ถุกต้อง')
    }
} else {
    alert('ไม่มีผู้ใช้งานในระบบ')
    }
}   
login('max@utk.ac.th', 'maxi@utk1234')




















