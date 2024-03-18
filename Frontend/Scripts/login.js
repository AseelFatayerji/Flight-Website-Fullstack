document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const messageDiv = document.getElementById("message");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(loginForm);

    fetch(
      "http://localhost:8000/flights/flight-website-fullsatack/backend/login.php",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Check if authentication was successful
        if (data.success) {
          // Redirect to dashboard or another page on successful login
          window.location.href = "/dashboard.html";
        } else {
          // Display error message
          messageDiv.textContent = "Invalid email or password";
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        // Display error message
        messageDiv.textContent = "An error occurred. Please try again later.";
      });
  });
});
