// Set the date we're counting down to
var countDownDate = new Date("July 15, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + " : " + hours + " : " 
    + minutes + " : " + seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Vacation Time!";
    }
}, 1000);

// Array of background image paths in your local 'images' folder
const imageUrls = [
    'backgrounds/1.jpg',  
    'backgrounds/2.jpg',
    'backgrounds/3.jpg',
    'backgrounds/4.jpg',
    'backgrounds/5.jpg',
    'backgrounds/6.jpg',
    'backgrounds/7.jpg',
    'backgrounds/8.jpg',
    'backgrounds/9.jpg',
    'backgrounds/10.jpg',
    'backgrounds/11.jpg',
    'backgrounds/12.jpg',
    'backgrounds/16.jpg',
    'backgrounds/17.jpg',
    'backgrounds/18.jpg',
    'backgrounds/19.jpg',
    'backgrounds/20.jpg',
    'backgrounds/21.jpg',
    'backgrounds/22.jpg',
    'backgrounds/23.jpg',
    'backgrounds/24.jpg',
    'backgrounds/25.jpg',
    'backgrounds/26.jpg',
    'backgrounds/27.jpg',
    'backgrounds/28.jpg',
];

let index = 0;
const images = [];

// Preload images
imageUrls.forEach((src) => {
    const img = new Image();
    img.src = src;
    images.push(img);
});

function changeBackground() {
    const backgroundElement = document.getElementById('background');
    backgroundElement.style.backgroundImage = `url(${imageUrls[index]})`;
    index = (index + 1) % imageUrls.length;
}

// Initial call and interval setup
changeBackground();
setInterval(changeBackground, 5000);
