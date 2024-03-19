window.onload = () => {
    displayBooking();
  };
  
  async function displayBooking() {
    const flight = await fetch(
      "http://localhost/fullstack/Flight%20Website/Backend/DisplayReviews.php"
    )
      .then(function (response) {
        const result = response.json();
        result
          .then(function (list) {
            const container = document.getElementById("review");
            const title = document.createElement("div");
            title.className = "float-container gap space-even title";
            title.innerHTML =
              "<div>Destination</div><div>Departure Date</div><div>Return Date</div><div>User Name</div><div>User Email</div><div>Payment Status</div><div>Action</div>";
            container.appendChild(title);
            for (let i = 0; i < list.length; i++) {
              displayOne(list[i]);
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  function displayOne(review) {
    const container = document.getElementById("review");
    const card = document.createElement("div");
    const card_header = document.createElement("div");
    const card_body = document.createElement("div");
    
  }
  



  