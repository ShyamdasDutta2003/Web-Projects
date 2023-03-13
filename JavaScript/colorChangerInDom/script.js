const btn = document.getElementById("button");
const randomColor = () => {
    let val = "01234567889ABCDEF";              // Here we are supposed to take random values of 6 digits from this 16 digit string and to concatenate with #
    let cons = "#";

    for (let i = 0; i < 6; i++){
        cons += val[Math.floor(Math.random() * 16)];          // Math.random is a function that will give us random values from the above string, but there is a problem in it. 
    }                                                       // Math.random provides values from 0 to 0.99 and hence it is unable to cover all the 16 values from the string (upto 15)
    return cons;                                            // To solve this problem we will simply multiply this with 16 and eventually it will cover whole 16 values from our string
}                                                           // And Math.floor will erase any floating digit and will make the result a complete number 

// Now to actually change the bg color with this function we need another function to implement this
function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);