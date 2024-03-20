const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");

const login = async () => {
  const formData = new FormData(loginForm);

  try {
    const response = await fetch(
      "http://localhost/flight/flight-website-fullstack/flight-website-fullstack/backend/login.php",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("userId", JSON.stringify(data.user_id));
      window.location.href = "../Pages/profile.html";
    } else {
      // const errorMessage = await response.text();
      messageDiv.textContent = `Error: invalid`;
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
