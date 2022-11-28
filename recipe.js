let spaghetti = 400;
let guanciale = 250;
let eggYolks = 6;
let pecorino = 50;
let pepper = 4;

let bowl = eggYolks + pecorino; //mix egg and cheese
let pan = pepper/4; //cook pepper
pan-=pepper/4; //remove pepper from pan
bowl+=pepper/4; //add pepper to bowl with eggs and cheese
pepper-=pepper/4; //adjust new count of pepper
pan+=guanciale; //add guanciale to pan to cook
pan-=guanciale; //remove guanciale from pan
let pastaWater = 10;  // define pastawater amount
let pot = spaghetti + pastaWater; // add spaghetti to pot

let ladle = pot-4; //remove some pasta from pot in a ladle
pot-=4; //adjust pot total
pan += guanciale + ladle/3+ladle/3; //add guanciale and 2 spoons of water from the ladle to the pan to make sauce
ladle-=ladle/3+ladle/3 //adjust ladle total
pot-=spaghetti; //remove spaghetti from the pot.
pan += spaghetti; //add spaghetti to the pan.
pan += bowl; // add the bowl of cheese eggs and pepper to the pan.
bowl-=bowl; // adjust the count of ingredients in the bowl
pan += pepper; //add remaining pepper to the bowl.

//console.log('spaghetti',spaghetti,'\nguanciale',guanciale,'\neggyolks',eggYolks,'\npecorino',pecorino,'\npepper',pepper,'\nbowl',bowl,'\npan',pan,'\npot',pot,'\npastawater',pastaWater,'\nladle',ladle,'\nsauce',sauce)
console.log('Total Weight ignoring evaporation is', pan,'g');