const img1 = document.querySelector('.img1')
const img =document.querySelector(".img")


img.forEach(imagen => {
    imagen.addEventListener('click', function(){
        const activa =document.querySelector(".activa")
        activa.classList.remove('activa')
        imagen.classList.add('activa')
        img1.src = imagen.src 

    })
});