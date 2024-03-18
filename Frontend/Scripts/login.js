const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");

const login = async () => {
  const formData = new FormData(loginForm);

  try {
    const response = await fetch(
      "http://localhost/flights/flight-website-fullsatack/backend/login.php",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      messageDiv.textContent = data.message;
      window.location.replace("../Pages/profile.html");
    } else {
      const errorMessage = await response.text();
      messageDiv.textContent = `Error: ${errorMessage}`;
    }
  } catch (error) {
    console.error("Error:", error);
    messageDiv.textContent = "An error occurred. Please try again later.";
  }
};

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  login();
});
