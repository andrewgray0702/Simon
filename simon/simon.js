var pattern=[];
var clicked=[];
var gameCounter = 0;
var buttons = document.querySelectorAll(".buttons"); // QUERY ALL BUTTONS

function rndGenerator(){ // GENERATE RANDOM COLOR
    return Math.floor(Math.random()* 4);
}

function simonActive(){ // STARTS THE GAME
    clicked = [];
    gameCounter = 0;
        var intervalTimer = setInterval(function(){
            pattern.forEach(function(val, index){
                buttons[index].classList.add("active");
                setTimeout(function (){
                    buttons[index].classList.remove("active");
                },2000)
            })
            console.log(pattern);
            gameCounter++
            if(gameCounter==pattern.length){
                console.log("this is the if statement")
                newSimon();
                gameCounter=0;
                window.clearInterval(intervalTimer)
            }
        }, 2000)
}

function newSimon(){ // ADDS TO THE PATTERN
    setTimeout(function(){
    var index = rndGenerator();
    buttons[index].classList.add("active");
    pattern.push(index);
    setTimeout(function (){
        buttons[index].classList.remove("active");
        },2000)
}, 2000)};

newSimon();
buttons.forEach(function(val, index){ // ADD EVENT LISTENER
    val.addEventListener('mousedown', function(){
        clicked.push(index);
        this.classList.add('active');
    })
        val.addEventListener('mouseup', function(){
            this.classList.remove('active');
            if(clicked[gameCounter] != pattern[gameCounter]){
                alert("you lose");
            } else {
                gameCounter++
                document.querySelector('#counter').innerText = "Game: " + gameCounter;
            }
            if(gameCounter == pattern.length){
                simonActive();
            }
        })
})

