const fs = require("fs");
const path = require("path");
const readline = require("readline");

const algorithmDir = path.join(__dirname, "algorithms");
const algorithmFiles = fs.readdirSync(algorithmDir).filter((file) => {
  return file.endsWith(".js");
});

const algorithmExamples = algorithmFiles.map((file) => {
  const name = file.replace(".js", "");
  return { name, file };
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> "
});

function runAlgorithm() {
  console.log("Please select an algorithm to run:");
  algorithmExamples.forEach((example, index) => {
    console.log(`${index + 1}. ${example.name}`);
  });

  rl.question("> Enter your choice: ", (choice) => {
    choice = parseInt(choice);
    if (choice > 0 && choice <= algorithmExamples.length) {
      const selectedExample = algorithmExamples[choice - 1];
      const algorithmPath = path.join(algorithmDir, selectedExample.file);
      require(algorithmPath);
    } else {
      console.log("Invalid choice. Please try again.");
    }
    rl.question(
      "> Do you want to run another algorithm? (y/n) ",
      (answer) => {
        if (answer.toLowerCase() === "y") {
          runAlgorithm();
        } else {
          rl.close();
        }
        rl.historySize = 0;
      }
    );
  });
}

runAlgorithm();