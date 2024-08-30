const score = [10,23,26,30,33]

 let sum: number = 0

for (let i = 0; i < score.length; i++) { //เเบบเอาผลรวมทั้งหมดมาบวกเอามาบวก
    sum = sum + score[i]
}
console.log("Total: ", sum)

let avg = sum / score.length //เเบบหาค่าเฉลี่ย
console.log("Total: ", avg)