const filter_btn = document.getElementById('filter-btn');
const search_input = document.getElementById('search-input');
const search_btn = document.getElementById('search-btn');
const passengers_less_than = document.getElementById('passengers-less-than');
const departure_after = document.getElementById('departure-after');
const return_before = document.getElementById('return-before');
const display_flights = document.getElementById('display-flights');

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
  
    display_flights.appendChild(card);
  };

  getAllFlights();