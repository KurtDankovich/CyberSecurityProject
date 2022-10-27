function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function setWeek(){

    var img = document.getElementById("image");
    img.src = this.value;
    return false;
}
document.getElementById("WeekSelect").onchange = setWeek;