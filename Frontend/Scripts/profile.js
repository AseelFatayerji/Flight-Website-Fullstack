const userID = localStorage.getItem("userID");

console.log(userID);

// const fetchUserProfile = (userID) => {
//   fetch(
//     `http://localhost/flight/flight-website-fullstack/flight-website-fullstack/backend/profile.php?id=${userID}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.user);
//       if (data.status === "success") {
//         displayUserProfile(data.user);
//       } else {
//         alert(data.message);
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// function displayUserProfile(user) {
//   document.getElementById("username").textContent = user.username;
//   document.getElementById("email").textContent = user.email;
// }

// fetchUserProfile(userID);
