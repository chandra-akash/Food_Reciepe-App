let result_div = document.getElementById( "foodsResult" );

function throttleFunction ()
{
    document.getElementById( 'searchLogo' ).src = 'https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg';
    main();
    if ( document.getElementById( 'query' ).value == "" )
    {
        document.getElementById( "foodsResult" ).style.display = 'none';
        document.getElementById( 'searchLogo' ).src = 'https://w7.pngwing.com/pngs/440/211/png-transparent-computer-icons-font-awesome-google-search-logo-web-search-engine-magnifying-glass-bing-logo-vector-icons.png';
        console.log( 'blank field' );
    }
}

async function main ()
{
    let foodQuery = await searchDetails();
    console.log( "foodQuery:", foodQuery );
    displayResults( foodQuery );
}

function displayResults ( foods )
{
    result_div.innerHTML = null;
    document.getElementById( "foodsResult" ).style.display = 'block';
    foods.forEach( ( { strMeal, strMealThumb, strYoutube, strCategory, strArea, strTags, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strInstructions } ) =>
    {
        console.log( "Reciepe name:", strMeal );

        // dynamic result showing
        let divResult = document.createElement( "div" );
        divResult.className = "searchResults";

        let divInfo = document.createElement( "div" );
        divInfo.className = "searchInfo";
        divInfo.innerHTML = strMeal;
        console.log( "divInfo", divInfo );

        divResult.append( divInfo );
        console.log( "divResult", divResult );

        result_div.append( divResult );

        divInfo.onmouseover = function () { mouseOver() };
        divInfo.onmouseout = function () { mouseOut() };
        function mouseOver ()
        {
            divInfo.style.color = "#adf802";
        }
        function mouseOut ()
        {
            divInfo.style.color = "white";
        }

        divInfo.onclick = function () { showReciepeDetails( strMeal, strMealThumb, strYoutube, strCategory, strArea, strTags, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strInstructions ) };

        if ( document.getElementById( 'query' ).value != "" )
        {
            document.getElementById( "foodsResult" ).style.transition = 'max-height 5s';
            document.getElementById( 'searchLogo' ).src = 'https://w7.pngwing.com/pngs/440/211/png-transparent-computer-icons-font-awesome-google-search-logo-web-search-engine-magnifying-glass-bing-logo-vector-icons.png';
        }
    } );
}

async function searchDetails ()
{
    let search = document.getElementById( "query" ).value;
    let res = await fetch( `https://www.themealdb.com/api/json/v1/1/search.php?f=${ search }` );
    let data = await res.json();

    console.log( 'data: ', data );

    return data.meals;
}


function showReciepeDetails ( strMeal, strMealThumb, strYoutube, strCategory, strArea, strTags, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strInstructions )
{

    document.getElementById( 'img' ).src = strMealThumb
    document.getElementById( 'img' ).onclick = function () { myFunction() };

    function myFunction ()
    {
        window.location.replace( strYoutube )
    }
    document.getElementById( 'title' ).innerHTML = strMeal
    document.getElementById( 'category' ).innerHTML = strCategory
    document.getElementById( 'cuisine' ).innerHTML = strArea
    document.getElementById( 'type' ).innerHTML = strTags
    document.getElementById( 'ingredient1' ).innerHTML = strIngredient1
    document.getElementById( 'ingredient2' ).innerHTML = strIngredient2
    document.getElementById( 'ingredient3' ).innerHTML = strIngredient3
    document.getElementById( 'ingredient4' ).innerHTML = strIngredient4
    document.getElementById( 'ingredient5' ).innerHTML = strIngredient5
    document.getElementById( 'ingredient6' ).innerHTML = strIngredient6
    document.getElementById( 'ingredient7' ).innerHTML = strIngredient7
    document.getElementById( 'ingredient8' ).innerHTML = strIngredient8
    document.getElementById( 'ingredient9' ).innerHTML = strIngredient9
    document.getElementById( 'ingredient10' ).innerHTML = strIngredient10
    document.getElementById( 'measure1' ).innerHTML = strMeasure1
    document.getElementById( 'measure2' ).innerHTML = strMeasure2
    document.getElementById( 'measure3' ).innerHTML = strMeasure3
    document.getElementById( 'measure4' ).innerHTML = strMeasure4
    document.getElementById( 'measure5' ).innerHTML = strMeasure5
    document.getElementById( 'measure6' ).innerHTML = strMeasure6
    document.getElementById( 'measure7' ).innerHTML = strMeasure7
    document.getElementById( 'measure8' ).innerHTML = strMeasure8
    document.getElementById( 'measure9' ).innerHTML = strMeasure9
    document.getElementById( 'measure10' ).innerHTML = strMeasure10
    document.getElementById( 'instructions' ).innerHTML = strInstructions

    document.getElementById( 'searchDetails' ).style.display = 'block'
}
// SearchReciepe()