
//functions

const getGrades = () =>{
    const input = document.getElementById("grades").value
    const inputArray = input.split(",")
    const cleanInput = inputArray.map(item => item.trim().toUpperCase())
    return cleanInput
    
}

const convertGrades=(cleanInput)=>{
    return cleanInput.map(input => {
        
        if(input === "A"){
            return 4
        } else if (input === "B"){
            return 3
        } else if (input === "C"){
            return 2
        } else if (input === "D"){
            return 1
        } else {
            return 0
        }
    })
}

const getGPA=(convertGrades)=>{
    const gradesTotal = convertGrades.reduce((total,item)=> total + item)
    const GPA = gradesTotal/convertGrades.length
    return GPA
}

const outputBrowser=(GPA)=>{
    const output = document.getElementById("output")
    output.innerText = GPA
}

const clickHandler=()=>{
    let cleanInput = getGrades()
    let convertedGrades = convertGrades(cleanInput)
    let GPA = getGPA(convertedGrades)
    outputBrowser(GPA)
}

document.querySelector("#submitButton").addEventListener("click",clickHandler)