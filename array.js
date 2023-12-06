
var browsers = new Array ('Chrome','IE','Firefox','Safari')
console.log(browsers[0])   //Chrome
console.log(browsers[2])   //Firefox
console.log(browsers[4])   //undefined เพราะตัวสุดท้ายมีลำดับเป็น 3


    let nume = (10,20,30,40,50)
let sum = 0
for (i=0;1<nume.length; i++){ //length คือจำนวนสมาชิกทั้งหมดของอาร์เรย์
 sum += nume[1]
 console.log(sum)
}


let countries = ['thailand','japan','Endland','Germany']
for (c of countries){
    console.log(c)
}