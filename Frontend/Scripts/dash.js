window.onload = () =>{
    displayUsers()
    displayBookings()
    calculateRevenue()
}

async function displayUsers(){
    const container = document.getElementById("users")
    const users =  await fetch("http://localhost/fullstack/Flight%20Website/Backend/DisplayUsers.php").then(function(response){
        const result = response.json()
        console.log(response)
        result.then(function(list){
            const h4  = document.createElement("h4")
            h4.innerText = "Total users: "+list.length;
            container.appendChild(h4)
        }).catch(function (err) {
        console.log(err);
      });
    }).catch(function (err) {
        console.log(err);
      });
}
async function displayBookings(){
    let container = document.getElementById("bookings")
    const users =  await fetch("../../Backend/DisplayBookings.php").then(function(response){
        let result = response.json()
        result.then(function(list){
            container.innerText = "Total bookings: "+list.length;
        }).catch(function (err) {
        console.log(err);
      });
    }).catch(function (err) {
        console.log(err);
      });
}

async function calculateRevenue(){
    let container = document.getElementById("revenue")
    const users =  await fetch("../../Backend/GetPrice.php").then(function(response){
        let result = response.json()
        result.then(function(list){
            let count  = 0;
            for(let i = 0;i < list.length;i++){
                count += list[i];
            }
            container.innerText = "Revenue: "+count;
        }).catch(function (err) {
        console.log(err);
      });
    }).catch(function (err) {
        console.log(err);
      });
}