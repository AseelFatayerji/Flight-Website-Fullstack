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




const URLParams = (id) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(id) || "";
};

const flight_id = URLParams("id");
const user_id= localStorage.getItem("userId");

const getFlight = async () => {
    const response = await fetch(`http://localhost:81/flight-website-fullstack/Backend/getAllFlights.php?id=${flight_id}`,{
        method:"GET"
    }).then(response=>response.json())
    .then(data=>{
        console.log(data);
        createFlightCard(data);
    }).catch(error=>{
        console.log(error);
    })
    
}

