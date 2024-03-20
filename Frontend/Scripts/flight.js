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

const URLParams = (id) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(id) || "";
};

const flight_id = URLParams("id");
const user_id = localStorage.getItem("userId");

console.log(flight_id);
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

const getBookings = async () => {
  const response = await fetch(
    `http://localhost:81/flight-website-fullstack/Backend/DisplayBookings`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        if (element.flight_id == flight_id && element.user_id == user_id) {
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getFlight();
