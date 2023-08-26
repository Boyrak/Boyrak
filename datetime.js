function calculateExpirationDate() {
      // Get the chosen start date and time from the input field
      var startDate = new Date(document.getElementById('startDate').value);
    
      // Calculate the expiration date by adding 72 hours to the start date
      var expirationDate = new Date(startDate.getTime() + (81 * 60 * 60 * 1000));
    
      // Format the expiration date as a string
      var expirationDateString = expirationDate.toISOString();
    
      // Extract the date and time parts from the formatted string
      var expirationDateParts = expirationDateString.split('T');
      var expirationTimeParts = expirationDateParts[1].split(':');
      var expirationTime = expirationTimeParts[0] + ':' + expirationTimeParts[1];
    
      // Set the expiration date and time in the HTML element
      document.getElementById('expirationDate').value = expirationDateParts[0];
      document.getElementById('expirationTime').value = expirationTime;
    }