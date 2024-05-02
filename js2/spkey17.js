
function showAlert(message) {
    var alertBox = document.createElement('div');
    alertBox.className = 'alert';
  
    var messageHeading = document.createElement('h2');
    messageHeading.textContent = 'Password';
    alertBox.appendChild(messageHeading);
  
    var messageParagraph = document.createElement('p');
    messageParagraph.textContent = message;
    alertBox.appendChild(messageParagraph);
  
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'btn-container';
  
    var okButton = document.createElement('button');
    okButton.className = 'btn';
    okButton.textContent = 'OK';
    okButton.onclick = function() {
      document.body.removeChild(alertBox);
    };
    buttonContainer.appendChild(okButton);
  
    alertBox.appendChild(buttonContainer);
  
    document.body.appendChild(alertBox);
  }
  function showPrompt(message, callback) {
  var promptContainer = document.createElement('div');
  promptContainer.className = 'prompt-container';
  
  var promptBox = document.createElement('div');
  promptBox.className = 'prompt-box';

  var promptMessage = document.createElement('div');
  promptMessage.className = 'prompt-message';
  promptMessage.textContent = message;
  promptBox.appendChild(promptMessage);

  var promptInput = document.createElement('input');
  promptInput.className = 'prompt-input';
  promptInput.type = 'text';
  promptBox.appendChild(promptInput);

  var okButton = document.createElement('button');
  okButton.className = 'prompt-button';
  okButton.textContent = 'OK';
  okButton.onclick = function() {
    var value = promptInput.value.trim();
    if (value !== '') {
      document.body.removeChild(promptContainer);
      callback(value);
    }
  };
  promptBox.appendChild(okButton);

  promptContainer.appendChild(promptBox);
  document.body.appendChild(promptContainer);
}
function showConfirm(message, callback) {
  var confirmOverlay = document.createElement('div');
  confirmOverlay.className = 'confirm-overlay';
  
  var confirmBox = document.createElement('div');
  confirmBox.className = 'confirm-box';

  var confirmMessage = document.createElement('div');
  confirmMessage.className = 'confirm-message';
  confirmMessage.textContent = message;
  confirmBox.appendChild(confirmMessage);

  var confirmButtons = document.createElement('div');
  confirmButtons.className = 'confirm-buttons';

  var cancelButton = document.createElement('button');
  cancelButton.className = 'confirm-button';
  cancelButton.textContent = 'Cancel';
  cancelButton.onclick = function() {
    document.body.removeChild(confirmOverlay);
    callback(false);
  };
  confirmButtons.appendChild(cancelButton);
  
  var okButton = document.createElement('button');
  okButton.className = 'confirm-button';
  okButton.textContent = 'OK';
  okButton.onclick = function() {
    document.body.removeChild(confirmOverlay);
    callback(true);
  };
  confirmButtons.appendChild(okButton);

  confirmBox.appendChild(confirmButtons);

  confirmOverlay.appendChild(confirmBox);
  document.body.appendChild(confirmOverlay);
}
function checkPassword() {
  var savedPassword = localStorage.getItem("savedPassword");

  if (savedPassword) {
    showConfirm("Password saved : " + savedPassword + "\nDo you want to reset the password?", function(reset) {
      if (reset) {
        localStorage.removeItem("savedPassword");
        showPrompt("Please enter the password again:", function(password) {
          validatePassword(password);
        });
      }
    });
    return;
  }

  showPrompt("Please enter the password:", function(password) {
    validatePassword(password);
  });
}

function validatePassword(password) {
  var passwordData = [
    { value: "1", created: new Date(), expirationDate: new Date("2024-04-29"), expired: false },
    { value: "2", created: new Date(), expirationDate: new Date("2024-04-28"), expired: false },
    { value: "3", created: new Date(), expirationDate: new Date("2024-04-29"), expired: false },
    { value: "4", created: new Date(), expirationDate: null, expired: false },
    { value: "5", created: new Date(), expirationDate: null, expired: false },
    { value: "20", created: new Date(), expirationDate: new Date("2024-05-01"), expired: false },
    { value: "gkkRcpFuYXMZVzGG", created: new Date(), expirationDate: new Date("2024-05-30"), expired: false }
  ];

  var correctPassword = passwordData.find(pass => pass.value === password);

  if (correctPassword) {
    if (correctPassword.expired || (correctPassword.expirationDate && new Date() > correctPassword.expirationDate)) {
      showAlert("Password has expired. Please try again.");
      checkPassword(); // Prompt again
      return;
    }

    // Automatically save the password
    localStorage.setItem("savedPassword", password);
    showAlert("Password saved.");
    showAlert("Password correct.");
  } else {
    showAlert("Incorrect password. Please try again.");
    checkPassword();
  }
}

// Call the function to start
checkPassword();