function add(a: number,b: number) {
    return a+b
}
cd
ep2
ep2>ts-node index.ts

console.log(add(10,14))

เเบบทดสอบ
1.รับเลขมา2ตัว เเล้วลบกัน
2.รับเลข4ตัว เเล้วเอาทั้งหมดมาคูณกัน

function remove(a: number,b: number) {
    return a-b
}
console.log(remove(8,16))

function add(a: number,b: number,c: number,d: number) {
    return a*b*c*d
}
console.log(add(10,14,10,3))

function x(a: string,b: number) {
    return a+b
}
console.log(x(14,20))


function grade(homework: number,midterm: number,final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'fail'
    } else {
        return 'pass'
    }
}

console.log(grade(45,23,14))



ืืทดลองหลายตัวเเปร

function grade(homework: number,midterm: number,final: number) {
    let score: number = homework + midterm + final


if (score < 50) {
    return 'grade f'
    } else if (score < 60) {
    return 'grade D'
    } else if (score < 70) {
        return 'grade C'
    } else if (score < 80) {
        return 'grade B'
    } else {
        return 'grade A'
    }

    
}   
    console.log(grade(15,27,36))
    console.log(grade(45,10,6))
    console.log(grade(4,6,12))
    console.log(grade(45,20,18))
    console.log(grade(1,40,15))