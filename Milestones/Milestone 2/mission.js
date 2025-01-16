const themeSelector = document.querySelector(".themeSelector")

function changeTheme(){
    const currentValue = themeSelector.value
    console.log(currentValue)

    if (currentValue == "Dark"){
        document.body.classList.add("dark")
    } else {
        document.body.classList.remove("dark")
    }
}   

themeSelector.addEventListener('change',changeTheme)