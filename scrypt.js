
/* Model */
var tamaCoinBalance = 100;
/* booleans er lettere */
var hunger = 0;

var thirst = 0;

var clean = true;

var petAffection = 100;
/* Veiw */
updateView();


function updateView(){
    console.log('updateView started');


    document.getElementById('app').innerHTML= /*HTML*/ `
    <div id="status"><strong id="title">Status Bar: ${tamaCoinBalance} hunger: ${hunger} thirst: ${thirst}</strong></div>
    <div id="Pet"></div>
    <button onclick="wash()">Wash your pet</button>
    <button onclick="feed()">Give Food</button>
    <button onclick="drink()">Give water</button>
    <button onclick="pet()">Pet your pet</button>
    `;
    console.log('updateView finished');
} 
/* Controls */
function pet(){ // for å banke til dyret
    console.log('pet started');    
    petAffection += 10
    console.log('all your emails are belong to us');
    updateView();
}

function feed(){ // Mating av dyret
    hunger += 10;
    petAffection += 1;
    console.log('i am become food')
    updateView();   
    
}

function wash(){ // Vasking av dyret
    clean = true;
    console.log('pet washed')
    updateView();  
}

function drink(){ // Drikke til dyret
    thirst += 10;
    petAffection += 1;
    console.log('i am become drink')
    updateView();
}






















