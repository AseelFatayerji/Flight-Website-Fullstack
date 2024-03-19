const upcomingFlights = document.getElementById("upcoming");
const flightCards = document.getElementById("flight-cards");

const getUpcomingFlights = async () => {
  const response = await fetch(
    "http://localhost/flight-website-fullstack/backend/getUpcomingFlights.php",
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
      <li>${flight.arrival}</li>
    </ul>
  </div>`;
};

getUpcomingFlights();
