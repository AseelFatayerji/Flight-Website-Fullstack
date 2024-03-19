window.onload = () => {
  displayBooking();
};

async function displayBooking() {
  const flight = await fetch(
    "http://localhost/fullstack/Flight%20Website/Backend/DisplayBookings.php"
  )
    .then(function (response) {
      const result = response.json();
      result
        .then(function (list) {
          const container = document.getElementById("booking");
          const title = document.createElement("div");
          title.className = "float-container gap space-even title";
          title.innerHTML =
            "<div>Destination</div><div>Departure Date</div><div>Return Date</div><div>User Name</div><div>User Email</div><div>Payment Status</div>";
          container.appendChild(title);
          for (let i = 0; i < list.length; i++) {
            displayOne(list[i]);
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    })
    .catch(function (err) {
      console.log(err);
    });
}
function displayOne(booking) {
  const container = document.getElementById("booking");
  const card = document.createElement("div");
  const card_header = document.createElement("div");
  const card_body = document.createElement("div");
  const formdiv = document.createElement("div");
  const icon = document.createElement("i");

  icon.className = "fa-solid fa-book";
  const user = createListItem(booking.user, "use", booking.id);
  const email = createListItem(booking.email, "email", booking.id);
  const des = createListItem(booking.des, "des", booking.id);
  const ret = createListItem(booking.ret, "ret", booking.id);
  const dep = createListItem(booking.dep, "dep", booking.id);
  const pay = createListItem(booking.payment, "pay", booking.id);

  card.className = "card";
  card_body.className = "table-body space-even ";
  card_header.className = "card-header accent-bg";

  card_body.appendChild(des);
  card_body.appendChild(dep);
  card_body.appendChild(ret);
  card_body.appendChild(user);
  card_body.appendChild(email);
  card_body.appendChild(pay);
  card_body.appendChild(formdiv);
  card_header.appendChild(icon);
  card.appendChild(card_header);
  card.appendChild(card_body);
  container.appendChild(card);
}

function createListItem(item, type) {
  const li = document.createElement("div");
  const text = document.createElement("h4");
  if (type == "pay") {
    if (item == 1) {
      text.innerText = "Payed";
      li.appendChild(text);
      return li;
    } else {
      text.innerText = "Pending";
      li.appendChild(text);
      return li;
    }
  } else {
    text.innerText = item;
    li.appendChild(text);

    return li;
  }
}

function setFormaction(type) {
  const icon = document.createElement("i");
  if (type == "des") {
    return "../../Backend/EditDes.php";
  } else if (type == "ret") {
    return "../../Backend/EditRet.php";
  } else if (type == "dep") {
    return "../../Backend/EditDep.php";
  } else if (type == "pl") {
    return "../../Backend/EditPlane.php";
  }
}
function showPop() {
  document.getElementById("addFlight").classList.remove("hidden");
}
function showEditPop(i, type) {
  document.getElementById(i + "show" + type).classList.remove("hidden");
}
