console.log("Hello Ashu!\n");

const axios = require('axios');
const Nightmare = require('nightmare');
const cheerio = require('cheerio');

const url = 'https://news.ycombinator.com';
 axios.get(url)
    .then(response => {
        let ycombinator_html_data = response.data;
       // console.log(ycombinator_html_data);
        console.log(getData(ycombinator_html_data));
    })
    .catch(error => {
        console.log(error);
    })


    let getData = ycombinator_html_data => {
        data = [];
        const $ = cheerio.load(ycombinator_html_data);
        $('table.itemlist tr td:nth-child(3)').each((i,elem)=> {
            data.push({
                title: $(elem).text(),
                link: $(elem).find('a.storylink').attr('href')
            });
        });
        console.log(data);
    }