// Define correct username and password
const correctUsername = 'Student';
const correctPassword = 'Zoro';

// Function to handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get input values
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;
  
  // Check if username and password are correct
  if (usernameInput === correctUsername && passwordInput === correctPassword) {
    // Redirect to admin.html (change window.location to your admin page)
    window.location.href = '../html/admin.html';
  } else {
    // Display error message or handle incorrect login
    alert('Incorrect username or password. Please try again.');
    // Clear password field
    document.getElementById('password').value = '';
  }
});
