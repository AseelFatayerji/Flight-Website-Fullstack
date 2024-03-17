document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const form = document.getElementById("form");
  const messageDiv = document.getElementById("message");
  const toLogin = document.getElementById("to-login");
  const formLogin = document.getElementById("form-login");
  const toSign = document.getElementById("to-sign");
  const loginForm = document.getElementById("loginform");

  const signUp = async () => {
    const formData = new FormData(signupForm);

    try {
      const response = await fetch("http://localhost/project22/index.php", {
        method: "POST",
        body: formData,
      });

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
  const signIn = async () => {
    const formData = new FormData(loginForm);

    try {
      const response = await fetch("http://localhost/project22/login.php", {
        method: "POST",
        body: formData,
      });

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

  // for switching
  const toSigns = () => {
    form.classList.remove("hide");
    formLogin.classList.add("hide");
  };

  const toLogins = () => {
    form.classList.add("hide");
    formLogin.classList.remove("hide");
  };

  toLogin.addEventListener("click", toLogins);
  toSign.addEventListener("click", toSigns);
});
