const correctPassword = "1";

    function promptForPassword() {
      const enteredPassword = prompt("Please enter the password:");

      if (enteredPassword === correctPassword) {
        alert("Correct");
      } else {
        alert("Incorrect. Please try again.");
        promptForPassword();
      }
    }
    promptForPassword();