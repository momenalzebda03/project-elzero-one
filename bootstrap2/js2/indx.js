function clikc () {
   
    var div_box = document.getElementById("div_box");

    div_box.style.display = "block";
}

document.getElementById("col_right").onclick = clikc;

function clikc1 () {
   
    var div_box = document.getElementById("div_box");

    div_box.style.display = "none";
}

document.getElementById("col_right").ondblclick = clikc1;