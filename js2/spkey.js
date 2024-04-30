


















































































































































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
          { value: "gkkRcpFuYXMZVzGG", created: new Date(), expirationDate: new Date("2024-05-01"), expired: false },
        
       
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
        let correctPassword = this.passwordData.find(pass => pass.value === this.password);

        if (correctPassword) {
          if (correctPassword.expired || (correctPassword.expirationDate && new Date() > correctPassword.expirationDate)) {
          
var message = "password has expired.";
var telegramLink = "https://t.me/RcSrAK";

var alertBox = document.createElement('div');
alertBox.className = 'alert';

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
var telegramButton = document.createElement('a');
telegramButton.href = telegramLink;
telegramButton.target = '_blank';
telegramButton.className = 'telegram-btn';
telegramButton.innerHTML = 'Send Message';

// Append elements to the alert box
alertBox.appendChild(closeButton);
alertBox.appendChild(messageNode);
alertBox.appendChild(telegramButton);

// Append the alert box to the body
document.body.appendChild(alertBox);

// Center the alert box
alertBox.style.position = 'fixed';
alertBox.style.top = '50%';
alertBox.style.left = '50%';
alertBox.style.transform = 'translate(-50%, -50%)';


            return;
          }

          this.isPasswordCorrect = true;
          localStorage.setItem("savedPassword", this.password);
          this.password = ""; // Clear the entered password
        } else {
          this.currentAttempt++;
          if (this.currentAttempt >= this.maxAttempts) {
           
            // Handle what to do if the maximum attempts are reached
               
var message = "Too many attempts. Please try again later.";
var telegramLink = "https://t.me/RcSrAK";

var alertBox = document.createElement('div');
alertBox.className = 'alert';

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
var telegramButton = document.createElement('a');
telegramButton.href = telegramLink;
telegramButton.target = '_blank';
telegramButton.className = 'telegram-btn';
telegramButton.innerHTML = 'Send Message';

// Append elements to the alert box
alertBox.appendChild(closeButton);
alertBox.appendChild(messageNode);
alertBox.appendChild(telegramButton);

// Append the alert box to the body
document.body.appendChild(alertBox);

// Center the alert box
alertBox.style.position = 'fixed';
alertBox.style.top = '50%';
alertBox.style.left = '50%';
alertBox.style.transform = 'translate(-50%, -50%)';


          } else {
  
var message = "Incorrect password. Please try again.";
var telegramLink = "https://t.me/RcSrAK";

var alertBox = document.createElement('div');
alertBox.className = 'alert';

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
var telegramButton = document.createElement('a');
telegramButton.href = telegramLink;
telegramButton.target = '_blank';
telegramButton.className = 'telegram-btn';
telegramButton.innerHTML = 'Send Message';

// Append elements to the alert box
alertBox.appendChild(closeButton);
alertBox.appendChild(messageNode);
alertBox.appendChild(telegramButton);

// Append the alert box to the body
document.body.appendChild(alertBox);

// Center the alert box
alertBox.style.position = 'fixed';
alertBox.style.top = '50%';
alertBox.style.left = '50%';
alertBox.style.transform = 'translate(-50%, -50%)';


          }
        }
      },
      copyLink() {
        var tempInput = document.createElement("input");
        tempInput.value = this.linkToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    
           
var message = "Link has been copied to clipboard!";
var telegramLink = "https://t.me/RcSrAK";

var alertBox = document.createElement('div');
alertBox.className = 'alert';

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
var telegramButton = document.createElement('a');
telegramButton.href = telegramLink;
telegramButton.target = '_blank';
telegramButton.className = 'telegram-btn';
telegramButton.innerHTML = 'Send Message';

// Append elements to the alert box
alertBox.appendChild(closeButton);
alertBox.appendChild(messageNode);
alertBox.appendChild(telegramButton);

// Append the alert box to the body
document.body.appendChild(alertBox);

// Center the alert box
alertBox.style.position = 'fixed';
alertBox.style.top = '50%';
alertBox.style.left = '50%';
alertBox.style.transform = 'translate(-50%, -50%)';


      },
      changeTab(tabName) {
        this.tabValue = tabName;
      }
    }
  });
