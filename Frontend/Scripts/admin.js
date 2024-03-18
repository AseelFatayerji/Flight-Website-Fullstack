window.onload = ()=>{
    setName()
}
function setName(){
    let url =window.location.href;
    let name = ""
    let index = 0;
    for(let i = 0 ;i < url.length;i++){
        if(url[i]=="="){
            index = i+1;
            break
        }
    }
    for(let i = index ;i < url.length;i++){
        name +=  url[i];
    }
    localStorage.setItem("name",name);
}

function Redirect(item){
    let name = localStorage.getItem("name")
    let url = "http://localhost/fullstack/Flight%20Website/Frontend/pages/"+item.id+"?admin="+name
    window.location.href = url
}