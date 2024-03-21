const { data } = require("jquery");

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
const upload_btn = document.getElementById("upload-btn")
const book_btn = document.getElementById("book-btn")
let stars = document.querySelectorAll("star");


let rating = 0;


const URLParams = (id) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(id) || "";
};

const flight_id = URLParams("id");
const user_id = localStorage.getItem("userId");


const getFlight = async () => {
  const response = await fetch(
    `http://localhost:81/flight-website-fullstack/Backend/getFlight.php?id=${flight_id}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      flight_img.src = data.flight.image;
      destination.innerHTML +=" "+ data.flight.destination;
      departure_date.innerText +=" "+ data.flight.departure;
      return_date.innerText +=" "+ data.flight.return;
      price.innerText +=" "+ data.flight.price;
    })
    .catch((error) => {
      console.log(error);
    });
};

const bookFlight = async () => {
    const form_data = new FormData();
    form-data.append("flight_id", flight_id);
    form-data.append("user_id", user_id);
const response = await fetch(`http://localhost:81/flight-website-fullstack/Backend/getFlight.php`, {
method: "POST",
body: form_data,
})

}



const addReview = async () => {
  const form_data = new FormData();
  form_data.append("flight_id", flight_id);
  form_data.append("user_id", user_id);
  form_data.append("rating", rating);
  form_data.append("review", review);
  const response = await fetch(
    `http://localhost:81/flight-website-fullstack/Backend/addReview.php`,
    {
      method: "POST",
      body: form_data,
    }
  );
}



one.addEventListener("click", () => {
  one.classList.toggle("fa-regular")
  one.classList.toggle("fa-solid")
})

two.addEventListener("click", () => {
  two.classList.toggle("fa-regular")
  two.classList.toggle("fa-solid")
})

three.addEventListener("click", () => {
  three.classList.toggle("fa-regular")
  three.classList.toggle("fa-solid")
})

four.addEventListener("click", () => {
  four.classList.toggle("fa-regular")
  four.classList.toggle("fa-solid")
})

five.addEventListener("click", () => {
  five.classList.remove("fa-regular")
  five.classList.add("fa-solid")
})




book_btn.addEventListener("click", () => {
  bookFlight();
})

upload_btn.addEventListener("click", () => {
  addReview();
})

getFlight();
