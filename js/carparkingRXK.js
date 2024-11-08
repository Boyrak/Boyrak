function link2() {
    location.href = 'https://t.me/IPA_FREE_RAK';
  }
  function link3() {
    location.href = 'https://t.me/rakmodvip';
  }
  function link4() {
    location.href = "https://t.me/RcSrAK";
  }
  function hp() {
    h5gg.clearResults();
    h5gg.searchNumber('150', "F32", "0x100000000", "0x200000000");
    h5gg.editAll("1500", "F32");
  }
  function tor() {
    h5gg.clearResults();
    h5gg.searchNumber("220", "F32", "0x100000000", "0x200000000");
    h5gg.editAll("2000", "F32");
  }
  function hp2() {
    h5gg.clearResults();
    h5gg.searchNumber("5900", 'F32', "0x100000000", "0x200000000");
    h5gg.editAll("1111", "F32");
  }
  function tor2() {
    h5gg.clearResults();
    h5gg.searchNumber("4100", "F32", "0x100000000", "0x200000000");
    h5gg.editAll("1300", "F32");
  }
  function gr() {
    h5gg.clearResults();
    h5gg.searchNumber('6', 'F32', "0x100000000", '0x200000000');
    h5gg.editAll("1000", "F32");
  }
  function s() {
    h5gg.clearResults();
    h5gg.searchNumber("0.1", "F32", "0x100000000", "0x200000000");
    h5gg.editAll("9.999999E-32", "F32");
  }
  function s2() {
    h5gg.clearResults();
    h5gg.searchNumber("0.2", "F32", "0x100000000", "0x200000000");
    h5gg.editAll("9.999999E-32", "F32");
  }
  function s3() {
    h5gg.clearResults();
    h5gg.searchNumber("0.3", "F32", "0x100000000", "0x200000000");
    h5gg.editAll("9.999999E-32", 'F32');
  }
  function s4() {
    h5gg.clearResults();
    h5gg.searchNumber("0.4", "F32", "0x100000000", "0x200000000");
    h5gg.editAll("9.999999E-32", 'F32');
  }
  function s5() {
    h5gg.clearResults();
    h5gg.searchNumber("0.5", "F32", "0x100000000", "0x200000000");
    h5gg.editAll("9.999999E-32", "F32");
  }

  function glll() {
    if (remember.checked == 0x1) {
      h5gg.clearResults();
      h5gg.searchNumber("700", "F32", "0x0", "0x200000000");
      h5gg.editAll("500168", "F32");
      h5gg.clearResults();
    } else {
      h5gg.clearResults();
      h5gg.searchNumber("500168", "F32", "0x0", "0x200000000");
      h5gg.editAll("700", "F32");
      h5gg.clearResults();
    }
  }




  function gl() {
    // Create loading alert
    var loadingAlert = document.createElement('div');
    loadingAlert.className = 'alert';

    // Create loading animation
    var loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading';
    loadingSpinner.innerHTML = '🔄'; // You can replace this with a spinner graphic if desired

    // Create loading message
    var loadingMessage = document.createElement('strong');
    loadingMessage.innerHTML = 'Loading...';

    // Append elements to the loading alert
    loadingAlert.appendChild(loadingSpinner);
    loadingAlert.appendChild(loadingMessage);

    // Append the loading alert to the body
    document.body.appendChild(loadingAlert);

    // Center the loading alert
    loadingAlert.style.position = 'fixed';
    loadingAlert.style.top = '50%';
    loadingAlert.style.left = '50%';
    loadingAlert.style.transform = 'translate(-50%, -50%)';

    // Delay the execution of h5gg operations by 2 seconds
    setTimeout(function() {
        h5gg.clearResults();
        h5gg.searchNumber("150", "F32", "0x100000000", "0x200000000");
        h5gg.editAll("1695", "F32");
        h5gg.clearResults();
        h5gg.searchNumber("220", "F32", "0x100000000", "0x200000000");
        h5gg.editAll("2000", "F32");
        h5gg.clearResults();
        h5gg.searchNumber("5900", "F32", "0x100000000", "0x200000000");
        h5gg.editAll("1111", "F32");
        h5gg.clearResults();
        h5gg.searchNumber("4100", "F32", "0x100000000", "0x200000000");
        h5gg.editAll("1300", "F32");

        // Show success alert
        alert("Success! Operations completed.");

        // Once the gl function is finished, remove the loading alert
        removeLoadingAlert();
    }, 2000); // 2000 milliseconds = 2 seconds
}

function removeLoadingAlert() {
    var alerts = document.getElementsByClassName('alert');
    while (alerts.length > 0) {
        alerts[0].parentNode.removeChild(alerts[0]);
    }
}


function addStyles() {
    const styles = `
        .alert {
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 5px;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.5s;
        }

        .closebtn {
            margin-left: 15px;
            cursor: pointer;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .loading {
            animation: spin 1s linear infinite;
            margin-right: 10px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

// Call the function to add the styles to the document
addStyles();








function showAlert(message) {
    var alertBox = document.createElement('div');
    alertBox.className = 'alert3';

    var messageHeading = document.createElement('h2');
    messageHeading.textContent = 'KEY';
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

    // Create Telegram button
    var telegramButton = document.createElement('button');
    telegramButton.className = 'btn';
    telegramButton.textContent = 'Telegram';
    telegramButton.onclick = function() {
        window.open('https://t.me/RcSrAK', '_blank'); // Replace with your Telegram username
    };
    buttonContainer.appendChild(telegramButton);

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

    // Create Telegram button
    var telegramButton = document.createElement('button');
    telegramButton.className = 'prompt-button';
    telegramButton.textContent = 'Telegram';
    telegramButton.onclick = function() {
        window.open('https://t.me/RcSrAK', '_blank'); // Replace with your Telegram username
    };
    promptBox.appendChild(telegramButton);

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
        var passwordData = [
            { value: "bLDWPPizlkwK", created: new Date(), expirationDate: new Date("2024-06-03T16:00:00"), expired: false },
            { value: "RAK24", created: new Date(), expirationDate: new Date("2024-11-28"), expired: false },
            { value: "JS5AR", created: new Date(), expirationDate: new Date("2024-12-29"), expired: false },
            { value: "4", created: new Date(), expirationDate: null, expired: false },
            { value: "5", created: new Date(), expirationDate: new Date("2024-05-05"), expired: false },
            { value: "20", created: new Date(), expirationDate: new Date("2024-05-01"), expired: false },
            { value: "gkkRcpFuYXMZVzGG", created: new Date(), expirationDate: new Date("2024-05-30"), expired: false },
            { value: "tAymaeOPjara", created: new Date(), expirationDate: new Date("2024-06-04T19:00:00"), expired: false },
            { value: "EOKsbveQRjjq", created: new Date(), expirationDate: new Date("2024-06-07T16:00:00"), expired: false },
            { value: "yfOetJtpWPPx", created: new Date(), expirationDate: new Date("2024-06-08T12:00:00"), expired: false },
            { value: "mhHKZtoDSWdN", created: new Date(), expirationDate: new Date("2024-06-12T12:00:00"), expired: false },
            { value: "fzJeOkXEfqQYRrDYkUwDplpZdyMyCKwO", created: new Date(), expirationDate: new Date("2024-06-14T12:00:00"), expired: false },
            { value: "043", created: new Date(), expirationDate: new Date("2024-11-28"), expired: false },
            { value: "VXV", created: new Date(), expirationDate: new Date("2024-10-27"), expired: false },


        ];
        var correctPassword = passwordData.find(pass => pass.value === savedPassword);

        if (correctPassword) {
            if (correctPassword.expired || (correctPassword.expirationDate && new Date() > correctPassword.expirationDate)) {
                showAlert("Key has expired. ធ្ធ្វើការឧបត្ថម្ភមកកាន់ @RcSrAK តាមទឹកចិត្តដើម្បីទទួលបាន Key");
                localStorage.removeItem("savedPassword");
                return showPrompt("ធ្វើការឧបត្ថម្ភមកកាន់ @RcSrAK តាមទឹកចិត្តដើម្បីទទួលបាន Key", function(password) {
                    validatePassword(password);
                    showPrompt("សូមចូលរួមធ្វើការឧបត្ថម្ភដើម្បី ទទួលបាន Key និងដើម្បីលើកទឹកចិត្តម្ចាស់ Mod អោយ Update Version ថ្មីៗបន្ត", function(question) {
                        
                    });
                });
            }

            // Automatically save the password
            // showAlert("Password correct.");
        } else {
            showAlert("Incorrect Key. ធ្វើការឧបត្ថម្ភមកកាន់ @RcSrAK តាមទឹកចិត្តដើម្បីទទួលបាន Key");
            return showPrompt("ធ្ធ្វើការឧបត្ថម្ភមកកាន់ @RcSrAK តាមទឹកចិត្តដើម្បីទទួលបាន Key", function(password) {
                validatePassword(password);
                showPrompt("សូមចូលរួមធ្វើការឧបត្ថម្ភដើម្បី ទទួលបាន Key និងដើម្បីលើកទឹកចិត្តម្ចាស់ Mod អោយ Update Version ថ្មីៗបន្ត", function(question) {
                    
                });
            });
        }
    } else {
        return showPrompt("ធ្ធ្វើការឧបត្ថម្ភមកកាន់ @RcSrAK តាមទឹកចិត្តដើម្បីទទួលបាន Key", function(password) {
            validatePassword(password);
            showPrompt("សូមចូលរួមធ្វើការឧបត្ថម្ភដើម្បី ទទួលបាន Key និងដើម្បីលើកទឹកចិត្តម្ចាស់ Mod អោយ Update Version ថ្មីៗបន្ត", function(question) {
               
            });
        });
    }
}

function validatePassword(password) {
    var passwordData = [
        { value: "bLDWPPizlkwK", created: new Date(), expirationDate: new Date("2024-06-03T16:00:00"), expired: false },
        { value: "RAK24", created: new Date(), expirationDate: new Date("2024-11-28"), expired: false },
        { value: "JS5AR", created: new Date(), expirationDate: new Date("2024-12-29"), expired: false },
        { value: "4", created: new Date(), expirationDate: null, expired: false },
        { value: "5", created: new Date(), expirationDate: new Date("2024-05-02T19:00:00"), expired: false },
        { value: "20", created: new Date(), expirationDate: new Date("2024-05-01"), expired: false },
        { value: "gkkRcpFuYXMZVzGG", created: new Date(), expirationDate: new Date("2024-05-30"), expired: false },
        { value: "tAymaeOPjara", created: new Date(), expirationDate: new Date("2024-06-04T19:00:00"), expired: false },
        { value: "EOKsbveQRjjq", created: new Date(), expirationDate: new Date("2024-06-07T16:00:00"), expired: false },
        { value: "yfOetJtpWPPx", created: new Date(), expirationDate: new Date("2024-06-08T12: 00:00"), expired: false },
        { value: "mhHKZtoDSWdN", created: new Date(), expirationDate: new Date("2024-06-12T12:00:00"), expired: false },
        { value: "fzJeOkXEfqQYRrDYkUwDplpZdyMyCKwO", created: new Date(), expirationDate: new Date("2024-06-14T12:00:00"), expired: false },
        { value: "043", created: new Date(), expirationDate: new Date("2024-11-28"), expired: false },
        { value: "VXV", created: new Date(), expirationDate: new Date("2024-10-27"), expired: false },


    ];

    var correctPassword = passwordData.find(pass => pass.value === password);

    if (correctPassword) {
        if (correctPassword.expired || (correctPassword.expirationDate && new Date() > correctPassword.expirationDate)) {
            showAlert("Key has expired. ធ្វើការឧបត្ថម្ភមកកាន់ @RcSrAK តាមទឹកចិត្តដើម្បីទទួលបាន Key");
            localStorage.removeItem("savedPassword");
            checkPassword(); // Prompt again
            return;
        }

        // Automatically save the password
        localStorage.setItem("savedPassword", password);
        // showAlert("Key saved.");
        // showAlert("Key correct.");
    } else {
        showAlert("Incorrect Key. ធ្វើការឧបត្ថម្ភមកកាន់ @RcSrAK តាមទឹកចិត្តដើម្បីទទួលបាន Key");
        checkPassword();
    }
}

// Call the function to start
checkPassword();

// Check password expiration every 24 hours
setInterval(function() {
    var savedPassword = localStorage.getItem("savedPassword");

    if (savedPassword) {
        var passwordData = [
            { value: "bLDWPPizlkwK", created: new Date(), expirationDate: new Date("2024-06-03T16:00:00"), expired: false },
            { value: "RAK24", created: new Date(), expirationDate: new Date("2024-11-28"), expired: false },
            { value: "JS5AR", created: new Date(), expirationDate: new Date("2024-12-29"), expired: false },
            { value: "4", created: new Date(), expirationDate: null, expired: false },
            { value: "5", created: new Date(), expirationDate: new Date("2024-05-02T19:00:00"), expired: false },
            { value: "20", created: new Date(), expirationDate: new Date("2024-05-01"), expired: false },
            { value: "gkkRcpFuYXMZVzGG", created: new Date(), expirationDate: new Date("2024-05-30"), expired: false },
            { value: "tAymaeOPjara", created: new Date(), expirationDate: new Date("2024-06-04T19:00:00"), expired: false },
            { value: "EOKsbveQRjjq", created: new Date(), expirationDate: new Date("2024-06-07T16:00:00"), expired: false },
            { value: "yfOetJtpWPPx", created: new Date(), expirationDate: new Date("2024-06-08T12:00:00"), expired: false },
            { value: "mhHKZtoDSWdN", created: new Date(), expirationDate: new Date("2024-06-12T12:00:00"), expired: false },
            { value: "fzJeOkXEfqQYRrDYkUwDplpZdyMyCKwO", created: new Date(), expirationDate: new Date("2024-06-14T12:00:00"), expired: false },
            { value: "043", created: new Date(), expirationDate: new Date("2024-11-28"), expired: false },
            { value: "VXV", created: new Date(), expirationDate: new Date("2024-10-27"), expired: false },


        ];

        var correctPassword = passwordData.find(pass => pass.value === savedPassword);

        if (correctPassword && correctPassword.expirationDate && new Date() > correctPassword.expirationDate) {
            showAlert("Key has expired. ធ្វើការឧបត្ថម្ភមកកាន់ @RcSrAK តាមទឹកចិត្តដើម្បីទទួលបាន Key");
            localStorage.removeItem("savedPassword");
        }
    }
}, 100); // 24 hours in milliseconds

