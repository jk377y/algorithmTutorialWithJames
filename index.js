const fs = require('fs');
const path = require('path');

// Get the list of javascript files in the /algorithm directory
const algorithmDir = path.join(__dirname, 'algorithms');
const algorithmFiles = fs.readdirSync(algorithmDir).filter(file => {
  return file.endsWith('.js');
});

// Generate the algorithmExamples array from the algorithmFiles list
const algorithmExamples = algorithmFiles.map(file => {
  const name = file.replace('.js', '');
  return { name, file };
});

// Display the algorithm examples menu
console.log('Please select an algorithm to run:');
algorithmExamples.forEach((example, index) => {
  console.log(`${index + 1}. ${example.name}`);
});

// Wait for user input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your choice: ', (choice) => {
  // Parse user input as an integer
  choice = parseInt(choice);

  // If the user entered a valid choice, execute the corresponding javascript file
  if (choice > 0 && choice <= algorithmExamples.length) {
    const selectedExample = algorithmExamples[choice - 1];
    const algorithmPath = path.join(algorithmDir, selectedExample.file);
    require(algorithmPath);
  } else {
    console.log('Invalid choice. Please try again.');
  }

  // Close the readline interface
  readline.close();
});