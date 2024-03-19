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
            "<div>Destination</div><div>Departure Date</div><div>Return Date</div><div>User Name</div><div>User Email</div><div>Payment Status</div><div>Action</div>";
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
  const actions = document.createElement("div");
  const icon = document.createElement("i");
  const trash = document.createElement("i");
  const edit = document.createElement("i")

  const user = createListItem(booking.user, "use", booking.id);
  const email = createListItem(booking.email, "email", booking.id);
  const des = createListItem(booking.des, "des", booking.id);
  const ret = createListItem(booking.ret, "ret", booking.id);
  const dep = createListItem(booking.dep, "dep", booking.id);
  const pay = createListItem(booking.payment, "pay", booking.id);
  const form = createForm(booking);

  form.action = "../../Backend/EditBooking.php";
  form.method = "post";
  form.className = "form self-center hidden"

  card.className = "row";
  card_body.className = "table-body space-even ";
  card_header.className = "icon-header accent-bg";
  icon.className = "fa-solid fa-book";
  trash.className = "fa-solid fa-trash trash";
  trash.onclick = () => {
    form.action = "../../Backend/DeleteBooking.php"
    form.submit()
  };
  edit.className = "fa-regular fa-pen-to-square icon";
  edit.onclick = () => {
    showPop(booking.id);
  };
  
  actions.className ="float-container space-end gap"
  actions.appendChild(trash);
  actions.appendChild(edit);

  card_body.appendChild(des);
  card_body.appendChild(dep);
  card_body.appendChild(ret);
  card_body.appendChild(user);
  card_body.appendChild(email);
  card_body.appendChild(pay);
  card_body.appendChild(actions);

  card_header.appendChild(icon);

  card.appendChild(card_header);
  card.appendChild(card_body);

  container.appendChild(card);
  container.appendChild(form);
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
function createForm(list) {
  const form = document.createElement("form");
  const ul = document.createElement("ul");
  const des = createInput(list, "des");
  const ret = createInput(list, "ret");
  const dep = createInput(list, "dep");
  const name = document.createElement("input");
  const booking = document.createElement("input");
  const submit = document.createElement("input");

  name.name = "name"
  booking.name = "booking"

  name.type = "text"
  booking.type = "text"
  submit.type ="submit"

  name.value = localStorage.getItem("name")
  booking.value = list.id
  submit.value ="Update"

  name.className = "hidden"
  booking.className = "hidden"

  form.id = "editbooking"+list.id;

  ul.appendChild(des);
  ul.appendChild(dep);
  ul.appendChild(ret);

  form.appendChild(ul);
  form.appendChild(name);
  form.appendChild(booking);
  form.appendChild(submit)
  return form;
}
function createInput(list, type) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  const icon = setIcon(type);

  input.type = "text";
  input.name = type;
  input.placeholder = "unchanged";

  li.className="float-container";
  if (type == "des") {
    input.value = list.des;
    li.appendChild(icon);
    li.appendChild(input);
    return li;
  } else if (type == "dep") {
    input.value = list.dep;
    li.appendChild(icon);
    li.appendChild(input);
    return li;
  } else if (type == "ret") {
    input.value = list.ret;
    li.appendChild(icon);
    li.appendChild(input);
    return li;
  }
}
function setIcon(type) {
  const icon = document.createElement("i");
  if (type == "des") {
    icon.className = "fa-solid fa-map-location-dot icon-header";
    return icon;
  } else if (type == "ret") {
    icon.className = "fa-solid fa-plane-arrival icon-header";
    return icon;
  } else if (type == "dep") {
    icon.className = "fa-solid fa-plane-departure icon-header";

    return icon;
  }
}

function showPop(i) {
  document.getElementById("editbooking"+i).classList.remove("hidden");
}
