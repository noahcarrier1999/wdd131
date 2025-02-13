//  arrays.js
const steps = ["one", "two", "three"];
const grades = ["A","B","A"]
const fruits = ["watermelon","peach","apple","tomato","grape"]
const numbers = [12,34,21,54]

const listTemplate = (step) => {
  return `<li>${step}</li>`//the html string made from step
}

const convertGrade = (grade) => {
  let points = 0
   if(grade === "A"){
    points = 4
   } else if(grade === "B"){
    points = 3
   }
   return points
}

const newGrade = grades.map(convertGrade)
console.log("GPA points",newGrade)

const gradesTotal = newGrade.reduce((total,item)=> total + item)
const GPA = gradesTotal/newGrade.length
console.log("GPA",GPA)

const filteredFruits = fruits.filter(fruit => fruit.length < 6)
console.log("Fruits less than 6 letters", filteredFruits)

const luckyNumber = 21
const indexOfLuckyNumber = numbers.indexOf(luckyNumber)
console.log("Lucky number index",indexOfLuckyNumber)

const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("")// set the innerHTML