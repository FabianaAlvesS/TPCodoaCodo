const imagenes = document.querySelectorAll(".img");
const img = document.querySelectorAll(".img")

img.forEach(imagen =>{
  imagen.addEventListener("click", function () {
    const activa = document.querySelector(".activa")
    activa.classList.remove("activa")
    imagen.classList.add("avtiva")
    img1.src=imagen.src
  })
  
});


window.addEventListener("load", ()=>{
  let lon
  let lat 
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=> {
      //console.log(position)
      lon = position.coords.longitude
      lat = position.coords.latitude

      const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={6-gJBqxL}'
      console.log(url)

    })
}
})