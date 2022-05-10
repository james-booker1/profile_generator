const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? ', (answer1) => {
  rl.question('Whats an activity you like to do? ', (answer2) => {
    rl.question('What do you listen to while you do that? ', (answer3) => {
      rl.question('Which meal is your favourite? ', (answer4) => {
        rl.question('Which sport is your favourite? ', (answer5) => {
          rl.question('What is your superpower? ', (answer6) => {
            console.log(`This is ${answer1} they like to ${answer2} While they do this they listen to ${answer3}. Their favourtie meal is ${answer4}
thier most liked sport is ${answer5} and their superpower is ${answer6}.`)
rl.close();
          })
        })
      })
    })
  })
});



  



