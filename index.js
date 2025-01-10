
//Detecting Button Press......

var numberOfDrums = document.querySelectorAll(".drum").length; //To get the number of elements with drum class
for (var i = 0; i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}// to add event listener to all the drum class elements

function handleClick(){

    var buttoninnerhtml = this.innerHTML;
    makeSound(buttoninnerhtml);
    buttonAnimation(buttoninnerhtml);
}


//Detecting Keyboard Press.....  


document.addEventListener("keypress",function(event){
    var whichKey;
    whichKey = event.key; //to determine the key that caused event
    makeSound(whichKey);
    buttonAnimation(whichKey);
})

//Make some Sound .......

function makeSound(choiceOfKeyOButton){   //To play sound from our library
    switch(choiceOfKeyOButton){
        case "w":
            var audio1 = new Audio("./sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("./sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("./sounds/snare.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("./sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("./sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("./sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("./sounds/tom-4.mp3");
            audio7.play();
            break;   
        default:
            console.log(buttoninnerhtml);
            alert("NoSound");
            break;
    }
}

//Add Button Animation .......
function buttonAnimation(currentKeyPress){
    var activeButton = document.querySelector("."+currentKeyPress);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")},100);

}
