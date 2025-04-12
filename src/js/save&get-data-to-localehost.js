export const saveDataToLocaleStore = (page) => {
    localStorage.setItem('page', page);
}

export const getDataToLocaleStore = () => {
    return Number.parseInt(localStorage.getItem('page'));
}