
async function LatestReciepe ()
{
    let res = await fetch( "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772" );
    let data = await res.json();

    console.log( data.meals[ 0 ] );
    document.getElementById( 'img' ).src = data.meals[ 0 ].strMealThumb
    document.getElementById( 'img' ).onclick = function () { myFunction() };

    function myFunction ()
    {
        // window.location.href = data.meals[ 0 ].strYoutube
        window.location.replace( data.meals[ 0 ].strYoutube )
    }
    document.getElementById( 'title' ).innerHTML = data.meals[ 0 ].strMeal
    document.getElementById( 'category' ).innerHTML = data.meals[ 0 ].strCategory
    document.getElementById( 'cuisine' ).innerHTML = data.meals[ 0 ].strArea
    document.getElementById( 'type' ).innerHTML = data.meals[ 0 ].strTags
    document.getElementById( 'ingredient1' ).innerHTML = data.meals[ 0 ].strIngredient1
    document.getElementById( 'ingredient2' ).innerHTML = data.meals[ 0 ].strIngredient2
    document.getElementById( 'ingredient3' ).innerHTML = data.meals[ 0 ].strIngredient3
    document.getElementById( 'ingredient4' ).innerHTML = data.meals[ 0 ].strIngredient4
    document.getElementById( 'ingredient5' ).innerHTML = data.meals[ 0 ].strIngredient5
    document.getElementById( 'ingredient6' ).innerHTML = data.meals[ 0 ].strIngredient6
    document.getElementById( 'ingredient7' ).innerHTML = data.meals[ 0 ].strIngredient7
    document.getElementById( 'ingredient8' ).innerHTML = data.meals[ 0 ].strIngredient8
    document.getElementById( 'ingredient9' ).innerHTML = data.meals[ 0 ].strIngredient9
    document.getElementById( 'ingredient10' ).innerHTML = data.meals[ 0 ].strIngredient10
    document.getElementById( 'measure1' ).innerHTML = data.meals[ 0 ].strMeasure1
    document.getElementById( 'measure2' ).innerHTML = data.meals[ 0 ].strMeasure2
    document.getElementById( 'measure3' ).innerHTML = data.meals[ 0 ].strMeasure3
    document.getElementById( 'measure4' ).innerHTML = data.meals[ 0 ].strMeasure4
    document.getElementById( 'measure5' ).innerHTML = data.meals[ 0 ].strMeasure5
    document.getElementById( 'measure6' ).innerHTML = data.meals[ 0 ].strMeasure6
    document.getElementById( 'measure7' ).innerHTML = data.meals[ 0 ].strMeasure7
    document.getElementById( 'measure8' ).innerHTML = data.meals[ 0 ].strMeasure8
    document.getElementById( 'measure9' ).innerHTML = data.meals[ 0 ].strMeasure9
    document.getElementById( 'measure10' ).innerHTML = data.meals[ 0 ].strMeasure10
    document.getElementById( 'instructions' ).innerHTML = data.meals[ 0 ].strInstructions
}
LatestReciepe()