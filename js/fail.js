let i = document.getElementById('myTopnav');

menu.onclick = function() {
    if (i.className === "topnav") {
      i.className += " responsive";
    }
    else {
      i.className = "topnav";
    }

}
console.log("work");
