export const popMusicStore = {
    name: "Pop Music",
    baseUrl: "https://www.pop-music.ca/search/?q=",
    selectors: {
        productUrl: ".product .info a",
        productImg: ".product-img img",
        productPrice: ".price",
        productAvailability: ".availability span",
    },
};
