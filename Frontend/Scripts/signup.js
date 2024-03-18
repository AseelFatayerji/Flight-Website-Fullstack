document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const messageDiv = document.getElementById("message");
  const user_name = document.getElementById("user_name");

  const signUp = async () => {
    const formData = new FormData(signupForm);

    try {
      const response = await fetch(
        "http://localhost/fullstack/Flight%20Website/Backend/signup.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        messageDiv.textContent = data.message;
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
});
