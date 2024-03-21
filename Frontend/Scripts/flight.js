const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const flight_name = document.getElementById("flight-name");
const destination = document.getElementById("destination");
const departure_date = document.getElementById("departure");
const return_date = document.getElementById("return");
const price = document.getElementById("price");
const flight_img = document.getElementById("flight-img");
const booking = document.getElementById("booking");
const upload_btn = document.getElementById("upload-btn");
const book_btn = document.getElementById("book-btn");
const review = document.getElementById("review-text");
let stars = document.querySelectorAll("star");

localStorage.setItem("userId", 1);

let rating = 0;

const URLParams = (id) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(id) || "";
};

const flight_id = URLParams("id");
const user_id = localStorage.getItem("userId");


const getFlight = async () => {
  const response = await fetch(
    `http://localhost/fullstack/Flight%20Website/Backend/getFlight.php?flight=${flight_id}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      flight_img.src = data.flight.image;
      destination.innerHTML += " " + data.flight.destination;
      departure_date.innerText += " " + data.flight.departure;
      return_date.innerText += " " + data.flight.return;
      price.innerText += " " + data.flight.price;
    })
    .catch((error) => {
      console.log(error);
    });
};

const bookFlight = async () => {
  try{
  const form_data = new FormData();
  form_data.append("flight_id", flight_id);
  form_data.append("user_id", user_id);
  const response = await fetch(
    `http://localhost/fullstack/Flight%20Website/Backend/addBooking.php`,
    {
      method: "POST",
      body: form_data
    }

    

  ); const data = await response.json();
   }catch(error){ console.log(error); }
};

const addReview = async () => {
  try{
  const form_data = new FormData();
  form_data.append("flight_id", flight_id);
  form_data.append("user_id", user_id);
  form_data.append("rating", rating);
  form_data.append("review", review.value);
  const response = await fetch(
    `http://localhost/fullstack/Flight%20Website/Backend/addReview.php`,
    {
      method: "POST",
      body: form_data,
    }
  );const data = await response.json();
  console.log(data);
  }catch(error){
  console.log(error);
}
};

one.addEventListener("click", () => {
  one.classList.toggle("fa-regular");
  one.classList.toggle("fa-solid");
  rating = 1;
});

two.addEventListener("click", () => {
  two.classList.toggle("fa-regular");
  two.classList.toggle("fa-solid");
  rating = 2;
});

three.addEventListener("click", () => {
  three.classList.toggle("fa-regular");
  three.classList.toggle("fa-solid");
  rating = 3;
});

four.addEventListener("click", () => {
  four.classList.toggle("fa-regular");
  four.classList.toggle("fa-solid");
  rating = 4;
});

five.addEventListener("click", () => {
  five.classList.toggle("fa-regular");
  five.classList.toggle("fa-solid");
  rating = 5;
});

book_btn.addEventListener("click", () => {
  bookFlight();
});

upload_btn.addEventListener("click", () => {
  addReview();
  review.value = "";
  one.classList.remove("fa-solid");
  two.classList.remove("fa-solid");
  three.classList.remove("fa-solid");
  four.classList.remove("fa-solid");
  five.classList.remove("fa-solid");
});


getFlight();
