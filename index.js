let chosen = 0;

function changeButtonColor(buttonId) {
    // Get all the buttons
    let buttons = document.querySelectorAll(".btn");
    
    // Reset the background color of all the buttons
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "";

    }
    
    // Change the background color of the clicked button
    let button = document.getElementById(buttonId);
    button.style.backgroundColor = "hsl(25, 97%, 53%)";
    button.style.color = "white";
    chosen=buttonId.slice(3)
  }

  function updatePage(buttonId){
    let prevPage = document.getElementById("firstmb")
    let succPage = document.getElementById("secondmb")
    let spanScore =document.getElementById("sp-score")
    if (chosen>0){
        prevPage.style.visibility="hidden"
        succPage.style.visibility="visible"
        spanScore.innerHTML= String(chosen)
    }
  }