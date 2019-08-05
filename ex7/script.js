// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var section = document.getElementById("section-header");
var paragraph = document.getElementById("section");

section.addEventListener("click", function(){
    if(paragraph.style.display === "block"){
        paragraph.style.background-color = "white";
        paragraph.style.visibility = "hidden";
        paragraph.style.background-color = "white";
    } else {
        paragraph.style.display = "block";
    }
       
})
