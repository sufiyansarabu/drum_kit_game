//we select .drum is a class 
NumberOfDrums = document.querySelectorAll(".drum").length;
//we start a loop to select all button to generate the sound and animation
for (i=0; i<NumberOfDrums ; i++){
    //click is use
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   let buttonInnerHTML =  this.innerHTML
    MakeSound(buttonInnerHTML);
    buttonanimation(buttonInnerHTML);

//when you type any key sounds generate like "S","u","f","i","y","a","n" keypress is use

    document.addEventListener("keypress", function(event){
        MakeSound(event.key)
        buttonanimation(event.key);
    })
    //using switch case to selecting the sounds

    function MakeSound(key){

        switch (key) {
            case "s":
                let crash = new Audio("sounds/crash.mp3");
                crash.play(); 
                break;
                case "u":
                    let  kick  = new Audio("sounds/kick-bass.mp3")
                    kick.play();
                    break;
                    case "f":
                        let Snare = new Audio("sounds/snare.mp3");
                        Snare.play();
                        break;
                        case "i":
                            let tom1 = new Audio("sounds/tom-1.mp3");
                            tom1.play();
                            break;
                            case "y":
                                let tom2 = new Audio("sounds/tom-2.mp3");
                                tom2.play();
                                break;
                                case "a":
                                    let tom3 = new Audio("sounds/tom-3.mp3");
                                    tom3.play();
                                    break;
                                    case "n":
                                        let tom4 = new Audio("sounds/tom-4.mp3");
                                        tom4.play();
                                        break;
            default: console.log(key);
        }
    }
    //this for make animation 
    function buttonanimation(animationkey){
        var buttonanimation = document.querySelector("." + animationkey)
        buttonanimation.classList.add("pressed")

        //animation end or timeout 1000 = 1second 

setTimeout(function(){
    buttonanimation.classList.remove("pressed");
}, 1000)

    }
  

})
}




