//import recipes
import recipes from "./recipes.mjs"

//get random number
function get_random_number(){
    const randomNumner = Math.floor(Math.random()*5)
    return randomNumner
}

//get random recipe
function get_random_recipe(randomNumner, recipes){
    const randRecipe = recipes[randomNumner]
    return randRecipe

}

//create a template
function recipeTemplate(randRecipe){
    return `
        <div class="main-content">
            <img src="./images/${randRecipe.image}" alt="">
            <div class="recipe-info">
                <div class="tag-container">
                    ${tagsTemplate(randRecipe.tags)}
                </div>
                <h2 class="title">${randRecipe.name}</h2>
                ${ratingTemplate(randRecipe.rating)}
                <p class="description">${randRecipe.description}</p>

            </div>
        </div>
    `

}

//generate tags
function tagsTemplate(tags){
    return tags.map(tag =>`<p class="tag">${tag}</p>`).join('');
}

//generate correct rating stars
function ratingTemplate(rating){
    let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: 4 out of 5 stars"
    >`

    for (let i=0; i<5; i++){
        if(i < rating){
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }

    html+=`</span>`
    return html
}

function renderRecipes(recipeList){
    const recipeContainer = document.querySelector(".recipe-container");
    recipeContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join("");
}

//main
function main(){
    const randNum = get_random_number()
    const recipe = get_random_recipe(randNum, recipes)
    renderRecipes([recipe])

    document.querySelector(".search-button").addEventListener("click",searchHandler)

    function searchHandler(event){
        event.preventDefault();
        const query = document.querySelector("#searchbar").value.toLowerCase();
        const filteredRecipes = filterRecipes(query)
        renderRecipes(filteredRecipes)
    }

    function filterRecipes(query){
        return recipes
            .filter(recipe => 
                recipe.name.toLowerCase().includes(query) ||
                recipe.description.toLowerCase().includes(query) ||
                recipe.tags.some(tag=> tag.toLowerCase().includes(query))
            )
            .sort((a,b) => a.name.localeCompare(b.name))

    }
    
}

main()


