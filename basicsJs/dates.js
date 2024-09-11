//Dates
let myDate=new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toString())
//console.log(typeof myDate)
let myCreateDate=new Date(2023,0,23)
//console.log(myCreateDate.toDateString())
let myCreateDate1=new Date(2023,0,4,5,6)
//console.log(myCreateDate1.toLocaleString())
let myCreateDate2=new Date("2023-01-12") // yy-mm-dd
//console.log(myCreateDate2.toDateString())
let myCreateDate3=new Date("01-14-2023") //mm-dd-yy
//console.log(myCreateDate3.toDateString())
// TimeStamp
let myTimeStamp=Date.now()
//console.log(myTimeStamp)
//console.log(myCreateDate2.getTime())
//console.log(Math.floor(Date.now()/1000))
let new_date=new Date()
//console.log(new_date.getMonth()+1)
//console.log(new_date.getDay())
new_date= new_date.toLocaleString('default',{
    weekday:'long'
})
console.log(new_date)