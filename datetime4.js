 // Save start date to local storage
 function saveStartDate() {
    var startDate = document.getElementById('startDate').value;
    localStorage.setItem('startDate', startDate);
}

// Calculate expiration date and show status
function calculateExpirationDate() {
    saveStartDate(); // Save the start date when it's changed

    var startDate = new Date(document.getElementById('startDate').value);
    var expirationDate = new Date(startDate.getTime() + (74 * 60 * 60 * 1000));

    var expirationDateInput = document.getElementById('expirationDate');
    var expirationTimeInput = document.getElementById('expirationTime');

    expirationDateInput.value = expirationDate.toISOString().split('T')[0];
    expirationTimeInput.value = expirationDate.getHours().toString().padStart(2, '0') + ':' + expirationDate.getMinutes().toString().padStart(2, '0');

    // Check expiration status
    var intervalId = setInterval(function() {
        var currentDate = new Date();
        if (currentDate >= expirationDate) {
            clearInterval(intervalId);
            exp1();
            document.getElementById('status').innerHTML = "Expired";
        } else {
            document.getElementById('status').innerHTML = "Active";
        }
    }, 1000);
}

// Alert function
function exp1() {
var message = "គ្រប់ហើយបង។";
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

// Load start date from local storage
function loadStartDate() {
    var startDate = localStorage.getItem('startDate');
    if (startDate) {
        document.getElementById('startDate').value = startDate;
        calculateExpirationDate(); // Calculate expiration date if start date is loaded from local storage
    }
}

// Load start date when the page loads
window.onload = loadStartDate;