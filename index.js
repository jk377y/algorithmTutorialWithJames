const fs = require('fs');
const path = require('path');

const algorithmDir = path.join(__dirname, 'algorithms');
const algorithmFiles = fs.readdirSync(algorithmDir).filter(file => {
  return file.endsWith('.js');
});

const algorithmExamples = algorithmFiles.map(file => {
  const name = file.replace('.js', '');
  return { name, file };
});

console.log('Please select an algorithm to run:');
algorithmExamples.forEach((example, index) => {
  console.log(`${index + 1}. ${example.name}`);
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your choice: ', (choice) => {
  choice = parseInt(choice);
  if (choice > 0 && choice <= algorithmExamples.length) {
    const selectedExample = algorithmExamples[choice - 1];
    const algorithmPath = path.join(algorithmDir, selectedExample.file);
    require(algorithmPath);
  } else {
    console.log('Invalid choice. Please try again.');
  }
  readline.close();
});