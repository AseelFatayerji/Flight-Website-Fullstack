window.onload = () => {
  displayFlights();
};

async function displayFlights() {
  const flight = await fetch("../../Backend/DisplayFlight.php")
    .then(function (response) {
      const result = response.json();
      result
        .then(function (list) {
          const count = 0;
          for (let i = 0; i < list.length; i++) {
            displayOne(list[i]);
          }
          container.innerText = "Revenue: " + count;
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
  const label = document.createElement("label");
  const ul = document.createElement("ul");
  label.innerText = flight.id;

  const des = createListItem(flight.des, "des");
  const ret = createListItem(flight.return, "ret");
  const dep = createListItem(flight.depart, "dep");
}
function createListItem(item, type) {
    const li = document.createElement("li");
    const edit = document.createElement("i");
    edit.className = "fa-regular fa-pen-to-square"
    li.appendChild(edit)
  if (type == "des") {    
    const des = document.createElement("i");
    des.className = "fa-solid fa-map-location-dot";
    li.appendChild(des);
    li.innerText = item;
    return li
  }
  else if (type == "ret") {    
    const des = document.createElement("i");
    des.className = "fa-solid fa-plane-arrival";
    li.appendChild(des);
    li.innerText = item;
    return li
  }
  else if (type == "dep") {    
    const des = document.createElement("i");
    des.className = "fa-solid fa-plane-departure";
    li.appendChild(des);
    li.innerText = item;
    return li
  }
}
