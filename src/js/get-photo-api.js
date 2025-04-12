export const getPhotosApi = (page) => {
    console.log("wwww")
    return fetch(`https://pixabay.com/api/?key=49689044-b50b4b2a27f84104cd981c364&page=${page + 1}&image_type=photo&per_page=12&colors=pink,green&orientation=horizontal`).
        then((response) => {
            return response.json()
        })

}