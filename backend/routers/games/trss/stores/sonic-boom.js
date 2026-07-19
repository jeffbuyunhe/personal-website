export const sonicBoomStore = {
    name: "Sonic Boom",
    baseUrl: "https://www.sonicboommusic.com/search?type=product&q=",
    selectors: {
        productUrl: ".product-item__info-inner a",
        productImg: ".aspect-ratio img",
        productPrice: ".price",
        productAvailability: ".flair-badge-layout > div",
    },
    /* Sonic Boom serves a tiny thumbnail by default; request a larger variant. */
    transform: (result) => ({ ...result, img: result.img.replace("60x", "1660x") }),
};
