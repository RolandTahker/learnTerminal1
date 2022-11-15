import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

for(let i=1; i<=2696; i++){

    console.log(response.data)
    const $ = cheerio.load(response.data);
    let log = $('#comic img')
    console.log(img.attr('src'));
    console.log(img.attr('title'));
    console.log(img.attr('alt'));
}
function cacheSet(name, data){
    if(!fs.existsSync('cache')){
        fs.mkdirSync('cahce');
    }

    let file = fs.openSync('cache/' + name +'.txt', 'w');
    fs.writeFileSync(file,'hello file');
    fs.closeSync(file);
}

function cacheGet(name){
    let file = fs.openSync('cache/' + name +'.txt', 'w');
    let data = fs.readFileSync(file);
    fs.closeSync(file);
    return data;
}
function cacheExists(name){
    return fs.existsSync('cache/'+name);
}

async function cacheOrRequest(id) {
    if(!cacheExists(id)){
        axios.get('https://xkcd.com' + id + '/').then(response => {
        //console.log(response.data)
        cacheSet(id, response.data);
        return response.data;

    });
    await new Promise(r => setTimeout(r, 2000));
    } else {
        return cacheGet(id);
    }
}