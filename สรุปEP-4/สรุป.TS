(___.toString()) //ทำให้ตัวเลขกลายเป็นตัวหนังสือได้
    ///อย่างเช่น
        ///const x:number = 46
            ///console.log(x.toString())
                ///คำตอบ = "46" ถ้ามีฟันหนู หรือก็คือ '  ',"  " ก็จะกลายเป็นตัวอักษรหรือตัวหนังสือ



(___.toFixed(0))  //ใส่ทศนิยมให้ เเต่ ไม่ออกมาเป็นตัวเลข ออกมาเป็นตัวหนังสือ   ตรงเลข0 ให้ใส่ตัวเลขที่ต้องการให้เเสดงทศนิยมกี่ตัว           
    ///อย่างเช่น
        ///const x:number = 46.475757
            ///console.log(x.toFixed(4))                
                ///คำตอบ = "46.4758"



(x.toLocaleString())  //ใส่ลูกน้ำให้              
    ///อย่างเช่น
        ///const x:number = 10000000                
            ///console.log(x.toLocaleString()) 
                ///คำตอบ = 10,000,000




                ///เนื้อหาครั้งที่2

(___.length) //นับตัวอักษรให้ว่ามีกี่ตัว
    ///อย่างเช่น
        ///const str:string = "HelloMyNameIsArm"
            ///console.log(str.length) 
                ///คำตอบ = 16
           


(___.charAt(0)) //เรียกตัวอักษรในประโยค หรือ ดึงตัวอักษรจากประโยค เริ่มต้นที่0 เช็คตำเเหน่งตัวอักษรนั้น ว่าตำเเหน่งนั้นคือตัวอักษรอะไร
    ///อย่างเช่น
         ///const str:charAt = "HelloMyNameIsArm"
             ///console.log(str.charAt(5))
                ///คำตอบ = M     -0H -1e -2l -3l -4o -5M -6y -7N -8a -9m -10e -11I -12s -13 A -14r -15m
                                //0-H 1-e 2-l 3-l 4-o 5-M 6-y 7-N 8-a 9-m 10-e 11-I 12-s 13-A 14-r 15-m



(___.trimStart()) //เอาช่องว่างช่วงเเรกออก
    ///อย่างเช่น
        ///const str:string = "      HelloMyNameIsArm      "
            ///console.log(str.trimStart())
                ///คำตอบ = "HelloMyNameIsArm      " 



(___.trimEnd()) //เอาช่องว่างข้องหลังออก     
    ///อย่างเช่น       
        ///const str:string = "      HelloMyNameIsArm      "
            ///console.log(str.trimEnd())             
                ///คำตอบ = "HelloMyNameIsArm      "



(___.trim()) //เอาช่องว่างข้างหน้าเเละหลังออก               
    ///อย่างเช่น
        ///const str:string = "      HelloMyNameIsArm      "
            ///console.log(str.trim())  
                ///คำตอบ   = "HelloMyNameIsArm"   
                
                

(___.toUpperCase())//ทำให้เป็นพิมพ์ใหญ่ทั้งหมด
    ///อย่างเช่น
        /// const str:string = "Achitphol Lertvilnaris"
            ///console.log(str.toUpperCase()) 
                ///คำตอบ = "ACHITPHOL LERTVILNARIS"



(___.toLowerCase())// ทำให้เป็นพิมพ์เล็ก                
    ///อย่างเช่น              
        ///const str:string = "Achitphol Lertvilnaris"
            ///console.log(str.toLowerCase())   
                /// คำตอบ = "achitphol lertvilnaris"       
                
                

(___.indexOf('?'))//หาตัวอักษรนั้นว่าอยุ่ตำเเหน่งที่เท่าไหร่     ตรง ? ให้ใส่ตัวอักษรที่ต้องการหา          
    ///อย่างเช่น
        ///const str:string = 'อยากกลับบ้าน'
            ///console.log(str.indexOf('ก'))
                ///คำตอบ = 3



(___.includes('?'))// ถามว่าในข้อความนั้นๆ มีคำหรือ ตัวอักษรนี้จริงๆหรือป่าว จริง หรือ ไม่จริง ตรง ? ให้ใส่คำหรือ ตัวอักษร ที่ต้องการ
    ///อย่างเช่น
        ///const str:string = 'ฉันรักคุณเเละเขา'
            ///console.log(str.includes('คุณ'))// ถามว่าในคำๆนั้นหรือ ตัวอักษร นี้จริงๆหรือป่าว จริง หรือ ไม่จริง
                ///คำตอบ = true