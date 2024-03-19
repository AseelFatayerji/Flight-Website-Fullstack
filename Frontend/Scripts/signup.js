const signupForm = document.getElementById("signupForm");
const messageDiv = document.getElementById("message");
const user_name = document.getElementById("user_name");

const redirect = () => {
  setTimeout(() => {
    window.location.href = "../Pages/login.html";
  }, 2000);
};

const signUp = async () => {
  const formData = new FormData(signupForm);
  try {
    const response = await fetch(
      "http://localhost/flight/flight-website-fullstack/flight-website-fullstack/backend/signup.php",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      messageDiv.textContent = data.message;
      messageDiv.style.color = "green";
      redirect();
    } else {
      const errorMessage = await response.text();
      messageDiv.textContent = `Error: ${errorMessage}`;
    }
  } catch (error) {
    console.error("Error:", error);
    messageDiv.textContent = "An error occurred. Please try again later.";
  }
};

// handle signup
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  signUp();
});
