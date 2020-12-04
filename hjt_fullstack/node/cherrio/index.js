const fetch = require("node-fetch");
let cheerio = require('cheerio');

let url = 'https://movie.douban.com/top250';

const main = async () => {
    fetch(url)
        .then(res => res.text())
        .then(body => {
            let $ = cheerio.load(body);
            let movieNodes = $('#contant.item');
            console.log(movieNodes);

        });
}
main();