'use strict'

$(window).on('load', () => {

    // Turn on/off the light (DOM)
    const switchButton = document.getElementById('light-off');
    const opening = document.getElementById('opening');
    let lighton = "Great ! First, we are going to learn what is Code on demand"

    switchButton.addEventListener('click', function() {

        document.body.classList.toggle('light-off');
        //change the content and font color
        opening.innerHTML=lighton;
        opening.style.color='greenyellow';

        let currentClassName = document.body.className;

        if(currentClassName == 'light-off') {
            switchButton.innerHTML = "Turn on the light";
            
        } else {
            switchButton.innerHTML = "Turn off the light";
            opening.innerHTML="What are you doing !!! Turn it off !!!"
            opening.style.color='red';
        }
    })

    // Back to top buttom (jQuery)
    $(function() {
        var $win = $(window);
        var $backtopButton= $('.backtop-btn');
        // Show the button when over 300px from top
        $win.scroll(function() {
            if ($win.scrollTop() > 300) {
                $backtopButton.show();
            } else {
                 $backtopButton.hide();
            }
        });
        // Click the button back to top
        $backtopButton.click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 100);
        });
    });

    //Pros and cons
    //Slide down page (jQuery)
    $(document). ready (function(){
        $("#proflip").click ( function(){
        $("#propanel").slideDown("slow");
        });
    });
    $(document). ready (function(){
        $("#conflip").click ( function(){
        $("#conpanel").slideDown("slow");
        });
    });

    //Interactive example
    //E1: Get real tiem weather (AJAX)
    const weatherButton = document.getElementById('weather-btn');
    weatherButton.addEventListener('click', function() {

        var weather = new XMLHttpRequest();
        weather.open("GET", "http://api.weatherapi.com/v1/current.json?key=1752986a37804aea8b881003220504 &q=Perth&aqi=no" ,false);
        weather.send(null);
    
        var weatherdata = JSON.parse(weather.response);
    
        var curloaction = "Current Location :" + "    " + weatherdata.location.name +"<br />";
        var temp = "Current Temperature :" + "    " + weatherdata.current.temp_c + " degree" + "<br />";
        var sunny = "Current Weather :" +  "    " + weatherdata.current.condition.text+ "<br />";
    
        document.getElementById("weather").innerHTML = curloaction;
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("sunny").innerHTML = sunny;
    });

    //E2 Let's dance
    //Change playground color
    const playground = document.getElementById('playground');
    const chage_on = document.getElementById('chage-on');
    const chage_off = document.getElementById('chage-off');
    const dance_gif = document.createElement('img');
    var colInterval;
    //make a loop for chage color and add a dance gif
    chage_on.onclick = function() {   
        if (colInterval) {
            clearInterval(colInterval);
        }
        colInterval = setInterval(changeColor, 200);
        dance_gif.id = "dance-gif";
        dance_gif.src = "./images/dance.gif";
        dance_gif.style.width = "100%";
        document.getElementById("danceimg").appendChild(dance_gif);
    };
    // Stop dance and change gif to image
    chage_off.onclick = function() {   
        clearInterval(colInterval)
        dance_gif.setAttribute("src","./images/dancepic.png");
    };
    // Function: Change color randomly 
    function changeColor(){
        // Set random value to red green blue
        var r = parseInt(256 * Math.random());
        var g = parseInt(256 * Math.random());
        var b = parseInt(256 * Math.random());
        var random_color = "rgb(" + r +"," + g +"," + b + ")";
        // set background color of playground as random
        playground.style.background = random_color;
    }

    // E3: Questionaire (DOM)
    const submit_btn = document.getElementById('submit-btn');
    submit_btn.addEventListener('click', function() {

    let x = document.getElementById("best-name").value;
    let text;

    if (x=="Rick and Morty") {
        text = "Right, U are so clever!";
    } else {
        text = "Fine, Everyone has their own choice";
    }
    document.getElementById("response").innerHTML = text;

    });

    // Time Line
    // show the time line after click (jQuery)
    $ ("#timeline-btn").on("click", function (hide) {
        $("#timeline").show() ;
    });

    // Quiz (DOM)
    // three choices
    const chooseA =  document.getElementById('chooseA');
    const chooseB =  document.getElementById('chooseB');
    const chooseC =  document.getElementById('chooseC');
    const answer = document.getElementById('answer');
    const ans_pic = document.createElement('img');

    chooseA.addEventListener('click', function() {
        answer.innerHTML="Incorrect! With my help Elon become the richest man in 2022. But Elon bought some Crypto. He will lose all of his money in 2023 like me."
        answer.style.color='red';
        ans_pic.id = "ans_pic";
        ans_pic.src = "./images/Wrong.png";
        ans_pic.style.width = "300px";
        answer.appendChild(ans_pic);
    })
    chooseB.addEventListener('click', function() {
        answer.innerHTML= "Good job! Because Jeff Bezos never buy crypto."
        answer.style.color='greenyellow';
        ans_pic.id = "ans_pic";
        ans_pic.src = "./images/Correct.png";
        ans_pic.style.width = "200px";
        answer.appendChild(ans_pic);
    })
    chooseC.addEventListener('click', function() {
        answer.innerHTML="Definitely wrong! Bernard Arnault just have 159 billion Dollar."
        answer.style.color='red';
        ans_pic.id = "ans_pic";
        ans_pic.src = "./images/Wrong.png";
        ans_pic.style.width = "300px";
        answer.appendChild(ans_pic);
    })

}); 