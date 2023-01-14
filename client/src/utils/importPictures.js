const imgRegex = /\.\/|\b\.png|.jpe?g|.svg|.webp/g;

require.context('../assets/images/', false, /\.(png|jpe?g|svg|webp)$/);

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace(imgRegex, '')] = r(item);
    });
    return images;
}

export const images = importAll(
    require.context('../assets/images/', false, /\.(png|jpe?g|svg|webp)$/)
);
