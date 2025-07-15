document.getElementById("forgetForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      alert("✅ Password reset link has been sent to: " + email);
      // In a real application, this would send a request to the backend
    });