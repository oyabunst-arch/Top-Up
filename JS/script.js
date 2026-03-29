// For top up 
function showPackages() {
    let selectedGame = document.getElementById("gameSelect").value;
    let allPackages = document.querySelectorAll(".packages");

    // Hide all packages
    allPackages.forEach(function(pkg) {
        pkg.style.display = "none";
    });

    // Show selected game packages
    if (selectedGame) {
        document.getElementById(selectedGame).style.display = "flex";
    }
}


// Handle Buy button click
function handleBuy(event) {
    let playerID = document.getElementById("playerID").value;

    // Check if Player ID is empty
    if (playerID.trim() === "") {
        event.preventDefault(); // stop redirect
        alert("Please enter the Player ID");
        return;
    }

    // If ID exists → allow redirect
    alert("Proceeding to payment...");
}

// for button top up
function buy(){

let playerID = document.getElementById("playerID").value;

if(playerID === ""){
alert("Enter Your Game ID");
}
else{
alert("Purchased Successfully!\nThank you for choosing us");
}

}

// form
// Target the button inside the .textDiv
const btn = document.querySelector('.textDiv button');

btn.addEventListener('click', function(e) {
    e.preventDefault(); // Stop form from reloading page
    
    const inputs = document.querySelectorAll('input[required]');
    const genders = document.getElementsByName('gender');
    let valid = true;

    // Check if fields are empty
    inputs.forEach(i => {
        if(!i.value.trim()) {
            valid = false;
            i.style.backgroundColor = "rgba(255, 77, 77, 0.1)"; // Light red tint
        } else {
            i.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; // Reset
        }
    });

    // Check radio buttons
    const isGenderSet = Array.from(genders).some(r => r.checked);

    if(!valid || !isGenderSet) {
        alert("Please complete the form correctly.");
    } else {
        alert("Success! Your top-up is being processed.");
    }
});