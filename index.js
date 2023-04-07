const photosMenu = document.querySelector("#photos-menu")
const photosImage = document.querySelector(".detail-image")
const photosAuthor = document.querySelector(".author")
const photosRating = document.querySelector("#rating-display")
const newPhotos = document.querySelector("#new-photos")
let globalPhotos;
document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
})

newPhotos.addEventListener("submit",(e) =>{
    //e.preventDefault
    addNewPhotos(e)
})


//fetch the photos data
function fetchData(){
    fetch("http://localhost:3000/photos")
    .then((res)=> res.json())
    .then((data) => {
        data.forEach((photos) =>{
            displayImage(photos)
        })
        
        showDetails(data[0])
        globalPhotos = data[0].id
    
    })

}
  
function displayImage(photos){
    console.log(photos)
    let img = document.createElement("img")
    img.src = photos.image
    img.id = `id${photos.id}`
    img.addEventListener('click', ()=> {
        showDetails(photos)
        globalPhotos = photos.id
    })

    photosMenu.appendChild(img)

}

function showDetails(photos){
    photosImage.src = photos.image
    photosAuthor.textContent = photos.author
    photosRating.textContent = photos.rating

}

function addNewPhotos(event){
    event.preventDefault();
    let newObject = {
        image: event.target["new-image"].value,
        rating: event.target["new-rating"].value,
        author: event.target["new-author"].value

    }
    displayImage(newObject)
}

function updatephotos(photos){
    photos.preventDefault();
    let rating = document.getElementById("new-rating2").value
    let author = document.getElementById("new-author2").value
    let newUpdate = {
        rating: rating,
        author: author
    }
    showDetails(newUpdate)

}

function deleteButton(){
    console.log(globalPhotos)
    document.querySelector(`#photos-menu #id${globalPhotos}`).remove
    
}








