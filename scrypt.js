
/* Model */
var tamaCoinBalance = 100;
/* booleans er lettere */
var hunger = 0;

var thirst = 0;

var clean = true;

var petAffection = 10;

/* Veiw */
updateView();


function updateView(){
    console.log('اupdateView started');


    
    document.getElementById('app').innerHTML = `<img class="my_tama"src="https://media.tenor.com/Br7nM85ym6oAAAAC/tamagotchi-bandai.gif" alt"TAMA_ERR">`;
    
    document.getElementById('app').innerHTML+= /*HTML*/ `
    <div id="status"><strong id="title">Status Bar: TMC balance ${tamaCoinBalance} Hunger: ${hunger} Thirst: ${thirst} Affection: ${petAffection}</strong></div>
    <div id="Pet"></div>
    <button onclick="wash()">Wash your pet</button>
    <button onclick="feed()">Give Food</button>
    <button onclick="drink()">Give water</button>
    <button onclick="pet()">Pet your pet</button>
    <button onclick="Play()">Play with pet</button>
    <button onclick="Sleep()">Sleep</button>
    <button onclick="buyTamaCoin()">Buy Tama Coins</button>`;
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
    if (hunger <= 100){
        hunger +=10;
        petAffection +=1;}
        else if (hunger >=100) {
            hunger -=0;
            petAffection -=0;
        }
    console.log('i am become food')
    updateView();   
    
}

function wash(){ // Vasking av dyret
    clean = true;
    console.log('pet washed')
    updateView();  
}

function drink(){ // Drikke til dyret
    //thirst += 10;
    //petAffection += 1;
    console.log('i am become drink')
    if (thirst <= 100){
    thirst +=10;
    petAffection +=1;}
    else if (thirst >=100) {
        thirst -=0;
        petAffection -=0;
    }
    updateView();
}

function Play(){
    petAffection += 40;
    alert('me playing is fun pls more play or me is running from slave master')
    updateView();
}

function Sleep(){ // for at dyret skal sove
    thirst -=20
    hunger -=20
    updateView();
}

function buyTamaCoin(){ // microtransaction
    alert('enter your credit card details')
}































