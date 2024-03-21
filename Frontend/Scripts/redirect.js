window.onload = () =>{
    if(localStorage.getItem("userId") == null){
      return
    }
    hideLogin()
  }
function Redirect(item) {
    let name = localStorage.getItem("userId");
    if(name != null){
    let url =
      "http://localhost/fullstack/Flight%20Website/Frontend/" +
      item.id +
      "?user=" +
      name;
    window.location.href = url;
    }
    else{
      let url =
      "http://localhost/fullstack/Flight%20Website/Frontend/" +
      item.id;
    window.location.href = url;
    }
  }
  function logout(item) {
    let url =
      "http://localhost/fullstack/Flight%20Website/Frontend/pages/" + item.id;
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = url;
  }
  function hideLogin(){
    document.getElementById("login").classList.add("hidden");
    document.getElementById("logout").classList.remove("hidden");
    document.getElementById("profile").classList.remove("hidden");
  }