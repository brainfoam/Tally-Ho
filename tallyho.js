let storage_id = "tallyho_count"; //Set the local storage ID key

let counter_text = document.getElementById("counter_text"); //Get the counter text from the HTML
let tally = -1; //Tally is -1 by default (pre-load)

LoadTally(); //Load the previous tally from local storage

//Add event listeners to the buttons
document.querySelector("#counter_subtract").addEventListener("click", function(){Tally(-1);}, false);
document.querySelector("#counter_reset").addEventListener("click", Reset);
document.querySelector("#counter_add").addEventListener("click", function(){Tally(1);}, false);

//Adds a certain amount to the tally
function Tally(amt) 
{
    tally += amt;
    SetTally(tally);
    SaveTally();
}

//Resets the tally
function Reset()
{
    tally = 0;
    SetTally(0);
    SaveTally();
}

//Sets the tally, in HTML form
function SetTally(t)
{
    counter_text.innerHTML = t;
}

//Save the tally to local storage
function SaveTally()
{
    localStorage.setItem("tallyho_count", tally.toString())
}

//Load the tally from local storage
function LoadTally()
{
    if(localStorage.getItem("tallyho_count") === null)
        tally = 0;
    else
        tally = parseInt(localStorage.getItem("tallyho_count"));
    SetTally(tally);
}