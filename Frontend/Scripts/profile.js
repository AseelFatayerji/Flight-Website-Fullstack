const editBox = document.getElementById("editBox");
const edit = document.getElementById("edit");
const overlay = document.getElementById("overlay");
const userId = JSON.parse(localStorage.getItem("userId"));
const fetchUserProfile = (userId) => {
  fetch(
    `http://localhost/flight/flight-website-fullstack/flight-website-fullstack/backend/profile.php?id=${userId}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.user);
      console.log("ahmad");
      if (data.status === "success") {
        displayUserProfile(data.user);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const openBox = () => {
  editBox.classList.add("open");
  overlay.classList.add("active");
};
function displayUserProfile(user) {
  document.getElementById("username").textContent = user.username;
  document.getElementById("email").textContent = user.email;
}

fetchUserProfile(userId);

edit.addEventListener("click", openBox);
