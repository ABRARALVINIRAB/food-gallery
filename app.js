const foods = document.getElementById('all-foods');
const parent2 = document.getElementById('parent2');
console.log(foods);
const foodLoads = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => displayFoods(data.meals))

}
foodLoads();
const displayFoods = (allFoods) => {
    const parent = document.getElementById('parent');
    // parent.textContent = '';
    for (const food of allFoods) {
        console.log(food);
        const div = document.createElement('div')
        // div.classList.add('col-md-4');
        div.innerHTML = `
        
        <div class="product-card">
        <div class="card-image">
            <img src="${food.strMealThumb}" alt="">
        </div>
        <div class="card-body">
            <h2>${food.strMeal}</h2>
            <div class="product-details">
                <div class="size">
                    <h5>${food.strInstructions.slice(0, 100)}</h5>
                </div>
                <button class="buy-now-btn" onClick="details(${food.idMeal})">Details</button>
            </div>

        </div>
    </div>
           
        `
        parent.appendChild(div);

    }


}
const details = (id) => {
    console.log(id);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => showDetails(data.meals[0]))

}
const showDetails = (data) => {
    console.log(data);
    const div = document.createElement('div');
    // parent2.innerHTML = '';
    parent2.textContent = '';
    div.innerHTML = `
    <div class="card-container">
        <div class="text-center go">
        <img src="${data.strMealThumb}" alt="">
        </div>

        <div class="title">
            <h1>${data.strMeal}</b></h1>
            <p>
            ${data.strInstructions.slice(0, 250)} <br> <br>

            <button class="buy-now-btn"><a  target="_blank" href="${data.strSource}">Website Link</a></button>
            </p>
            <button class="buy-now-btn"><a  target="_blank" href="${data.strYoutube}">Youtube Link</a></button>
            </p>
        </div>
        
    </div>
    
    `
    parent2.appendChild(div)

}
