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
          const count = 0;
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
  const formdiv = document.createElement("div");
  const label = document.createElement("label");
  const ul = document.createElement("ul");

  label.innerText = flight.id;

  const des = createListItem(flight.des, "des", flight.id);
  const ret = createListItem(flight.return, "ret", flight.id);
  const dep = createListItem(flight.depart, "dep", flight.id);
  const plane = createListItem(flight.plane, "pl", flight.id);
  const desform = createEditForm(flight.id, "des");
  const retform = createEditForm(flight.id, "ret");
  const depform = createEditForm(flight.id, "dep");
  const planeform = createEditForm(flight.id, "pl");

  desform.method = "post";
  retform.method = "post";
  depform.method = "post";
  planeform.method = "post";

  formdiv.appendChild(desform);
  formdiv.appendChild(depform);
  formdiv.appendChild(retform);
  formdiv.appendChild(planeform);

  ul.appendChild(des);
  ul.appendChild(dep);
  ul.appendChild(ret);
  ul.appendChild(plane);

  card.className = "card";
  card_body.className = "card-body ";
  card_header.className = "card-header accent-bg";

  card_body.appendChild(ul);
  card_body.appendChild(formdiv);
  card_header.appendChild(label);
  card.appendChild(card_header);
  card.appendChild(card_body);
  container.appendChild(card);
}
function createListItem(item, type, i) {
  const li = document.createElement("li");
  const edit = document.createElement("i");
  const icon = setIcon(type);
  const text = document.createElement("h4");
  li.className = "float-container gap space-between";
  edit.className = "fa-regular fa-pen-to-square icon";
  edit.onclick = () => {
    showEditPop(i, type);
  };

  text.innerText = item;
  li.appendChild(icon);
  li.appendChild(text);
  li.appendChild(edit);

  return li;
}
function createEditForm(i, type) {
  const form = document.createElement("form");
  const div = document.createElement("div");
  const id = document.createElement("input");
  const name = document.createElement("input");
  const newValue = document.createElement("input");
  const submit = document.createElement("input");
  const icon = setIcon(type);

  form.action = setFormaction(type)

  newValue.type = "text";
  newValue.name = "type"
  submit.type = "submit";
  icon.classList.add("icon-header");

  form.className = "float-container gap hidden";
  form.id = i + "show" + type;

  submit.className ="edit-submit"
  newValue.className ="edit-input"

  div.className ="edit-div"

  name.className = "hidden"
  name.type = "text"
  name.id = "textname"
  name.value = localStorage.getItem("name")

  id.className = "hidden";
  id.type = "number";
  id.name = "id";
  id.value = i;

  div.appendChild(icon);
  div.appendChild(newValue);
  form.appendChild(div);
  form.appendChild(submit);
  form.appendChild(id);
  form.appendChild(name)
  return form;
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
