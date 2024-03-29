const upcomingFlights = document.getElementById("upcoming-cards");
const flightCards = document.getElementById("flight-cards");
const reviews = document.getElementById("reviews");

const getAllFlights = async () => {
  const response = await fetch(
    "http://localhost/fullstack/Flight%20Website/Backend/getAllFlights.php",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
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
    "http://localhost/fullstack/Flight%20Website/Backend/getUpcomingFlights.php",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
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
    "http://localhost/fullstack/Flight%20Website/Backend/getGoodReviews.php",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
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
  card.classList.add("flight-card2", "txt-white", "bg-secondary");
  card.innerHTML = `
  <div class="flex center column">
    <ul class="flex space-evenly">
      <li>${flight.destination}</li>
    </ul>
  </div>`;

  upcomingFlights.appendChild(card);
};


const createGoodReviewCard = (review) => {
  const card = document.createElement("div");
  card.classList.add("review-card", "txt-white", "bg-primary","flex","center","column");
  card.innerHTML = `<ul class="flex space-evenly review-text">
  <li>${review.name}</li>
  <li>flight ${review.flight}</li>
  <li>${review.rating}</li>
</ul>
<p class="review-text">${review.comment}</p>`;

  reviews.appendChild(card);
};

getUpcomingFlights();
getAllFlights();
getGoodReviews();
