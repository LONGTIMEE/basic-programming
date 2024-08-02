function sayhi(dayofweek:number) {
    switch (dayofweek)
    {case 1 :
        console.log('SunDay')
        break
    case 2 :
        console.log('MonDay')
        break 
    case 3 :
        console.log('TuesDay')
        break
    case 4 :
        console.log('Wednesday')
        break
    case 5 :
        console.log('Thursday')
        break
    case 6 :
        console.log('FriDay')
        break 
    case 7 :
        console.log('Saturday')
        break
    default:
        console.log('PutWorngDay')
    }
}
sayhi(2)

function ShirtSize(size:string) {  //ทดลองเเบบอย่างอื่น
    switch (size)
    {case 's' :
        console.log('Underweight')
        break
    case 'm' :
        console.log('Underweight')
        break 
    case 'l' :
        console.log('Overweight')
        break
    case 'xl' :
        console.log('Obesity')
        break
    case '2xl' :
        console.log('Obesity')
    default:
        console.log('Cant Fourd Size')
    }
}
ShirtSize('l')
ShirtSize('s')
ShirtSize('m')
ShirtSize('xl')
ShirtSize('4m')

const x:number = 999999999999999 //15ตัว
const y:number = 9999999999999999 //16ตัว 

console.log('x', x)
console.log('y', y)

const x:number = 0.1
const y:number = 0.2

console.log((x * 10 / 10) + (y * 10 / 10 ) )

const x:number = 46

console.log(x.toString())

const x:number = 46.475757

console.log(x.toFixed(4)) //ใส่ทศนิยมให้ เเต่ ไม่ออกมาเป็นตัวเลข ออกมาเป็นตัวหนังสือ

const x:number = 100000000

console.log(x.toLocaleString()) //ใส่ลูกน้ำให้

function boy(y:number) {
    const x =y.toLocaleString()
    return x

}    

console.log(boy(2000))


function fixedDecimal(n:number, digit :number) {
    const x = n.toFixed(digit) // digitทศนิยม
    return x
}

console.log(fixedDecimal(40,5)) //เป็นการเเสดงทศนิยม ว่าต้องการให้เเสดงกี่ตำเเหน่ง เปลี่ยนเลข5 เปลี่ยนตำเเหน่ง

function boy(y:number) {
    const x =y.toLocaleString()
    return x

}    

console.log(boy(200000))

const str:string = "hello"

console.log(str.length) //นับคำ