const editBox = document.getElementById("editBox");
const editUser = document.getElementById("editUser");
const edit = document.getElementById("edit");
const closing = document.getElementById("close");
const overlay = document.getElementById("overlay");
const userId = JSON.parse(localStorage.getItem("userId"));
const fetchUserProfile = (userId) => {
  fetch(
    `http://localhost/flight/flight-website-fullstack/flight-website-fullstack/backend/profile.php?id=2`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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
const closeBox = () => {
  editBox.classList.remove("open");
  overlay.classList.remove("active");
};
// function displayUserProfile(user) {}

closing.addEventListener("click", closeBox);
edit.addEventListener("click", openBox);
fetchUserProfile(userId);
