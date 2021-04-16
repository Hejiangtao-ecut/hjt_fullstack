var flipAndInvertImage = function (image) {
    image.forEach(element => {
        element.reverse();
        for (let i = 0; i < element.length; i++){
            element[i] = (element[i] == 0 ? 1 : 0);
        }
    });
    return image;
};
flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]);