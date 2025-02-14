document.addEventListener("DOMContentLoaded", function(){

    let me = document.getElementById("me");
    let letter = document.getElementById("letter");
    let imagesContainer = document.querySelector('.images');

    let position = 300; 
    let speed = 5; 

    let amplitude = 50;      
    let verticalCenter = parseFloat(getComputedStyle(letter).top); 

    function animateLetter() {
        if(position >= 600) {
            me.src = "me-1.png";
        } else {
            me.src = "me-2.png";
        }
        position += speed;

   
        let verticalOffset = Math.sin(position / 100) * amplitude; 
        let newTop = verticalCenter + verticalOffset;


        if (position > imagesContainer.offsetWidth - letter.offsetWidth - 400) {
            position = 300; 
        }

        letter.style.left = position + 'px';
        letter.style.top = newTop + 'px';

        console.log(letter.style.left );

        requestAnimationFrame(animateLetter);
    }

    animateLetter();    


});

