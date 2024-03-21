window.onload = () => {
  displayFlights();
};

async function displayFlights() {
  const flight = await fetch(
    "http://localhost/fullstack/Flight%20Website/Backend/DisplayFlight.php"
  )
    .then(function (response) {
      const result = response.json();
      result
        .then(function (list) {
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
function displayOne(flight) {
  const container = document.getElementById("fights");
  const card = document.createElement("div");
  const card_header = document.createElement("div");
  const card_body = document.createElement("div");
  const ul = document.createElement("ul");
  const edit = document.createElement("i");
  const trash = document.createElement("i");
  edit.className = "fa-regular fa-pen-to-square icon";
  edit.onclick = () => {
    showEditPop(flight.id);
  };
  trash.className = "fa-solid fa-trash trash";
  trash.onclick = () => {
    form.action = "../../Backend/DeleteFlight.php"
    form.submit()
  };

  const des = createListItem(flight.des, "des", flight.id);
  const ret = createListItem(flight.return, "ret", flight.id);
  const dep = createListItem(flight.depart, "dep", flight.id);
  const plane = createListItem(flight.plane, "pl", flight.id);

  const form = createForm(flight)

  form.method = "post";
  form.action = "../../Backend/EditFlight.php"
  form.className = "form hidden"

  ul.appendChild(des);
  ul.appendChild(dep);
  ul.appendChild(ret);
  ul.appendChild(plane);

  card.className = "row";
  card_body.className = "table-body ";
  card_header.className = "table-header float-container gap accent-bg";

  card_body.appendChild(ul);
  card_header.appendChild(edit);
  card_header.appendChild(trash);
  card.appendChild(card_header);
  card.appendChild(card_body);
  container.appendChild(card);
  container.appendChild(form)
}
function createListItem(item, type, i) {
  const li = document.createElement("li");
  
  const icon = setIcon(type);
  const text = document.createElement("h4");
  
  li.className = "float-container gap space-between";
  
  text.innerText = item;
  li.appendChild(icon);
  li.appendChild(text);

  return li;
}
function createForm(list) {
  const form = document.createElement("form");
  const ul = document.createElement("ul");
  const des = createInput(list, "des");
  const ret = createInput(list, "ret");
  const dep = createInput(list, "dep");
  const pl = createInput(list, "pl");
  const img = createInput(list, "img");

  const name = document.createElement("input");
  const flight = document.createElement("input");
  const submit = document.createElement("input");

  name.name = "name"
  flight.name = "flight"

  name.type = "text"
  flight.type = "number"
  submit.type ="submit"

  name.value = localStorage.getItem("name")
  flight.value = list.id
  submit.value ="Update"

  name.className = "hidden"
  flight.className = "hidden"

  form.id = "edit"+list.id;

  ul.appendChild(des);
  ul.appendChild(dep);
  ul.appendChild(ret);
  ul.appendChild(pl);
  ul.appendChild(img);

  form.appendChild(ul);
  form.appendChild(name);
  form.appendChild(flight);
  form.appendChild(submit)
  return form;
}
function createInput(list, type) {
  const li = document.createElement("li");
  const input = document.createElement("input");
  const icon = setIcon(type);
  icon.classList.add("icon-header");
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
    input.value = list.depart;
    li.appendChild(icon);
    li.appendChild(input);
    return li;
  } else if (type == "ret") {
    input.value = list.return;
    li.appendChild(icon);
    li.appendChild(input);
    return li;
  }
  else if (type == "pl") {
    input.value = list.plane;
    li.appendChild(icon);
    li.appendChild(input);
    return li;
  }
  else if (type == "img") {
    input.value = list.image;
    li.appendChild(icon);
    li.appendChild(input);
    return li;
  }
}
function setIcon(type) {
  const icon = document.createElement("i");
  if (type == "des") {
    icon.className = "fa-solid fa-map-location-dot";
    return icon;
  } else if (type == "ret") {
    icon.className = "fa-solid fa-plane-arrival";
    return icon;
  } else if (type == "dep") {
    icon.className = "fa-solid fa-plane-departure";

    return icon;
  } else if (type == "pl") {
    icon.className = "fa-solid fa-plane ";
    return icon;
  }
  else if (type == "img") {
    icon.className = "fa-solid fa-image ";
    return icon;
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
  else if (type == "img") {
    return "../../Backend/EditImage.php";
  }
}
function showPop() {
  document.getElementById("addFlight").classList.remove("hidden");
}
function showEditPop(i) {
  document.getElementById("edit" + i).classList.remove("hidden");
}
