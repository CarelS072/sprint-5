//Looping a triangle

for (let hash = "#"; hash.length < 8; hash += "#")
  console.log(hash);

// #
// ##
// ###
// ####
// #####
// ######
// #######


//Fizz Buzz my answer, unsure why it is not working yet.

for (let number = 1; number <= 100; number ++){
  if ((number % 3) == 0){
	console log (number, "Buzz");
    number ++;
  } else if ((number %5) == 0) {
    console.log (Fizz);
    number ++;
  } else {
    console.log (number);
    number ++;    
  }
};

/*correct answer Fizz Buzz
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
  }
*/


/* Correct answer Chess
let size = 8;

let chess = "";

for (let y = 0; y < size; y++) {
  
  for (let x = 0; x < size; x++) {
    
    if ((x + y) % 2 == 0) {
      chess += " ";
    } else {
      chess += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/
