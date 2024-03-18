window.onload = () =>{
    displayFlights()
}


async function displayFlights(){
    let container = document.getElementById("fights")
    const users =  await fetch("../../Backend/DisplayFlight.php").then(function(response){
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