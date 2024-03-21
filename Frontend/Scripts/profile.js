const editBox = document.getElementById("editBox");
const editUser = document.getElementById("editUser");
const editForm = document.getElementById("editForm");
const edit = document.getElementById("edit");
const btnReq = document.getElementById("btn-request");
const request = document.getElementById("request");
const balanceamount = document.getElementById("balance");
const reqAmount = document.getElementById("req-amount");
const info = document.getElementById("info");
const closing = document.getElementById("close");
const sendAmount = document.getElementById("send-amount");
const icon = document.getElementById("icon");
const overlay = document.getElementById("overlay");
const formReq = document.getElementById("form-req");
const userId = JSON.parse(localStorage.getItem("userId"));
const histories = document.getElementById("histories");

const fetchUserProfile = (userId) => {
  fetch(
    `http://localhost/fullstack/Flight%20Website/Backend/profile.php?id=${userId}`
  )
    .then((response) => response.json())
    .then((data) => {
      
      displayUserProfile(data.user);
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
  <span class="label"><i class="fa-solid fa-user"></i> </span>
  <span class="detail">${user_name}</span>
</li>
<li>
  <span class="label"><i class="fa-solid fa-envelope"></i> </span>
  <span class="detail">${user_email}</span>
</li>
<li>
  <span class="label"><i class="fa-solid fa-lock"></i></span>
  <span class="detail">Secured password</span>
</li>`;
};
const editingUser = async () => {
  const formData = new FormData(editForm);
  formData.append("user_id", userId);  
  try {
    const response = await fetch(
      "http://localhost/fullstack/Flight%20Website/Backend/editinguserinfo.php",
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

const sendReq = async () => {
  const formData = new FormData(formReq);
  formData.append("user_id", userId);

  try {
    const response = await fetch(
      "http://localhost/fullstack/Flight%20Website/Backend/requestCoins.php",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    
  } catch (error) {
    console.error("Error:", error.message);
    alert("An error occurred. Please try again later.");
  }
};
const displayUserbookings = (data) => {  

  const { flight_destination, departure_date, return_date, price } = data;
  histories.innerHTML +=
    ` <li class="his">
  <ul class="flex column his">
    <li class="destination flex-between">Destination: <span>` +
    flight_destination +
    `</span></li>
    <li class="Departure flex-between">Departure date:<span>${departure_date}</span></li>
    <li class="Arrival flex-between">Arrival date:<span>${return_date}</span></li>
    <li class="Price flex-between">Price:<span>${price}</span></li>
  </ul>
</li>`;
};

const getBooking = () => {
  fetch(
    `http://localhost/fullstack/Flight%20Website/Backend/userbookings.php?id=${userId}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.map((book) => {
        displayUserbookings(book);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const openReq = () => {
  request.classList.toggle("closed-req");
};
const getBalance = () => {
  fetch(
    `http://localhost/fullstack/Flight%20Website/Backend/getBalance.php?id=${userId}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      balanceamount.innerHTML = ` <small>Balance: $${data.user.balance}</small>`;
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to fetch user data. Please try again later.");
    });
};

btnReq.addEventListener("click", openReq);
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  editingUser();
});
closing.addEventListener("click", closeBox);
edit.addEventListener("click", openBox);
sendAmount.addEventListener("click", (e) => {
  e.preventDefault();
  sendReq();
});
fetchUserProfile(userId);
getBalance();
getBooking();
window.onload = () =>{
  checkAlerts()
}
function checkAlerts(){

  const rev = parseInt(localStorage.getItem("rejRev"))
  const flight =parseInt(localStorage.getItem("editflight"))
  const book =parseInt(localStorage.getItem("editbooking"))
  const wall =parseInt(localStorage.getItem("rejwallet"))
  if(rev == 1){
      createAlerts("review","rejected")
  }
  if(flight == 1){
      createAlerts("flight","changed")
  }
  if(wall == 1){
      createAlerts("wallet request","rejected")
  }
  if(book == 1){
      createAlerts("booking","changed")
  }

}
function createAlerts(type,action){
const container = document.getElementById("overlay");
const pop = document.createElement("div")    
const header = document.createElement("div")    
const body = document.createElement("div")  
const input = document.createElement("input")  
const label = document.createElement("label")
const label2 = document.createElement("label")

input.type = "button"
input.value = "close"
input.onclick = ()=>{
  container.removeChild(pop)
  if(type == "flight"){
    
      localStorage.setItem("editflight",0)
      
  }
  if(type == "book"){
      localStorage.setItem("editbooking",0)
  }
  if(type == "review"){
      localStorage.setItem("rejRev",0)
  }
  if(type == "wallet request"){
      localStorage.setItem("rejwallet",0)
  }
}
label.innerText = "Your "+type+ " has been "+action;
label2.innerHTML = "Update"
body.className="pop-body"
header.className="pop-header"
pop.className="pop"

body.appendChild(label)
body.appendChild(input)
header.appendChild(label2)
pop.appendChild(header);
pop.appendChild(body)
container.appendChild(pop)
}
