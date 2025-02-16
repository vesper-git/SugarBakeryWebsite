document.getElementById("SignForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "password") {
      var result = confirm("Login successful! Do you want to proceed?");
      if (result) {
        window.location.href = "coffee.html"; // Redirect to coffee.html
      } 
    } else {
      alert("Invalid username or password. Please try again.");
      // Code to handle invalid login credentials
    }
  });