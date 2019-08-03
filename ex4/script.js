// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");


button.addEventListener('click', function(){
    var myArray = document.querySelectorAll(".box");
    for(var i = 0; i < myArray.length; i++){
        myArray[i].style.background = "blue"
    }
   
})