export const makePhotoMarkup = (data, listElement) => {
    let photosList = ''
    console.log(data)
    data.hits.map(photo => {
        photosList +=
            `<li class="item">
                <img class="image" src="${photo.webformatURL}" alt="">
                <div class="content">
                    <h2 class="title">Owner: <span class="data">${photo.user}</span></h2>
                    <p class="text">Collections: <span class="data">${photo.collections}</span></p>
                    <p class="text">Likes: <span class="data">${photo.likes}</span></p> 
                    <p class="text">Comments: <span class="data">${photo.comments}</span></p>  
                    <p class="text">Views: <span class="data">${photo.views}</span></p> 
                    <p class="text">Downloads: <span class="data">${photo.downloads}</span></p> 
                    <p class="text">Tags: <span class="data">${photo.tags}</span></p> 
                </div>
            </li>`

    })

    listElement.insertAdjacentHTML("beforeend", photosList)
}
