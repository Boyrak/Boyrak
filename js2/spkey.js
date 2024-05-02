// Define a global error handler
window.onerror = function(message, source, lineno, colno, error) {
    // Construct the error message
    var errorMessage = "An error occurred:\n\n";
    errorMessage += "Message: " + message + "\n";
    errorMessage += "Source: " + source + "\n";
    errorMessage += "Line Number: " + lineno + "\n";
    errorMessage += "Column Number: " + colno + "\n";
  
    // Alert the error message
    alert(errorMessage);
   // Set an interval to alert every 1000 milliseconds (1 second)
              setInterval(function() {
                  var now = new Date();
                  var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                  
                    
  var message = "Key not load " + time ;
  var alertBox = document.createElement('div');
  alertBox.className = 'alert2';
  
  // Create the close button
  var closeButton = document.createElement('span');
  closeButton.className = 'closebtn';
  closeButton.innerHTML = '&times;';
  closeButton.onclick = function() {
      alertBox.style.display = 'none';
  };
  
  // Create the message
  var messageNode = document.createElement('strong');
  messageNode.innerHTML = message + ' ';
  
  // Create the Telegram button
  
  // Append elements to the alert box
  alertBox.appendChild(closeButton);
  alertBox.appendChild(messageNode);
  
  
  // Append the alert box to the body
  document.body.appendChild(alertBox);
  
  // Center the alert box
  alertBox.style.position = 'fixed';
  alertBox.style.top = '50%';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translate(-50%, -50%)';
  
              }, 100);
    // Optionally, log the error for further investigation
    console.error(error);
  };
  
  // Your Vue.js application code goes here
  var app = new Vue({
    el: "#app",
    data() {
      return {
        password: localStorage.getItem("savedPassword") || "",
        passwordData: [
          { value: "1", created: new Date(), expirationDate: new Date("2024-04-29"), expired: false },
          { value: "2", created: new Date(), expirationDate: new Date("2024-04-28"), expired: false },
          { value: "3", created: new Date(), expirationDate: new Date("2024-04-29"), expired: false },
          { value: "4", created: new Date(), expirationDate: null, expired: false },
          { value: "5", created: new Date(), expirationDate: null, expired: false },
          { value: "20", created: new Date(), expirationDate: new Date("2024-05-01"), expired: false },
          { value: "gkkRcpFuYXMZVzGG", created: new Date(), expirationDate: new Date("2024-05-30"), expired: false },
        ],
        isPasswordCorrect: false,
        linkToCopy: 'https://t.me/RcSrAK',
        maxAttempts: 3,
        currentAttempt: 0,
        tabValue: "one",
      }
    },
    methods: {
      checkPassword() {
        try {
          let correctPassword = this.passwordData.find(pass => pass.value === this.password);
  
          if (correctPassword) {
            if (correctPassword.expired || (correctPassword.expirationDate && new Date() > correctPassword.expirationDate)) {
              alert("Password has expired.");
              return;
            }
  
            this.isPasswordCorrect = true;
            localStorage.setItem("savedPassword", this.password);
            this.password = ""; // Clear the entered password
          } else {
            this.currentAttempt++;
            if (this.currentAttempt >= this.maxAttempts) {
              alert("Too many attempts. Please try again later.");
            } else {
              alert("Incorrect password. Please try again.");
            }
          }
        } catch (error) {
          // If an error occurs within the try block, it will be caught here
          // Since we don't know the specific line, just alert the generic error
          alert("An error occurred. Please try again or contact support.");
          console.error(error);
        }
      },
      copyLink() {
        try {
          var tempInput = document.createElement("input");
          tempInput.value = this.linkToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);
  
          alert("Link has been copied to clipboard!");
        } catch (error) {
          alert("An error occurred. Please try again or contact support.");
          console.error(error);
        }
      },
      changeTab(tabName) {
        this.tabValue = tabName;
      }
    }
  });
  
