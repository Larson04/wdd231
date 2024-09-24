import {getRecipes} from "./recipe.mjs";
const cookieData = getRecipes();

console.log(cookieData);

function setCookieInfo(data){
    console.log(data);
    const container = document.querySelector(".recipe-container");

    // .map is used to loop through multiple items in an array
    const html = data.recipes.map(recipeTemplate);

    container.innerHTML = html.join("");
}



function recipeTemplate(info){
    return`
    <div class="recipe">
        <h2>${info.recipe_name}</h2>
        <img src="${info.image}" alt="${info.notes}"/>
    </div>
    `
}

setCookieInfo(cookieData);