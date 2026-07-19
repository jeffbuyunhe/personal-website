export const deadDogStore = {
    name: "Dead Dog Records",
    baseUrl: "https://www.deaddogrecords.com/search/?q=",
    selectors: {
        productUrl: ".product .info a",
        productImg: ".product-img img",
        productPrice: ".price",
        productAvailability: ".availability span",
    },
};
