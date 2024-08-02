function sayhi(dayofweek:number) {
    switch (dayofweek)
    {case 1 :
        console.log('วันอาทิตย์')
        break
    case 2 :
        console.log('วันจันทร์')
        break 
    case 3 :
        console.log('วันอัง')
        break
    case 4 :
        console.log('วันพุธ')
        break
    case 5 :
        console.log('วันพฤหัสบดี')
        break
    case 6 :
        console.log('วันศุกร์')
        break 
    case 7 :
        console.log('วันเสาร์')
        break
    default:
        console.log('PutWorngDay')
    }
}
sayhi(2)