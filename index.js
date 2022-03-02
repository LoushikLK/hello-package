#!/usr/bin/env node

// import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import readline from "readline";

// console.log(gradient.rainbow("Hello World!"));

// console.log(chalk.green("Starting app in dev mode..."));

const msg = " Hello From LK 😃";

figlet(msg, (err, data) => {
  console.log(gradient.pastel.multiline(data));
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

setTimeout(() => {
  rl.question("What is your name ? ", function (name) {
    const greet = `Fuck you ${name}`;
    figlet(greet, (err, data) => {
      console.log(gradient.pastel.multiline(data));
    });
    rl.close();
  });
}, 1000);
