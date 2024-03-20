const filter_btn = document.getElementById("filter-btn");
const search_input = document.getElementById("search-input");
const search_btn = document.getElementById("search-btn");
const passengers_less_than = document.getElementById("passengers-less-than");
const departure_after = document.getElementById("departure-after");
const return_before = document.getElementById("return-before");
const display_flights = document.getElementById("display-flights");
const form = document.getElementById("form");
const filters_div = document.getElementById("filters-div");

const getFlights = async () => {
  const response = await fetch(
    "http://localhost:81/flight-website-fullstack/Backend/getAllFlights.php",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (
        search_input.value == "" &&
        passengers_less_than.value == "" &&
        departure_after.value == "" &&
        return_before.value == ""
      ) {
        data.forEach((element) => {
          createFlightCard(element);
        });
      } else {
        const by_all = data
          .filter(flight=>byDeparture(flight))
          .filter(flight=>byDestination(flight))
          .filter(flight=>byPassengers(flight))
          .filter(flight=>byReturn(flight));
        console.log(by_all);
        by_all.forEach((element) => {
          createFlightCard(element);
        });
      }
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
    card.addEventListener("click",()=>{
        window.location.href=`../Pages/flight.html?id=${flight.id}`;
    })
  display_flights.appendChild(card);
};

const byDeparture = (flight) => {
    if(departure_after.value=="") return true;
  return flight.departure > departure_after.value;
};

const byReturn = (flight) => {
    if(return_before.value=="") return true;
  return flight.return < return_before.value;
};

const byPassengers = (flight) => {
    if(passengers_less_than.value=="") return true;
  return flight.nbOfPassengers < passengers_less_than.value;
};

const byDestination = (flight) => {
    if(search_input.value=="") return true;
  return flight.destination.includes(search_input.value);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  display_flights.innerHTML = "";
  getFlights();
});

search_btn.addEventListener("click", () => {
  display_flights.innerHTML = "";
  getFlights();
});

filter_btn.addEventListener("click", () => {
  filters_div.classList.toggle("hidden");
});

getFlights();
