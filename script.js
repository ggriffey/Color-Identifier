const API_URL = "https://www.thecolorapi.com/id";

// User is prompted for a color (hex). 
/* On submit/enter, check if correct color (only contain 0 - F,  
six digits long) */
// ask the API to return the name of that color
// display color and name on screen 

let saved;
let color;
let form = document.querySelector('form');
    

let gatherColor = () => {
    let response = document.getElementById('chosencolor').value;
    if (isValidColor(response)) { 
            color = response;
            document.querySelector("div").textContent = "";
        }
    else { 
        document.querySelector("div").textContent = 
        "invalid color format! try again";
    }
    form.reset();
}

let updatePage = () => {
    fetch(`https://www.thecolorapi.com/id?hex=${color}`)
        .then(response => response.json())
        .then(data => saved = data)
    
    setTimeout(() => {
        document.querySelector('h1').textContent = saved['name']['value'] + ` (#${color.toUpperCase()})`;
        document.querySelector("p").style.backgroundColor = saved['hex']['value'];
    }, 100);
}

let isValidColor = (res) => {
    if (res.length == 6) {
        let allowed = "abcdef0123456789";
        for (let i = 0; i < res.length; i++) {
            if (!allowed.includes(res[i])) {
                return false 
            }
        }
        return true;
    }
}

let clickFunction = () => {
    gatherColor();
    updatePage();
}

let button = document.getElementById('button');
button.addEventListener('click', clickFunction);
form.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        console.log('enter pressed');
        clickFunction();
    }
})

form.addEventListener('submit', (event) => {
        event.preventDefault();
}); 



// DONE stop doing shit when we first load the site
// DONE call the API only when user has clicked show me (or enter)
// DONE add event listener for Enter which does the same shit as 
    // clicking the button
// DONE check if hex format is correct
    // if not, display error message
// if so, THEN run