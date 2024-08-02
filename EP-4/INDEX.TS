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
    {case ('s') :
        console.log('Underweight')
        break
    case ('m') :
        console.log('Underweight')
        break 
    case ('l') :
        console.log('Overweight')
        break
    case ('xl') :
        console.log('Obesity')
        break
    case ('2xl') :
        console.log('Obesity')
    default:
        console.log('PutWorngDay')
    }
}
ShirtSize('l')