// Getting the html elements
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const displayValue = document.getElementById("displayValue");

// For decrement button
decrementBtn.addEventListener("click",()=>{
    const value = Number(displayValue.innerText);

    if(value > 0){
        displayValue.innerText = value - 1;
    }
    else{
        alert("Negative values are not allowed")
    }

    // with no restriction
    // displayValue.innerText = value - 1;
});

// For increment button
incrementBtn.addEventListener("click",()=>{
    const value = Number(displayValue.innerText);

    if(value >= 10){
        alert("10+ values are not allowed");
    }
    else{
        displayValue.innerText = value + 1;
    }

    // with no restriction
    // displayValue.innerText = value + 1;
});

// For reset button
resetBtn.addEventListener("click",()=>{
    displayValue.innerText = 0;
});