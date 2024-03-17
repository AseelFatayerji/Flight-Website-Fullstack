document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const messageDiv = document.getElementById("message");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);

    try {
      const response = await fetch(
        "http://localhost/flights/Fligh-Website-Fullsatack/login.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        messageDiv.textContent = data.message;
        // Optionally redirect to another page on successful login
        // window.location.href = '/dashboard.html';
      } else {
        const errorMessage = await response.text();
        messageDiv.textContent = `Error: ${errorMessage}`;
      }
    } catch (error) {
      console.error("Error:", error);
      messageDiv.textContent = "An error occurred. Please try again later.";
    }
  });
});
