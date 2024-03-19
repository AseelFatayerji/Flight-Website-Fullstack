window.onload = () => {
  displayRequest();
};

async function displayRequest() {
  const flight = await fetch(
    "http://localhost/fullstack/Flight%20Website/Backend/DisplayRequest.php"
  )
    .then(function (response) {
      const result = response.json();
      result
        .then(function (list) {
          const container = document.getElementById("coin");
          const title = document.createElement("div");
          title.className = "float-container gap space-even title";
          title.innerHTML =
            "<div>User name</div><div>Amount</div><div>Action</div>";
          container.appendChild(title);
          for (let i = 0; i < list.length; i++) {
            let temp = list[i];
            displayOne(temp);
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
function displayOne(list) {
  const container = document.getElementById("coin");
  const card = document.createElement("div");
  const card_header = document.createElement("div");
  const card_body = document.createElement("div");
  const icon = document.createElement("i");

  const user = createListItem(list.user);
  const amount = createListItem(list.amount);
  const form = createForm(list);

  icon.className = "fa-solid fa-money-bills";
  card.className = "row";
  card_header.className = "icon-header accent-bg";
  card_body.className = "table-body float-contanier space-even main-bg";

  card_body.appendChild(user);
  card_body.appendChild(amount);
  card_body.appendChild(form);
  card_header.appendChild(icon);
  card.appendChild(card_header);
  card.appendChild(card_body);
  container.appendChild(card);
}

function createForm(list) {
  const form = document.createElement("form");
  const acc = document.createElement("i");
  const rej = document.createElement("i");
  const name = document.createElement("input");
  const id = document.createElement("input");
  const wallet = document.createElement("input");

  form.className = "float-container space-even gap";
  form.method = "post";

  acc.className = "fa-regular fa-square-check icon";
  rej.className = "fa-solid fa-trash-can trash";

  acc.onclick = () => {
    form.action = "../../Backend/AddtoWallet.php";
    form.submit();
  };
  rej.onclick = () => {
    form.action = "../../Backend/DeleteRequest.php";
    form.submit();
  };
  name.name = "textname";
  name.type = "text";
  name.value = localStorage.getItem("name");
  name.className = "hidden";

  id.name = "id";
  id.type = "number";
  id.value = list.id;
  id.className = "hidden";

  wallet.name = "wallet";
  wallet.type = "number";
  wallet.value = list.wallet;
  wallet.className = "hidden";

  form.appendChild(acc);
  form.appendChild(rej);
  form.appendChild(name);
  form.appendChild(id);
  form.appendChild(wallet);

  return form;
}
function createListItem(item) {
  const li = document.createElement("div");
  const text = document.createElement("h4");
  text.innerText = item;
  li.appendChild(text);

  return li;
}
