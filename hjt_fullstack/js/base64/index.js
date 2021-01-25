const webp = require('webp-converter')
webp.cwebp("1.webp", "output.webp", "-q 80", function (status, error) {
    console.log(status)
})