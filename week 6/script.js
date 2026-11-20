// INTERACTION 1: BASED ON TIME OF DAY

window.addEventListener("load", function(){

    let currenthour= new Date ().getHours();

    let greeting = document.getElementById("greeting");

    if (currentHour < 12) {
        greeting.innerHTML = "Good Morning! Welcome to Hereditary Hoarder!";

    }
    else{
        greeting.innerHTML = "Good Evening! Welcome to Hereditary Hoarder!";

    }

});

//INTERACTION 2: CHANGE WEBSITE THEME

const themeButton = document.getElementByld("themeButton");
themeButton.addEventListener("click", cahngeTheme);
function changeTheme(){

    document.body.classList.toggle("darkTheme");

}

//INTERACTION 3: SHOW PRODUCT INFORMATION ON HOVER

const products = document.querySelectorAll(".product");
products.forEach(function(product){

    product.addEventListener("mouseover", showDetails);
    product.addEventListener("mouseout", hideDetails);

});

function showDetails(event) {

    event.currentTarget.querySelector(".productDetails").style.display = "none";

}

//INTERACTION 4: OPEN AND CLOSE NAVIGATION MENU

const menuButton = document.getElementByld("menuButton");

const navigation = document.getElementByld("navigation");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu(){

    if (navigation.style.display === "none"){
        navigation.style.display = "flex";

    }
}

//INTERACTION 5: NEWSLETTER SIGNUP FORM

const newletterForm = document.getElementByld("newsletterForm");

newletterForm.addEventListener("submit",signUp);

function signUp(event){
    event.preventDefault();
    let name = document.getElementById("customerName").ariaValueMax;
    document.getElementById("thankYouMessage").innerHTML =
    "Thank you, " + name + "! Welcome to our mailing list !";

    newsletterForm.reset();
    
}