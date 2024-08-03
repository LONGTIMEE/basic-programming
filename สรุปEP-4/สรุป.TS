(str.length) //นับตัวอักษรให้ว่ามีกี่ตัว
    ///อย่างเช่น
        ///const str:string = "HelloMyNameIsArm"
            ///console.log(str.length) 
                ///คำตอบ = 16
           


(str.charAt(0)) //เรียกตัวอักษรในประโยค หรือ ดึงตัวอักษรจากประโยค เริ่มต้นที่0 เช็คตำเเหน่งตัวอักษรนั้น ว่าตำเเหน่งนั้นคือตัวอักษรอะไร
    ///อย่างเช่น
         ///const str:charAt = "HelloMyNameIsArm"
             ///console.log(str.charAt(5))
                ///คำตอบ = M     -0H -1e -2l -3l -4o -5M -6y -7N -8a -9m -10e -11I -12s -13 A -14r -15m
                                //0-H 1-e 2-l 3-l 4-o 5-M 6-y 7-N 8-a 9-m 10-e 11-I 12-s 13-A 14-r 15-m



(str.trimStart()) //เอาช่องว่างช่วงเเรกออก
    ///อย่างเช่น
        ///const str:string = "      HelloMyNameIsArm      "
            ///console.log(str.trimStart())
                ///คำตอบ = "HelloMyNameIsArm      " 



(str.trimEnd()) //เอาช่องว่างข้องหลังออก     
    ///อย่างเช่น       
        ///const str:string = "      HelloMyNameIsArm      "
            ///console.log(str.trimEnd())             
                ///คำตอบ = "HelloMyNameIsArm      "



(str.trim()) //เอาช่องว่างข้างหน้าเเละหลังออก               
    ///อย่างเช่น
        ///const str:string = "      HelloMyNameIsArm      "
            ///console.log(str.trim())  
                ///คำตอบ   = "HelloMyNameIsArm"   
                
                

(str.toUpperCase())//ทำให้เป็นพิมพ์ใหญ่ทั้งหมด
    ///อย่างเช่น
        /// const str:string = "Achitphol Lertvilnaris"
            ///console.log(str.toUpperCase()) 
                ///คำตอบ = "ACHITPHOL LERTVILNARIS"



(str.toLowerCase())// ทำให้เป็นพิมพ์เล็ก                
    ///อย่างเช่น              
        ///const str:string = "Achitphol Lertvilnaris"
            ///console.log(str.toLowerCase())   
                /// คำตอบ = "achitphol lertvilnaris"       
                
                

(str.indexOf('?'))//หาตัวอักษรนั้นว่าอยุ่ตำเเหน่งที่เท่าไหร่               
    ///อย่างเช่น
        ///const str:string = 'อยากกลับบ้าน'
            ///console.log(str.indexOf('ก'))
                ///คำตอบ = 3