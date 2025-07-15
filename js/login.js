document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "anjana@gmail.com" && password === "1234") {
        alert("Login successful!");
        window.location.href = "/pages/home.html";
      } else {
        alert("Invalid email or password!");
      }
    });