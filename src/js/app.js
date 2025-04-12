import { getPhotosApi } from "./get-photo-api"
import { makePhotoMarkup } from "./make-photo-markup"
import { getDataToLocaleStore, saveDataToLocaleStore } from "./save&get-data-to-localehost"

export const listElement = document.querySelector("#list")
const btnElement = document.querySelector("#btn")


let page = 1


if (localStorage.getItem("page")) {
    page = getDataToLocaleStore()
}


for (let i = 0; i < page; i += 1) {
    getPhotosApi(i).then((data) => {
        console.log(data)
        makePhotoMarkup(data, listElement, page)
    })
}

btnElement.addEventListener("click", () => {
    page += 1
    saveDataToLocaleStore(page)
    getPhotosApi(page).then((data) => {
        makePhotoMarkup(data, listElement, page)
    })
})