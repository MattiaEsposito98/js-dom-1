console.log("Lampadina")

myButton.addEventListener('click', function () {
  const myButton = document.getElementById("myButton")
  const img = document.getElementById ("changeImg")

  if (myButton.textContent === 'Accendi') {
    img.src = "./img/yellow_lamp.png"
    myButton.textContent = 'Spegni'

  } else {
    img.src = "./img/white_lamp.png"
    myButton.textContent = 'Accendi'

  }

})














