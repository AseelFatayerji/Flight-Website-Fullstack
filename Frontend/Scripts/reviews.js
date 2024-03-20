window.onload = () => {
  displayReview();
};

async function displayReview() {
  const flight = await fetch(
    "http://localhost/fullstack/Flight%20Website/Backend/DisplayReviews.php"
  )
    .then(function (response) {
      const result = response.json();
      result
        .then(function (list) {
          const container = document.getElementById("review");
          const title = document.createElement("div");
          title.className = "float-container gap space-even title";
          title.innerHTML =
            "<div>User name</div><div>Review</div><div>Rating</div><div>Action</div>";
          container.appendChild(title);
          for (let i = 0; i < list.length; i++) {
            let temp = list[i];
            if (temp.aproved == 0) {
              displayOne(temp);
            }
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
  const container = document.getElementById("review");
  const card = document.createElement("div");
  const card_header = document.createElement("div");
  const card_body = document.createElement("div");
  const icon = document.createElement("i");

  const user = createListItem(list.user);
  const review = createListItem(list.review);
  const rating = createStars(list.rating);
  const form = createForm(list);

  icon.className = "fa-solid fa-comment";
  card.className = "row";
  card_header.className = "card-header accent-bg";
  card_body.className = "table-body float-contanier space-even main-bg";

  card_body.appendChild(user);
  card_body.appendChild(review);
  card_body.appendChild(rating);
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

  form.className = "float-container space-even gap";
  form.method = "post";

  acc.className = "fa-regular fa-square-check icon";
  rej.className = "fa-solid fa-trash-can trash";

  acc.onclick = () => {
    form.action = "../../Backend/AcceptReview.php";
    form.submit();
  };
  rej.onclick = () => {
    form.action = "../../Backend/RejectReview.php";
    form.submit();
  };
  name.name = "textname";
  name.type = "text";
  name.value = localStorage.getItem("name");
  name.className = "hidden";

  id.name = "id";
  id.type = "number";
  id.value = parseInt(list.id);
  id.className = "hidden";

  form.appendChild(acc);
  form.appendChild(rej);
  form.appendChild(name);
  form.appendChild(id);
  return form;
}
function createListItem(item) {
  const li = document.createElement("div");
  const text = document.createElement("h4");
  text.innerText = item;
  li.appendChild(text);

  return li;
}
function  createStars(star){
    const stars = document.createElement("div")
    for(let i = 1; i <= parseInt(star);i++ ){
        const rate = document.createElement("i")
        rate.className = "fa-solid fa-star"
        stars.appendChild(rate)
    }
    return stars
}