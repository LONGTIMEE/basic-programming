const aboutMe = {
    firstName: 'Mr.ChillTonTomSickLinkInMyMind' ,
    LastName : 'MaiChiNaMaiChiNa',
    age : 20,
    phoneNumber : 112,
    sex : 'male',
    addres : 'USA',
    city : 'newYorkCity',
    numBerCity : 10005,
    street :  'Beaver',
    numberStreet : 14,
    mail : 'aadawdsadawdadadadwdad@gmail.com'
}

console.log(aboutMe.firstName)
console.log(aboutMe.LastName)
console.log(aboutMe.firstName +  aboutMe.LastName) //เชื่อมกัน
aboutMe.firstName = 'จุทาเทพ' //fดึงค่าออกมา 

console.log(aboutMe) //เเอดค่าเข้าไปใหม่


const aboutMe = {
    firstName: 'Mr.ChillTonTomSickLinkInMyMind' ,
    LastName : 'MaiChiNaMaiChiNa',
    age : 20,
    phoneNumber : 112,
    sex : 'male',
    addres : 'USA',
    city : 'newYorkCity',
    numBerCity : 10005,
    street :  'Beaver',
    numberStreet : 14,
    mail : 'aadawdsadawdadadadwdad@gmail.com',
    fan : {                 //obejet
        firstName: 'Lisa',
        lastName : 'MamaMai',
        age : 20000,
        animal : {
            animalType : 'cat',
            color : 'red'
        }

    }

}


console.log(aboutMe.fan.animal.animalType)

const aboutMe = {
    firstName: 'Mr.ChillTonTomSickLinkInMyMind' ,
    LastName : 'MaiChiNaMaiChiNa',
    age : 20,
    phoneNumber : 112,
    sex : 'male',
    addres : 'USA',
    city : 'newYorkCity',
    numBerCity : 10005,
    street :  'Beaver',
    numberStreet : 14,
    mail : 'aadawdsadawdadadadwdad@gmail.com',
    fan : {
        firstName: 'Boy JO E',
        lastName : 'CiCiCi',
        aka : 'lil Bro',
        animal : {
            animalType : 'cat',
            color : 'red'
        }

    },
    mybro : {
        firstName: 'Boy JO E',
        lastName : 'CiCiCi',
        aka : 'lil Bro',
    }

}


console.log(aboutMe.mybro.aka)

const mybro = [{
    firstName: 'Lisa',
    lastName : 'CiCiCi',
    aka : 'SuperWoMen',
    age : 16
}, {
    firstName: 'Rosse',
    lastName : 'CiCiCi',
    aka : 'RoseOnPink',
    age : 20
}, {
    firstName: 'Jiso',
    lastName : 'CiCiCi',
    aka : 'Jinny',
    age : 24
}, {
    firstName: 'Jenny',
    lastName : 'CiCiCi',
    aka : 'wonDerWoMen',
    age : 17
}]

console.log(mybro[2].firstName)

const myBro = [{
    firstName: 'Lisa',
    lastName : 'CiCiCi',
    aka : 'SuperWoMen',
    age : 16
}, {
    firstName: 'Rosse',
    lastName : 'CiCiCi',
    aka : 'RoseOnPink',
    age : 20
}, {
    firstName: 'Jiso',
    lastName : 'CiCiCi',
    aka : 'Jinny',
    age : 24
}, {
    firstName: 'Jenny',
    lastName : 'CiCiCi',
    aka : 'wonDerWoMen',
    age : 17
}]

const myFriendsAKA = myBro.map(function(element, index) {
return ({
    firstName: element.firstName,
    aka: element.aka
})
})

const myFriendsMoreThen = myBro.filter(function(element, index) {
return element.age > 19 && element.lastName === 'CiCiCi'
})

console.log(myFriendsMoreThen)