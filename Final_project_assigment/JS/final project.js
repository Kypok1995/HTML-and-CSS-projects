function openForm(){
    document.getElementById('myForm').style.display="block"; // to make form visible
}

function closeForm(){
    document.getElementById('myForm').style.display="none"; // to hide form
}

var slideIndex = 1;
showSlides(slideIndex); //to display first image than webpage loaded

function plusSlides(n){
    showSlides(slideIndex +=n);//change a slides than left or right button clicked
}

function currentSlide(n){
    showSlides(slideIndex = n);//change a slide than dots are clicked
}

function showSlides(n){
    var slides = document.getElementsByClassName('mySlides'); //to take all slides and store them into variable
    var dots = document.getElementsByClassName('dot');//to store all dots in one array
    if(n > slides.length) {slideIndex=1} //if number passed to function is greater than amunt of slides will be shpwn 1st slide
    if(n < 1)(slideIndex = slides.length) //if number passed is less than 0, will be shown last slide
    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none";//hide of all slides besides current
    }

    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");//remove active styling for the dot
    }

    slides[slideIndex-1].style.display = "block"// to display an image
    dots[slideIndex-1].className +=" active"; //active styling for the dot associated with image
}

document.addEventListener('click', function(event){ //add event listener for every click on site
    if(event.target.matches(" cancel") ||  
    !event.target.closest(".form-popup") && !event.target.closest("Pop_up_button") && !event.target.closest(".contact")){ 
        closeForm(); //if user clicks on some of this buttons, form closed
    }
}, false);// in any other situations nothing happenned








