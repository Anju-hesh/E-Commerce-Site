function signupHandler(e) {
      e.preventDefault();
      const pass = document.getElementById("password").value;
      const confirm = document.getElementById("confirmpassword").value;

      if (pass !== confirm) {
        alert("❌ Passwords do not match!");
      } else {
        alert("✅ Account created successfully!");
        // Redirect or save data logic here
      }
    }