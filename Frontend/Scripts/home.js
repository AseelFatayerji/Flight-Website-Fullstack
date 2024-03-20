const upcomingFlights = document.getElementById("upcoming-cards");
const flightCards = document.getElementById("flight-cards");
const reviews = document.getElementById("reviews");

const getAllFlights = async () => {
  const response = await fetch(
    "http://localhost:81/flight-website-fullstack/Backend/getAllFlights.php",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        createFlightCard(element);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUpcomingFlights = async () => {
  const response = await fetch(
    "http://localhost:81/flight-website-fullstack/Backend/getUpcomingFlights.php",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        createUpcomingFlightCard(element);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getGoodReviews = async () => {
  const response = await fetch(
    "http://localhost:81/flight-website-fullstack/Backend/getGoodReviews.php",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        createGoodReviewCard(element);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const createFlightCard = (flight) => {
  const card = document.createElement("div");
  card.classList.add("flight-card", "txt-white", "bg-secondary");
  card.innerHTML = `<img
    src="${flight.image}"
    alt=""
  />
  <div class="flex center column">
    <p>${flight.id}</p>
    <ul class="flex space-evenly">
      <li>${flight.destination}</li>
      <li>${flight.departure}</li>
      <li>${flight.return}</li>
    </ul>
  </div>`;

  flightCards.appendChild(card);
};

const createUpcomingFlightCard = (flight) => {
  const card = document.createElement("div");
  card.classList.add("flight-card", "txt-white", "bg-secondary");
  card.innerHTML = `<img
    src="${flight.image}"
    alt=""
  />
  <div class="flex center column">
    <p>${flight.id}</p>
    <ul class="flex space-evenly">
      <li>${flight.destination}</li>
      <li>${flight.departure}</li>
      <li>${flight.return}</li>
    </ul>
  </div>`;

  upcomingFlights.appendChild(card);
};


const createGoodReviewCard = (review) => {
  const card = document.createElement("div");
  card.classList.add("review-card", "txt-white", "bg-primary","flex","center","column");
  card.innerHTML = `<ul class="flex space-evenly review-text">
  <li>${review.rating}</li>
  <li>flight ${review.flight}</li>
  <li>${review.name}</li>
</ul>
<p class="review-text">${review.comment}</p>`;

  reviews.appendChild(card);
};

getUpcomingFlights();
getAllFlights();
getGoodReviews();