const readLine = require('readline');

const rl = readLine.Interface({
    input:process.stdin,
    output:process.stdout
});

rl.question('what is your name ? ',(name)=>{
    console.log(`Hello ${name}`);
    rl.close();
});