// Function to fetch user profile data based on user ID
function fetchUserProfile(userID) {
  fetch(
    `http://localhost/flights/Flight-Website-Fullsatack/Backend/profile.php?id=${userID}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        displayUserProfile(data.user);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while fetching user profile data.");
    });
}

function displayUserProfile(user) {
  document.getElementById("username").textContent = user.username;
  document.getElementById("email").textContent = user.email;
}

document.addEventListener("DOMContentLoaded", function () {
  const userID = localStorage.getItem("userID");
  fetchUserProfile(userID);
});
