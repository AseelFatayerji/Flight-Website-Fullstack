const editBox = document.getElementById("editBox");
const editUser = document.getElementById("editUser");
const editForm = document.getElementById("editForm");
const edit = document.getElementById("edit");
const btnReq = document.getElementById("btn-request");
const request = document.getElementById("request");
const info = document.getElementById("info");
const closing = document.getElementById("close");
const sendAmont = document.getElementById("send-amount");
const icon = document.getElementById("icon");
const overlay = document.getElementById("overlay");
const formReq = document.getElementById("form-req");
const userId = JSON.parse(localStorage.getItem("userId"));

let wallet_ID = Math.floor(Math.random() * 20);

const fetchUserProfile = (userId) => {
  fetch(
    `http://localhost/flight/flight-website-fullstack/flight-website-fullstack/backend/profile.php?id=${userId}`
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
const reload = () => {
  window.location.reload();
};

const displayUserProfile = (data) => {
  const { id, user_name, user_email } = data;
  info.innerHTML = `    <li class="flex">
  <span class="label">Full-Name: </span>
  <span class="detail">${user_name}</span>
</li>
<li>
  <span class="label">Email: </span>
  <span class="detail">${user_email}</span>
</li>
<li>
  <span class="label">Password:</span>
  <span class="detail">Secured password</span>
</li>`;
};
const editingUser = async () => {
  const formData = new FormData(editForm);
  formData.append("user_id", userId);

  try {
    const response = await fetch(
      "http://localhost/flight/flight-website-fullstack/flight-website-fullstack/backend/editinguserinfo.php",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (data.success) {
      alert("User data updated successfully");
      setTimeout(reload, 1000);
    } else {
      alert("Failed to update user data");
    }
  } catch (error) {
    console.error("Error:", error.message);
    alert("An error occurred. Please try again later.");
  }
};
// formData.append("wallet_id", wallet_ID);
const sendReq = async () => {
  const formData = new FormData(formReq);
  formData.append("wallet_id", wallet_ID);
  try {
    const response = await fetch(
      "http://localhost/flight/flight-website-fullstack/flight-website-fullstack/backend/requestCoins.php",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (data.success) {
      alert("sended successfully");
      setTimeout(reload, 1000);
    } else {
      alert("Failed to send ");
    }
  } catch (error) {
    console.error("Error:", error.message);
    alert("An error occurred. Please try again later.");
  }
};

const openReq = () => {
  request.style.display = "block";
  icon.style.transform = "rotate(180)";
};

btnReq.addEventListener("click", openReq);
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  editingUser();
});
closing.addEventListener("click", closeBox);
edit.addEventListener("click", openBox);
sendAmont.addEventListener("click", (e) => {
  e.preventDefault();
  sendReq();
});
fetchUserProfile(userId);
